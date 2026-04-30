import { ApiResponse } from "@/dtos/api-dto";
import { PaymentMethodResponseDTO } from "@/features/our-tour-detail/lib/payment-method";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/payment-method", {
    method: "GET",
  });
  const result: ApiResponse<PaymentMethodResponseDTO[]> = await res.json();

  return Response.json(result);
}
