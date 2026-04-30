// middleware.ts
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getUserDataFromJWT } from './lib/auth-utils';

export async function proxy(request: NextRequest) {

    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/home', request.url))
    }

    const res = NextResponse.next()

    // res.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/')
    res.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    const token = request.cookies.get('accessToken')?.value;
    const { pathname } = request.nextUrl;

    const dataToken = await getUserDataFromJWT(token as string)

    const authRoutes = pathname.startsWith('/login') || pathname.startsWith('/register')

    if (dataToken?.isAdmin == true && (pathname.startsWith('/trip-history') || authRoutes)) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (dataToken?.isAdmin == false && (pathname.startsWith('/dashboard') || authRoutes)) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    if (!dataToken && (pathname.startsWith('/trip-history') || pathname.startsWith('/dashboard'))) {
        return NextResponse.redirect(new URL('/login', request.url));
    }


    return res
}