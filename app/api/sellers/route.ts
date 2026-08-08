import { NextResponse } from 'next/server';
import { sql, initializeDatabase } from '@/lib/db';
import { cookies } from 'next/headers';

// Helper to verify admin
async function verifyAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token');
  return token && token.value === 'authenticated';
}

export async function GET(request: Request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Auto-initialize the database table if it doesn't exist
    await initializeDatabase();

    const result = await sql`SELECT * FROM sellers ORDER BY id DESC`;
    return NextResponse.json({ sellers: result });
  } catch (error) {
    console.error('Error fetching sellers:', error);
    return NextResponse.json({ error: 'Failed to fetch sellers' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { seller_id, name, domain, seller_type } = body;

    if (!seller_id || !name || !domain || !seller_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO sellers (seller_id, name, domain, seller_type, updated_at)
      VALUES (${seller_id}, ${name}, ${domain}, ${seller_type}, CURRENT_TIMESTAMP)
      RETURNING *
    `;

    return NextResponse.json({ success: true, seller: result[0] });
  } catch (error: any) {
    console.error('Error adding seller:', error);
    if (error.message?.includes('duplicate key')) {
       return NextResponse.json({ error: 'Seller ID already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to add seller' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, seller_id, name, domain, seller_type } = body;

    if (!id || !seller_id || !name || !domain || !seller_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      UPDATE sellers
      SET seller_id = ${seller_id},
          name = ${name},
          domain = ${domain},
          seller_type = ${seller_type},
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: 'Seller not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, seller: result[0] });
  } catch (error) {
    console.error('Error updating seller:', error);
    return NextResponse.json({ error: 'Failed to update seller' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing seller id' }, { status: 400 });
    }

    await sql`DELETE FROM sellers WHERE id = ${id}`;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting seller:', error);
    return NextResponse.json({ error: 'Failed to delete seller' }, { status: 500 });
  }
}
