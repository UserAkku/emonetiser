import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const revalidate = 0; // Disable caching to always get fresh data

export async function GET() {
  try {
    const result = await sql`SELECT seller_id, name, domain, seller_type, updated_at FROM sellers ORDER BY id ASC`;
    
    // Find the latest updated_at date
    let latestDate = new Date(); // Default to now
    if (result.length > 0) {
      const maxDate = result.reduce((latest, current) => {
        const currentDate = new Date(current.updated_at);
        return currentDate > latest ? currentDate : latest;
      }, new Date(0));
      if (maxDate.getTime() > 0) {
        latestDate = maxDate;
      }
    }

    // Format date as DD-MM-YYYY
    const day = String(latestDate.getDate()).padStart(2, '0');
    const month = String(latestDate.getMonth() + 1).padStart(2, '0');
    const year = latestDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    // Clean up response objects to exactly match requirements
    const sellers = result.map(row => ({
      seller_id: row.seller_id,
      name: row.name,
      domain: row.domain,
      seller_type: row.seller_type
    }));

    const response = {
      version: "1.0",
      ext: {
        last_updated: formattedDate
      },
      sellers: sellers
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching sellers for public endpoint:', error);
    // If DB fails (e.g. not initialized yet), return a default empty structure
    return NextResponse.json({
      version: "1.0",
      ext: {
        last_updated: "Unknown"
      },
      sellers: []
    });
  }
}
