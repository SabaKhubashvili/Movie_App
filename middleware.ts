import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  });
  if (request.nextUrl.pathname.startsWith('/profile')) {
    if(!token){
      return NextResponse.redirect(new URL('/',request.url));
    }
  }


  const url = new URL(request.nextUrl.origin+ '/api/auth/isAdmin').toString();
  
  if (!token?.email) {
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
    return NextResponse.redirect(new URL('/', request.url));
  }
  
}

export const config = {
  matcher: ['/admin/:path*','/profile/:path'],
};
