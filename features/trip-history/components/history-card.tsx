"use client"
import Image from "next/image"

import CalendarIcon from "@/components/icons/calendar-icon"
import ClockIcon from "@/components/icons/clock-icon"

const HistoryCard = () => {
    return (
        <div className="w-full rounded-xl shadow-lg border border-tid-grey-400 p-5 grid grid-cols-12 gap-5 text-tid-grey-200">
            <div className="col-span-3">
                <Image src={`/images/step-content.png`} alt="content" width={200} height={200} className="w-full h-full rounded-xl" />
            </div>
            <div className="col-span-6  ">
                <p className="text-lg font-semibold  text-black">Trip To Greece</p>
                <div className="flex-align-items-center space-x-1.5 mt-2.5">
                    <CalendarIcon />
                    <p>10/12/2021</p>
                </div>
                <div className="flex-align-items-center space-x-1.5">
                    <ClockIcon />
                    <p> 2 days trip</p>
                </div>
                <p className="mt-5 text-sm font-semibold">Accomodation Address</p>
                <p className="">Horas Hotel </p>
                <p className="text-sm">Jl Sudirman No 12 Kota Pematangsiantar <span><a className="text-blue-600" rel="noopener noreferrer" href={'https://google.com/maps/place/hotel+indonesia/data=!4m2!3m1!1s0x2e69f421963cd607:0x503cb9e9306e657a?sa=X&ved=1t:242&ictx=111'} target="_blank">View on map</a></span></p>

            </div>
            <div className="col-span-3">
                <p className="text-sm font-semibold">Total Payment</p>
                <p className="text-2xl text-tid-red-100 font-black mt-1">Rp 350.000 </p>
                <p className="mt-5 text-sm font-semibold">Payment Date</p>
                <p className="mt-1">10/12/2021 10:30 am</p>
            </div>
        </div >
    )
}

export default HistoryCard