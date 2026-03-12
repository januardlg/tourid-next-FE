import { ApiResponse } from "@/dtos/api-dto";
import { emailAddressErrorMessage, passwordCharacterErrorMessage, passwordLengthErrorMessage, passwordRegex } from "@/features/register/lib/register.valid-schema"
import { z } from "zod"

export const loginUserValidationSchema = z.object({
    email: z.email(emailAddressErrorMessage),
    password: z.string().min(8, passwordLengthErrorMessage).regex(passwordRegex, passwordCharacterErrorMessage)
})

export type FormLoginValue = z.infer<typeof loginUserValidationSchema>


export interface LoginResponseDTO {
    accessToken: string;
}


export type LoginResponse = ApiResponse<LoginResponseDTO>