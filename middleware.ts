import { NextRequest, NextResponse } from 'next/server';

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per minute

/**
 * Rate limiting middleware
 * Prevents abuse by limiting requests per IP address
 */
function rateLimit(request: NextRequest): NextResponse | null {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const now = Date.now();

  const record = rateLimitStore.get(ip);

  if (record && now < record.resetTime) {
    if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }
    record.count++;
  } else {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
  }

  return null;
}

/**
 * Security middleware
 * Validates requests and enforces security policies
 */
export function middleware(request: NextRequest) {
  // Skip rate limiting for static assets
  if (request.nextUrl.pathname.startsWith('/_next/') ||
      request.nextUrl.pathname.startsWith('/public/') ||
      request.nextUrl.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$/)) {
    return NextResponse.next();
  }

  // Apply rate limiting to API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const rateLimitResponse = rateLimit(request);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }
  }

  // Add security headers
  const response = NextResponse.next();

  // Prevent information disclosure
  response.headers.set('X-Powered-By', 'Succession');
  response.headers.set('Server', 'Succession');

  // Add request ID for logging
  const requestId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  response.headers.set('X-Request-ID', requestId);

  return response;
}

export const config = {
  matcher: [
    // Match all routes except static files
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
