import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export default function withAuthorization(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (request: NextRequest, next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;
    if (requireAuth.some((path) => pathname.startsWith(path))) {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      });
      const user = getSession()
    }
    return middleware(request, next);
  };
}
