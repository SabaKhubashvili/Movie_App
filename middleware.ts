import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  });
  const url = new URL(process.env.BASE_URL + '/api/auth/isAdmin').toString();
  if (!token?.email) {
    console.log(token?.email);
    return NextResponse.redirect(new URL('/',request.url));
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: token.email }),
  });

  if (response.ok) {
    const data = await response.json();
    if (data.isAdmin) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else {
    console.log('Request failed:', response.status);
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: '/admin/:path*',
};
