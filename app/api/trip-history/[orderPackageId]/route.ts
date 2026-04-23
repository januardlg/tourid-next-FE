import { OrderPackageTourDetailResponseDTO } from "@/features/tirp-history-detail/lib/trip-history-detail";
import { ApiResponse } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ orderPackageId: string }> },
) {
  try {
    console.log("ACCESS TOKEN", request.cookies.get("accessToken")?.value);

    const { orderPackageId } = await params;

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/orderPackageTour/" + orderPackageId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${request.cookies.get("accessToken")?.value}`,
        },
      },
    );

    console.log("RESPONSE SERVER", res);
    if (!res.ok) {
      return NextResponse.json(
        { message: res.statusText },
        { status: res.status },
      );
    }

    const result: ApiResponse<OrderPackageTourDetailResponseDTO> =
      await res.json();

    return NextResponse.json(result);
  } catch (error) {
    // if route handler error
    throw error;
  }
}
