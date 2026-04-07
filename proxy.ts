// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUserDataFromJWT } from './lib/auth-utils';

export async function proxy(request: NextRequest) {
    const token = request.cookies.get('accessToken')?.value;
    const { pathname } = request.nextUrl;

    const dataToken = await getUserDataFromJWT(token as string)

    const authRoutes = pathname.startsWith('/login') || pathname.startsWith('/register')

    if (dataToken?.isAdmin == true && (pathname.startsWith('/trip-history') || authRoutes)) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (dataToken?.isAdmin == false && (authRoutes)) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    if (!token && (pathname.startsWith('/trip-history') || pathname.startsWith('/dashboard'))) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}
