'use client'
import React, { useState } from "react"
import ArrowNextIcon from "@/components/icons/arrow-next-icon"
import { cn } from "@/lib/utils"

const Pagination = () => {

    const totalPagesFromResponse = 5
    // const LIMIT: number = 5
    const [activePage, setActivePage] = useState(1)

    const arrTotalPages = Array.from({ length: totalPagesFromResponse }, (_, index) => index + 1)



    const handleNextPage = () => {
        setActivePage((prevState: number) => {
            if (prevState < totalPagesFromResponse) {
                return prevState + 1
            } else {
                return prevState
            }
        })
    }

    const handlePrevPage = () => {
        setActivePage((prevSate) => {
            if (prevSate > 1) {
                return prevSate - 1
            } else return 1
        })
    }

    return (
        <section className="mt-15 w-full flex justify-center items-center">
            <div className="flex-align-items-center gap-7">
                <button className={
                    cn('opacity-100 transition duration-300 ease-in-out rotate-180 cursor-pointer', activePage === 1 && 'opacity-0')
                } onClick={handlePrevPage}>
                    <ArrowNextIcon />
                </button>
                {arrTotalPages.slice(activePage - 1, activePage + 1).map((val: number) => (
                    <div key={val} className={cn("text-lg font-medium text-tid-grey-200", activePage === val && 'font-bold text-black')}>{val}</div>
                ))}
                <button className={
                    cn('opacity-100 transition duration-300 ease-in-out cursor-pointer', activePage === totalPagesFromResponse && 'opacity-0')
                } onClick={handleNextPage}>
                    <ArrowNextIcon />
                </button>


            </div>
        </section>
    )
}

export default Pagination