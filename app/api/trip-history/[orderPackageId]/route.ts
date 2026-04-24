import { OrderPackageTourDetailResponseDTO } from "@/features/tirp-history-detail/lib/trip-history-detail";
import { ApiResponse } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ orderPackageId: string }> },
) {
  try {
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

    const result: ApiResponse<OrderPackageTourDetailResponseDTO> =
      await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: result.message },
        { status: res.status, statusText:result.message},
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    // if route handler error
    throw error;
  }
}
