import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { FormLoginValue, loginUserValidationSchema } from "../lib/login.valid-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginAction } from "../actions/login-action"

export const useLogin = () => {

    const initialValueFormLogin = {
        email: '',
        password: '',
    }


    const {
        control,
        handleSubmit,

        formState: { errors, isLoading, isSubmitting }
    } = useForm<FormLoginValue>({
        resolver: zodResolver(loginUserValidationSchema),
        defaultValues: initialValueFormLogin
    })


    const onSubmit: SubmitHandler<FormLoginValue> = async (data: FormLoginValue) => {
        console.log('isloading', isLoading)
        console.log('isSubmitting', isSubmitting)
        const response = await loginAction(data)

        console.log({ response })
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