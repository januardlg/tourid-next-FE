import { ApiResponse } from "@/dtos/api-dto";
import { CreateOrderPackageTourResponseDTO } from "@/features/our-tour-detail/lib/our-tour-detail-schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    try {
        const body = await request.json()

        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/orderPackageTour?", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${request.cookies.get("accessToken")?.value}`,
            },
            body: request.body
        });

        const result: ApiResponse<CreateOrderPackageTourResponseDTO> = await res.json();

        return Response.json(result);

    } catch (error) {
        return NextResponse.json(error)
    }

}