'use server';
import { revalidatePath } from 'next/cache';

import { FormLoginValue, LoginResponse } from '../lib/login.valid-schema';
import { createSessionCookie } from '@/lib/auth-utils';
import { apiUrl } from '@/lib/enum';

export async function loginAction(loginData: FormLoginValue) {

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + apiUrl.loginUser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        const result: LoginResponse = await response.json();
        await createSessionCookie(result.data?.accessToken as string)

        console.log('LoginResponse:', result);

        // Optionally revalidate any data caches in your Next.js app
        revalidatePath('/users');
        return result;

    } catch (error) {
        console.error(error);
    }
}