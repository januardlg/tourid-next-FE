import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { FormRegisterValue, registerUserValidationSchema } from "../lib/user.valid-schema"
import { zodResolver } from "@hookform/resolvers/zod"

export const useRegister = () => {
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
    }

    const onError: SubmitErrorHandler<FormRegisterValue> = (errors) => {
        console.log("Form Submission Errors:", errors);
    };


    return {
        initialValueFormRegister,
        control,

        handleSubmit,
        onSubmit,
        onError
    }
}