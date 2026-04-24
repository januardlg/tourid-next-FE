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

    
    const result: ApiResponse<ConfirmPaymentPayloadDTO> = await res.json();
    console.log("res confirm server ", res);
     console.log("result confirm server ", result);

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
