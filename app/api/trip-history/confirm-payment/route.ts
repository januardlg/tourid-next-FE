import { ApiResponse } from "@/dtos/api-dto";
import { ConfirmPaymentPayloadDTO } from "@/features/trip-history/lib/trip-history";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const accessToken = request.cookies.get("accessToken")?.value;
    const body = await request.json();
    console.log("body server", body);

    if (!accessToken) {
          return NextResponse.json({ message: "You are unauthorized, go to login page?" }, { status: 401 });
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/orderPackageTour/confirmPayment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      },
    );

    if(!res.ok && res.status === 401){
        return NextResponse.json({ message: "You are unauthorized, go to login page?" }, { status: 401 });
    }
    
    const result: ApiResponse<ConfirmPaymentPayloadDTO> = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: result.message },
        { status: res.status, statusText: result.message },
      );
    }

    return Response.json(result);
  } catch (error) {
    // if route handler error
    throw error;
  }
}
