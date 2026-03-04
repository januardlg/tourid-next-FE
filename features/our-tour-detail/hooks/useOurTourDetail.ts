import { useState } from "react"

import { IListOption } from "@/features/home/components/list-box"

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"

import { AddOrderPackagePayload, addOrderPackagePayloadSchema } from "../lib/our-tour-detail-schema"


const NumberOfGuestOption: IListOption[] = [
    { id: 'option', name: 'Select Number Of Guest', disabled: true },
    { id: 1, name: 1 },
    { id: 2, name: 2 }
]

const PaymentMethodOptions: IListOption[] = [
    { id: 'option', name: 'Select Payment Method', disabled: true },
    { id: 1, name: "BCA" },
    { id: 2, name: "MANDIRI" }
]

export const useOurTourDetail = () => {

    const numberOfGuestListOption = NumberOfGuestOption
    const [paymentMethodOptions, setPaymentMethodOptions] = useState<IListOption[]>(PaymentMethodOptions)


    const [numberOfGuest, setNumberOfGuest] = useState(NumberOfGuestOption[0])
    const [paymentMethod, setPaymentMethod] = useState(PaymentMethodOptions[0])


    const initialAddOrderPackagePayload: AddOrderPackagePayload = {
        tourPackageId: 2,
        paymentMethodId: 0,
        numberOfGuests: 0,
        totalPayment: '0'
    }


    const { control, handleSubmit, formState, setValue, getValues } = useForm<AddOrderPackagePayload>({
        resolver: zodResolver(addOrderPackagePayloadSchema),
        defaultValues: initialAddOrderPackagePayload
    })

    const handleNumberOfGuest = (value: IListOption) => {
        const totalPayment = Number(value.name) * 40000
        setNumberOfGuest(value)
        setValue('totalPayment', totalPayment.toString())
    }

    const handleSelectPaymentMethod = (value: IListOption) => {
        setPaymentMethod(value)
    }

    const onSubmit: SubmitHandler<AddOrderPackagePayload> = (data: AddOrderPackagePayload) => {
        console.log("data", data)
    }

    const onError: SubmitErrorHandler<AddOrderPackagePayload> = (errors) => {
        console.log("Form Submission Errors:", errors);
    };


    return {
        numberOfGuestListOption,
        paymentMethodOptions,

        numberOfGuest,
        handleNumberOfGuest,

        paymentMethod,
        handleSelectPaymentMethod,

        control,
        formState,
        setValue,
        getValues,
        handleSubmit,
        onSubmit,
        onError

    }
}