"use client"
import ListBoxTid, { IListOption } from "@/features/home/components/list-box"
import { useState } from "react"

const FilterStatus = () => {


    const filterStatusOptions: IListOption[] = [
        {
            id: 'option', name: 'Select Status', disabled: true
        },
        {
            id: 'paid', name: 'Paid'
        }
    ]


    const [selectedStatus, setSelectedStatus] = useState(filterStatusOptions[0])

    return (
        <div className="shadow-xl">

            <ListBoxTid value={selectedStatus} listOptions={filterStatusOptions} onChange={setSelectedStatus} />
        </div>
    )
}

export default FilterStatus