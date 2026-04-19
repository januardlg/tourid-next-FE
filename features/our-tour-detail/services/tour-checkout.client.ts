import { CreateOrderPackageTourResponseDTO } from "../lib/our-tour-detail-schema";
import { ApiResponse } from "@/dtos/api-dto";

export async function checkoutPackageTour(body: CreateOrderPackageTourResponseDTO) {

    const res = await fetch('api/package-tour/checkout/', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body)
    })

    if (!res.ok) {
        throw res
    }

    const result: ApiResponse<CreateOrderPackageTourResponseDTO> = await res.json()

    return result
}