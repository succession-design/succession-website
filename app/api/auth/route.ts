import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

export async function POST(request: NextRequest) {
  try {
    const { action, email, password } = await request.json();

    if (action === 'login') {
      // In production, validate against your backend API
      // For now, create a JWT token
      const token = await new SignJWT({ email, role: 'user' })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('30d')
        .sign(JWT_SECRET);

      const response = NextResponse.json({
        success: true,
        token,
        user: { email },
      });

      // Set secure HTTP-only cookie
      response.cookies.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60, // 30 days
      });

      return response;
    }

    if (action === 'signup') {
      // In production, create user in your backend
      const token = await new SignJWT({ email, role: 'user' })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('30d')
        .sign(JWT_SECRET);

      const response = NextResponse.json({
        success: true,
        token,
        user: { email },
      });

      response.cookies.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60,
      });

      return response;
    }

    if (action === 'logout') {
      const response = NextResponse.json({ success: true });
      response.cookies.delete('auth-token');
      return response;
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
