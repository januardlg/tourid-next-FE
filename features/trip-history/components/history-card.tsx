"use client"
import Image from "next/image"

// components
import CalendarIcon from "@/components/icons/calendar-icon"
import ClockIcon from "@/components/icons/clock-icon"

// utils
import dayjs from "dayjs"
import { OrderPackageResponseDTO } from "../lib/trip-history"
import { getDurationDate, getRupiahCurrencyFormat } from "@/lib/utils"
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { PAYMENT_STATUS } from "../lib/constants"
dayjs.extend(localizedFormat)
interface HistoryCardProps {
    historyData: OrderPackageResponseDTO
}

const HistoryCard = ({ historyData }: HistoryCardProps) => {
    return (
        <div className="w-full rounded-xl shadow-lg border border-tid-grey-400 p-5 grid grid-cols-12 gap-5 text-tid-grey-200">
            <div className="col-span-3">
                <Image src={`/images/step-content.png`} alt="content" width={200} height={200} className="w-full h-full rounded-xl" />
            </div>
            <div className="col-span-6  ">
                <p className="text-lg font-semibold  text-black">{historyData.packageTourName}</p>
                <div className="flex-align-items-center space-x-1.5 mt-2.5">
                    <CalendarIcon />
                    <p>{dayjs(historyData.packageTourStartDate).format('L')}</p>
                </div>
                <div className="flex-align-items-center space-x-1.5">
                    <ClockIcon />
                    <p> {getDurationDate(historyData.packageTourEndDate, historyData.packageTourStartDate)} days trip</p>
                </div>
                <p className="mt-5 text-sm font-semibold">Accomodation Address</p>
                <p className="">{historyData.hostelryName} </p>
                <p className="text-sm">{historyData.hostelryAddress} <span><a className="text-blue-600" rel="noopener noreferrer" href={historyData.hostelryLocation} target="_blank">View on map</a></span></p>

            </div>
            <div className="col-span-3">
                <p className="text-sm font-semibold">Total Payment</p>
                <p className="text-2xl text-tid-red-100 font-black mt-1">{getRupiahCurrencyFormat(historyData.totalPayment)} </p>
                <p className="mt-5 text-sm font-semibold">Payment Status</p>
                <p className="mt-1 font-semibold">{historyData.paymentStatus ? PAYMENT_STATUS[historyData.paymentStatus as keyof typeof PAYMENT_STATUS] : ''}</p>
            </div>
        </div >
    )
}

export default HistoryCard