import { IPaymentStatus, PAYMENT_STATUS } from "@/features/trip-history/lib/constants"
import dayjs from "dayjs"

export const getPaymentTimeLeftInSeconds = (expiredDate: Date) => {
    return dayjs(expiredDate).diff((dayjs()), 'second')
}


export const getCountdownFormatFromSeconds = (secondsRemain: number) => {
    const hours = Math.floor(secondsRemain / 3600)
    const restMinutes = secondsRemain % 3600

    const minutes = Math.floor(restMinutes / 60)
    const resSeconds = restMinutes % 60

    const seconds = resSeconds % 60

    const formatWithTwoDigit = (time: number) => {
        return time.toString().padStart(2, '0')
    }

    return formatWithTwoDigit(hours) + ':' + formatWithTwoDigit(minutes) + ':' + formatWithTwoDigit(seconds)
}