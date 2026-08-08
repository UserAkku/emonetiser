import { NextResponse } from 'next/server';
import { initializeDatabase } from '@/lib/db';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token');
  if (!token || token.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await initializeDatabase();
  return NextResponse.json({ message: 'Database initialization triggered. Check server logs.' });
}
