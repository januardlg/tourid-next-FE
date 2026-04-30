import { ApiResponse } from "@/dtos/api-dto";
import { PackageTourProductDTO } from "@/features/our-tour/lib/package-tour.dto";
import { PaymentMethodResponseDTO } from "../lib/payment-method";

// client requests go through BFF (Route Handler) to protect data
// use BFF (Route Handler) => protect tokens / secrets, avoid CORS, centralize logic

export async function getPackageTourDetailClient(tourId: string) {
  const response = await fetch("/api/package-tour/" + tourId, {
    method: "GET",
  });

  // console.log("HIT API CLIENT", tourId)

  const result: ApiResponse<PackageTourProductDTO> = await response.json();

  return result;
}

export async function getPaymentMethodListClient() {
  const response = await fetch("/api/payment-method", {
    method: "GET",
  });

  const result: ApiResponse<PaymentMethodResponseDTO[]> = await response.json();

  return result;
}
