import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { FormLoginValue, loginUserValidationSchema } from "../lib/login.valid-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginAction } from "../actions/login-action"
import { useLoadingOverlayStore } from "@/providers/loading-overlay-provider"


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

    const { setIsOpenLoadingOverlay } = useLoadingOverlayStore((store) => store)

    const onSubmit: SubmitHandler<FormLoginValue> = async (data: FormLoginValue) => {
        setIsOpenLoadingOverlay(true)
        try {
            const response = await loginAction(data)
            console.log('response', response)
        } catch (error) {
            console.log('error', error)
        } finally {
            setIsOpenLoadingOverlay(false)
        }
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