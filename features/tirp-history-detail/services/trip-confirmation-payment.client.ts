import { ApiResponse } from "@/lib/api";
import { ConfirmPaymentPayloadDTO, ConfirmPaymentResponseDTO } from "../../trip-history/lib/trip-history";
import { createError } from "@/lib/response-handler";

export const confirmPaymentOrderPackageTour = async (dataPayload: ConfirmPaymentPayloadDTO) => {

    try {
        const res = await fetch('/api/trip-history/confirm-payment', {
            method: 'POST',
            body: JSON.stringify(dataPayload)
        })
        const result: ApiResponse<ConfirmPaymentResponseDTO> = await res.json()

        if (!res.ok) {
            throw createError(result?.message, res?.status)
        }

        return result
    } catch (error) {
        throw error
    }

}