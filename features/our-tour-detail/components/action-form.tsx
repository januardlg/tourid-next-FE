'use client'

import Button from "@/components/button/button"
import ListBoxTid from "@/features/home/components/list-box"

import { Controller } from "react-hook-form"

import { useOurTourDetail } from "../hooks/useOurTourDetail"

const ActionForm = () => {

    const {

        numberOfGuestListOption,
        paymentMethodOptions,

        numberOfGuest,
        handleNumberOfGuest,

        paymentMethod,
        handleSelectPaymentMethod,

        control,
        getValues,
        handleSubmit,
        onSubmit,
        onError

    } = useOurTourDetail()


    return (
        <div className="w-full drop-shadow-2xl bg-white p-6 space-y-3">
            <p className="text-center text-lg font-bold">Booking</p>
            <div className="h-0.5 bg-tid-grey-100/10 w-full" />
            <Controller
                name="numberOfGuests"
                control={control}
                render={({ field, fieldState }) => (
                    <ListBoxTid label="No Of Guest" value={numberOfGuest} listOptions={numberOfGuestListOption}
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
                    <ListBoxTid label="Payment Method" value={paymentMethod} listOptions={paymentMethodOptions}
                        onChange={(value) => {
                            field.onChange(value.id)
                            handleSelectPaymentMethod(value)
                        }}
                        error={fieldState.error?.message}
                    />
                )}
            />

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