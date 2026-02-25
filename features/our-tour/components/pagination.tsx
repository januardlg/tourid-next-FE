'use client'
import React, { useState } from "react"
import ArrowNextIcon from "@/components/icons/arrow-next-icon"

const Pagination = () => {

    // const totalPagesFromResponse = 5
    // const LIMIT: number = 5

    // const [page, setPage] = useState<number>(1)



    return (
        <section className="mt-15 w-full flex justify-center items-center">
            <div className="flex-align-items-center gap-7 text-lg font-medium">
                <div>01</div>
                <div>02</div>
                <ArrowNextIcon />
            </div>
        </section>
    )
}

export default Pagination