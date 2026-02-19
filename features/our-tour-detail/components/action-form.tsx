'use client'

import Button from "@/components/button/button"
import ListBoxTid, { IListOption } from "@/features/home/components/list-box"
import { useState } from "react"


const ActionForm = () => {


    const NumberOfGuestOption: IListOption[] = [
        { id: 'option', name: 'Select Number Of Guest', disabled: true },
        { id: 1, name: 1 },
        { id: 2, name: 2 }
    ]

    const PaymentMethodOptions: IListOption[] = [
        { id: 'option', name: 'Select Payment Method', disabled: true },
        { id: 'bca', name: "BCA" },
        { id: 'mandiri', name: "MANDIRI" }
    ]

    const [numberOfGuest, setNumberOfGuest] = useState(NumberOfGuestOption[0])
    const [paymentMethod, setPaymentMethod] = useState(PaymentMethodOptions[0])

    return (
        <div className="w-full drop-shadow-2xl bg-white p-6 space-y-3">
            <p className="text-center text-lg font-bold">Booking</p>
            <div className="h-0.5 bg-tid-grey-100/10 w-full" />
            <ListBoxTid label="No Of Guest" value={numberOfGuest} listOptions={NumberOfGuestOption} onChange={setNumberOfGuest} />
            <ListBoxTid label="Payment Method" value={paymentMethod} listOptions={PaymentMethodOptions} onChange={setPaymentMethod} />
            <p className="text-tid-grey-200 text-center text-sm font-semibold">Subtotal</p>
            <p className="text-3xl text-tid-red-100 font-black text-center">Rp 350.000 </p>
            <Button onClick={() => { }}>
                <p>Confirm Booking</p>
            </Button>
            <Button type="OUTLINE" onClick={() => { }}>
                <p>Save To Wishlist</p>
            </Button>
            <Button type="OUTLINE" onClick={() => { }}>
                <p>Share The Activity</p>
            </Button>
        </div>
    )
}

export default ActionForm