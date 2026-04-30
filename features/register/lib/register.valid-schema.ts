import { z } from "zod"

export const passwordRegex = /^(?=.*[A-Z])(?=.*\d).*$/

export const passwordLengthErrorMessage = 'too short (minimal character is 8)'
export const passwordCharacterErrorMessage = "must contain at least one uppercase letter and one number."

export const emailAddressErrorMessage = 'must be a valid email address'

export const registerUserValidationSchema = z.object({
    username: z.string().min(5, 'too short (minimal character is 5)').max(20, 'too long (maximal character 20)'),
    email: z.email(emailAddressErrorMessage),
    password: z.string().min(8, passwordLengthErrorMessage).regex(passwordRegex, passwordCharacterErrorMessage),
    repassword: z.string().min(8, passwordLengthErrorMessage).regex(passwordRegex, passwordCharacterErrorMessage)
}).refine(
    (values) => {
        return values.password === values.repassword;
    },
    {
        message: "must same with previous password",
        path: ["repassword"],
    }
);




export type FormRegisterValue = z.infer<typeof registerUserValidationSchema>