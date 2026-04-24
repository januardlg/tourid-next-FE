import { ApiResponse } from "@/lib/api";
import { ConfirmPaymentPayloadDTO, ConfirmPaymentResponseDTO } from "../../trip-history/lib/trip-history";
import { createError } from "@/lib/response-handler";

export const confirmPaymentOrderPackageTour = async (dataPayload: ConfirmPaymentPayloadDTO) => {

    try {
        const res = await fetch('/api/trip-history/confirm-payment', {
            method: 'POST',
            body: JSON.stringify(dataPayload)
        })

        console.log('res confirn', res)
        if (!res.ok) {
            throw createError(res?.statusText, res?.status)
        }

        const result: ApiResponse<ConfirmPaymentResponseDTO> = await res.json()

        return result
    } catch (error) {
        throw error
    }

}