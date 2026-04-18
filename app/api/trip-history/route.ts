import { ApiResponse } from "@/dtos/api-dto";
import { OrderPackageResponseDTO } from "@/features/trip-history/lib/trip-history";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
//   console.log("ACCESS TOKEN", request.cookies.get("accessToken")?.value);

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/orderPackageTour", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${request.cookies.get("accessToken")?.value}`,
    },
  });

//   console.log("RESPONSE SERVER", res);

  const result: ApiResponse<OrderPackageResponseDTO[]> = await res.json();

  return Response.json(result);
}
