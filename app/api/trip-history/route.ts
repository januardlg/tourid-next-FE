import { ApiResponse } from "@/dtos/api-dto";
import { MetaOrderPackageTourDTO, OrderPackageResponseDTO } from "@/features/trip-history/lib/trip-history";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("ACCESS TOKEN", request.cookies.get("accessToken")?.value);

  const { searchParams } = request.nextUrl;

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/orderPackageTour?" + searchParams, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${request.cookies.get("accessToken")?.value}`,
    },
  });

  console.log("RESPONSE SERVER", res);

  if (!res.ok) {
    return NextResponse.json(
      { message: res.statusText },
      { status: res.status }
    );
  }

  const result: ApiResponse<OrderPackageResponseDTO[], MetaOrderPackageTourDTO> = await res.json();

  return Response.json(result);
}
