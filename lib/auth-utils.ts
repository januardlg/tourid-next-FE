import { cookies } from 'next/headers'

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