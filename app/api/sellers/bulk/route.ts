import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { cookies } from 'next/headers';
import crypto from 'crypto';

async function verifyAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token');
  return token && token.value === 'authenticated';
}

function parseCSV(csvText: string) {
  const lines = csvText.split(/\r?\n/).filter(line => line.trim() !== '');
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
  
  const idIndex = headers.indexOf('seller_id');
  const nameIndex = headers.indexOf('name');
  const domainIndex = headers.indexOf('domain');
  const typeIndex = headers.indexOf('seller_type');

  if (idIndex === -1 || nameIndex === -1 || domainIndex === -1 || typeIndex === -1) {
    throw new Error('CSV must contain headers: seller_id, name, domain, seller_type');
  }

  const records = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    if (values.length >= 4) {
      records.push({
        seller_id: values[idIndex],
        name: values[nameIndex],
        domain: values[domainIndex],
        seller_type: values[typeIndex],
      });
    }
  }
  return records;
}

export async function POST(request: Request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { secure_url, public_id } = await request.json();

    if (!secure_url || !public_id) {
      return NextResponse.json({ error: 'Missing Cloudinary file details' }, { status: 400 });
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json({ error: 'Cloudinary credentials missing in environment variables' }, { status: 500 });
    }

    // 1. Fetch the file securely from Cloudinary in chunks/stream
    // Note: To fully avoid Vercel memory limits on multi-GB files, a background worker is needed.
    // However, fetching from the URL as text keeps the memory footprint lower than multi-part form parsing.
    const fileRes = await fetch(secure_url);
    if (!fileRes.ok) {
       return NextResponse.json({ error: 'Failed to fetch file from Cloudinary' }, { status: 500 });
    }
    const text = await fileRes.text();

    let records;
    try {
      records = parseCSV(text);
    } catch (e: any) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }

    if (records.length === 0) {
      return NextResponse.json({ error: 'No valid records found in CSV' }, { status: 400 });
    }

    let successCount = 0;
    let errorCount = 0;

    // Process in batches of 100 to avoid locking the database
    const batchSize = 100;
    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      
      // We process each batch sequentially
      for (const record of batch) {
        try {
          await sql`
            INSERT INTO sellers (seller_id, name, domain, seller_type, updated_at)
            VALUES (${record.seller_id}, ${record.name}, ${record.domain}, ${record.seller_type}, CURRENT_TIMESTAMP)
            ON CONFLICT (seller_id) 
            DO UPDATE SET 
              name = EXCLUDED.name,
              domain = EXCLUDED.domain,
              seller_type = EXCLUDED.seller_type,
              updated_at = CURRENT_TIMESTAMP
          `;
          successCount++;
        } catch (e) {
          console.error('Error inserting record:', record.seller_id, e);
          errorCount++;
        }
      }
    }

    // 4. Cleanup: Delete the file from Cloudinary (using destroy API)
    const destroyTimestamp = Math.floor(Date.now() / 1000).toString();
    const destroyStringToSign = `public_id=${public_id}&timestamp=${destroyTimestamp}${apiSecret}`;
    const destroySignature = crypto.createHash('sha1').update(destroyStringToSign).digest('hex');

    const destroyFormData = new FormData();
    destroyFormData.append('public_id', public_id);
    destroyFormData.append('api_key', apiKey);
    destroyFormData.append('timestamp', destroyTimestamp);
    destroyFormData.append('signature', destroySignature);

    await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/raw/destroy`, {
      method: 'POST',
      body: destroyFormData,
    }).catch(e => console.error('Failed to cleanup Cloudinary file:', e));

    return NextResponse.json({ 
      success: true, 
      message: `Processed ${records.length} records via Cloudinary. Success: ${successCount}, Failed: ${errorCount}` 
    });

  } catch (error) {
    console.error('Error processing bulk upload:', error);
    return NextResponse.json({ error: 'Failed to process CSV' }, { status: 500 });
  }
}

