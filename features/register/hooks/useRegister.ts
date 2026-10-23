import { useState } from "react"
import { useForm, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form"
import { FormRegisterValue, registerUserValidationSchema } from "../lib/register.valid-schema"
import { zodResolver } from "@hookform/resolvers/zod"

export const useRegister = () => {
    const [isValidationSuccessful, setIsValidationSuccessful] = useState(false)

    const initialValueFormRegister = {
        username: '',
        email: '',
        password: '',
        repassword: ''
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormRegisterValue>({
        resolver: zodResolver(registerUserValidationSchema),
        defaultValues: initialValueFormRegister
    })

    const onSubmit: SubmitHandler<FormRegisterValue> = (data: FormRegisterValue) => {
        console.log("data", data)
        setIsValidationSuccessful(true)
    }

    const onError: SubmitErrorHandler<FormRegisterValue> = (errors) => {
        console.log("Form Submission Errors:", errors);
    };


    return {
        initialValueFormRegister,
        control,

        handleSubmit,
        onSubmit,
        onError,
        isValidationSuccessful
    }
}