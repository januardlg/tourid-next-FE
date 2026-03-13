'use server';
import { revalidatePath } from 'next/cache';

import { FormLoginValue, LoginResponse } from '../lib/login.valid-schema';
import { createSessionCookie, getUserDataFromJWT } from '@/lib/auth-utils';
import { apiUrl } from '@/lib/enum';
import { redirect } from 'next/navigation'


export async function loginAction(loginData: FormLoginValue) {

    let userData

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + apiUrl.loginUser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });
        if (!response.ok) {
            throw await response.json()
        }
        const result: LoginResponse = await response.json();

        await createSessionCookie(result.data?.accessToken as string)

        userData = await getUserDataFromJWT(result?.data?.accessToken as string)

        // Optionally revalidate any data caches in your Next.js app
        revalidatePath('/users');
        return result;

    } catch (error) {
        return error
    } finally {
        if (userData?.email && userData.isAdmin) {
            redirect('/dashboard')
        } else if (userData?.email && !userData.isAdmin) {
            redirect('/home')
        }
    }
}