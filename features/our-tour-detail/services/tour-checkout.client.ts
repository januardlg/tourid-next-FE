import { createError } from "@/lib/response-handler";
import { AddOrderPackagePayload, CreateOrderPackageTourResponseDTO } from "../lib/our-tour-detail-schema";
import { ApiResponse } from "@/lib/api";

export async function checkoutPackageTour(body: AddOrderPackagePayload) {

    try {
        const res = await fetch('/api/package-tour/checkout/', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(body)
        })
        console.log('res client', res)
        if (!res.ok) {
            throw createError(res?.statusText, res?.status)
        }


        const result: ApiResponse<CreateOrderPackageTourResponseDTO> = await res.json()
        return result
    } catch (error) {
        throw error
    }

}