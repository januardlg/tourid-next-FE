import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import { IPaymentStatus, PAYMENT_STATUS } from "@/features/trip-history/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRupiahCurrencyFormat = (amount: string) => {
  const rawValue = amount?.replace(/\D/g, "");
  const numberValue = Number(rawValue);

  const formatted = numberValue.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return formatted;
};

export const getDateStringFromISO = (isoDate: string) => {
  const dateOnly = dayjs(isoDate).format("YYYY-MM-DD");
  return dateOnly;
};

export const getDateFormatFromDate = (date: Date) => {
  return dayjs(date).format('MMMM D, YYYY')
}

export const getDateFormatFromDateWithTime = (date: Date) => {
  return dayjs(date).format('MMMM D, YYYY h:mm A')
}


export const getChunkAccountNumber = (account: string) => {
  const chunks = []
  const size = 4
  for (let i = 0; i < account?.length; i += size) {
    const chunked = account.slice(i, (i + size))
    chunks.push(chunked)
  }

  return chunks.join("-")

}

export const getDurationDate = (endDate: Date, startDate: Date) => {
  return dayjs(endDate).diff(dayjs(startDate), "day");
};


// Returns an absolute http(s) URL, or undefined so relative values never resolve against localhost
export const getExternalUrl = (url?: string | null) => {
  const trimmed = url?.trim();
  if (!trimmed) return undefined;

  const candidate = /^[a-z][a-z\d+.-]*:/i.test(trimmed)
    ? trimmed
    : `https://${trimmed.replace(/^\/+/, "")}`;

  try {
    const parsed = new URL(candidate);
    return parsed.protocol === "http:" || parsed.protocol === "https:"
      ? parsed.href
      : undefined;
  } catch {
    return undefined;
  }
};

export const getPaymentStatusText = (status: IPaymentStatus) => {

  const statusText = PAYMENT_STATUS[status]
  return statusText
}
