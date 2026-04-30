import { ApiResponse } from "@/dtos/api-dto";

import { PackageTourProductDTO } from "@/features/our-tour/lib/package-tour.dto";
import { PaymentMethodResponseDTO } from "../lib/payment-method";

export async function getPackageTourDetailServer(tourId: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/packageTour/" + tourId,
    {
      method: "GET",
    },
  );
  // console.log('HIT API SERVER DETAILS', tourId)

  const result: ApiResponse<PackageTourProductDTO> = await response.json();

  return result;
}

export async function getPaymentMethodListServer() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/payment-method",
    {
      method: "GET",
    },
  );

  const result: ApiResponse<PaymentMethodResponseDTO[]> = await response.json();

  return result;
}
