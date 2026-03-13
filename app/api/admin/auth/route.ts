import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory admin store (in production, use a database)
const ADMIN_CREDENTIALS = {
  'lburks@lpventuregroup.com': {
    passwordHash: 'admin123', // In production, use bcrypt
    role: 'admin',
    createdAt: new Date(),
  },
};

export async function POST(request: NextRequest) {
  const { email, password, action } = await request.json();

  if (action === 'login') {
    const admin = ADMIN_CREDENTIALS[email as keyof typeof ADMIN_CREDENTIALS];
    
    if (!admin || admin.passwordHash !== password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create a simple session token (in production, use JWT)
    const token = Buffer.from(`${email}:${Date.now()}`).toString('base64');
    
    const response = NextResponse.json({
      success: true,
      token,
      email,
      role: admin.role,
    });

    // Set secure cookie
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return response;
  }

  if (action === 'logout') {
    const response = NextResponse.json({ success: true });
    response.cookies.delete('admin_token');
    return response;
  }

  return NextResponse.json(
    { error: 'Invalid action' },
    { status: 400 }
  );
}
