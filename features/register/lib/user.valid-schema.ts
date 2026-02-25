import { z } from "zod"

const passwordRegex = /^(?=.*[A-Z])(?=.*\d).*$/

const passwordLengthErrorMessage = 'too short (minimal character is 8)'
const passwordCharacterErrorMessage = "must contain at least one uppercase letter and one number."

const emailAddressErrorMessage = 'must be a valid email address'

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

export const loginUserValidationSchema = z.object({
    email: z.email(emailAddressErrorMessage),
    password: z.string().min(8, passwordLengthErrorMessage).regex(passwordRegex, passwordCharacterErrorMessage)
})


export type FormRegisterValue = z.infer<typeof registerUserValidationSchema>
export type FormLoginValue = z.infer<typeof loginUserValidationSchema>