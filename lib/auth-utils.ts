import { cookies } from 'next/headers'

import { jwtVerify } from 'jose';
import { IUserData } from '@/features/login/lib/login.valid-schema';

export const createSessionCookie = async (accessToken: string) => {

    const cookieStore = await cookies()

    cookieStore.set({
        name: 'accessToken',
        value: accessToken,
        httpOnly: true,
        path: '/',
        sameSite: 'none',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000
    })
}


export const getUserDataFromJWT = async (accessToken: string) => {
    try {
        const secretKey = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

        const { payload } = await jwtVerify(accessToken as string, secretKey);
        console.log({ payload })

        const userData: IUserData = {
            userId: payload?.userId as number,
            username: payload?.username as string,
            email: payload?.email as string,
            isAdmin: payload?.isAdmin as boolean
        }
        return userData

    } catch (error) {
        console.log('Failed Verify JWT', error)
    }
}