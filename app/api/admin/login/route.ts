import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, key } = body;

    const validId = process.env.ADMIN_ID;
    const validKey = process.env.ADMIN_KEY;

    if (!validId || !validKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (id === validId && key === validKey) {
      // Create a response and set the cookie
      const response = NextResponse.json({ success: true });
      
      // Simple cookie-based auth (for demonstration, in production use JWT or secure sessions)
      response.cookies.set({
        name: 'admin_token',
        value: 'authenticated',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 // 1 day
      });

      return response;
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
