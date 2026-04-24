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
        const result: ApiResponse<CreateOrderPackageTourResponseDTO> = await res.json()

        if (!res.ok) {
            throw createError(result?.message, res?.status)
        }

        return result
    } catch (error) {
        throw error
    }

}