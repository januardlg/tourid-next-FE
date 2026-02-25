'use client'

import Button from "@/components/button/button"
import ListBoxTid, { IListOption } from "@/features/home/components/list-box"
import { useState } from "react"
import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { AddOrderPackagePayload, addOrderPackagePayloadSchema } from "../lib/our-tour-detail-schema"
import { zodResolver } from "@hookform/resolvers/zod"


const ActionForm = () => {


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

    const [numberOfGuest, setNumberOfGuest] = useState(NumberOfGuestOption[0])
    const [paymentMethod, setPaymentMethod] = useState(PaymentMethodOptions[0])



    const handleNumberOfGuest = (value: IListOption) => {
        const totalPayment = Number(value.name) * 40000
        setNumberOfGuest(value)
        setValue('totalPayment', totalPayment.toString())
    }

    const handleSelectPaymentMethod = (value: IListOption) => {
        setPaymentMethod(value)
    }

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

    const onSubmit: SubmitHandler<AddOrderPackagePayload> = (data: AddOrderPackagePayload) => {
        console.log("data", data)
    }

    const onError: SubmitErrorHandler<AddOrderPackagePayload> = (errors) => {
        console.log("Form Submission Errors:", errors);
    };



    return (
        <div className="w-full drop-shadow-2xl bg-white p-6 space-y-3">
            <p className="text-center text-lg font-bold">Booking</p>
            <div className="h-0.5 bg-tid-grey-100/10 w-full" />
            <Controller
                name="numberOfGuests"
                control={control}
                render={({ field, fieldState }) => (
                    <ListBoxTid label="No Of Guest" value={numberOfGuest} listOptions={NumberOfGuestOption}
                        onChange={(value) => {
                            field.onChange(value.id)
                            handleNumberOfGuest(value)
                        }}
                        error={fieldState.error?.message}
                    />
                )}
            />

            <Controller
                name="paymentMethodId"
                control={control}
                render={({ field, fieldState }) => (
                    <ListBoxTid label="Payment Method" value={paymentMethod} listOptions={PaymentMethodOptions}
                        onChange={(value) => {
                            field.onChange(value.id)
                            handleSelectPaymentMethod(value)
                        }}
                        error={fieldState.error?.message}
                    />
                )}
            />

            {/* <ListBoxTid label="Payment Method" value={paymentMethod} listOptions={PaymentMethodOptions} onChange={setPaymentMethod} /> */}
            <p className="text-tid-grey-200 text-center text-sm font-semibold">Subtotal</p>
            <p className="text-3xl text-tid-red-100 font-black text-center">Rp {getValues('totalPayment')} </p>
            <Button onClick={handleSubmit(onSubmit, onError)}>
                <p>Confirm Booking</p>
            </Button>
            <Button variant="OUTLINE" onClick={() => { }}>
                <p>Save To Wishlist</p>
            </Button>
            <Button variant="OUTLINE" onClick={() => { }}>
                <p>Share The Activity</p>
            </Button>
        </div>
    )
}

export default ActionForm