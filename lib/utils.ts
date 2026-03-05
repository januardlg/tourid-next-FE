import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export const getDateFormat = (date: string): string => {
    const formattedDate = dayjs(date).format('DD/MM/YYYY')
    return formattedDate
}

export const getDateISOFormat = (date: string): string => {
    const isoStringSpecific = dayjs(date).format()
    return isoStringSpecific
}

export const getRupiahCurrencyFormat = (amount: string) => {

    const rawValue = amount.replace(/\D/g, "");
    const numberValue = Number(rawValue);

    const formatted = numberValue.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    });


    return formatted
}

export const getDateStringFromISO = (isoDate: string) => {
    const dateOnly = dayjs(isoDate).format('YYYY-MM-DD');
    return dateOnly
}
