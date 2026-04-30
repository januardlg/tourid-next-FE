"use client"

import Button from "@/components/button/button"
import ButtonLink from "@/components/button/button-link"
import PlusIcon from "@/components/icons/plus-icon"

const ButtonAddTour = () => {
    return (
        <ButtonLink type="PRIMARY" href="/our-tour-management/add" >
            <div className="flex items-center gap-2">
                <PlusIcon />
                <p>Add New</p>
            </div>
        </ButtonLink>
    )
}

export default ButtonAddTour