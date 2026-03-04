import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { FormLoginValue, loginUserValidationSchema } from "../lib/login.valid-schema"
import { zodResolver } from "@hookform/resolvers/zod"

export const useLogin = () => {

    const initialValueFormLogin = {
        email: '',
        password: '',
    }


    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormLoginValue>({
        resolver: zodResolver(loginUserValidationSchema),
        defaultValues: initialValueFormLogin
    })


    const onSubmit: SubmitHandler<FormLoginValue> = (data: FormLoginValue) => {
        console.log("data", data)
    }

    const onError: SubmitErrorHandler<FormLoginValue> = (errors) => {
        console.log("Form Submission Errors:", errors);
    };

    return {
        initialValueFormLogin,
        control,

        handleSubmit,
        onSubmit,
        onError
    }
}