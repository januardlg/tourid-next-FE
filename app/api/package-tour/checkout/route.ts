import { ApiResponse } from "@/dtos/api-dto";
import { CreateOrderPackageTourResponseDTO } from "@/features/our-tour-detail/lib/our-tour-detail-schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    try {
        const accessToken = request?.cookies?.get("accessToken")?.value
        const body = await request.json();

        if (!accessToken) {
            return NextResponse.json({ message: "You are unauthorized, go to login page?" }, { status: 401 });
        }

        const res = await fetch(
            process.env.NEXT_PUBLIC_API_URL + "/orderPackageTour",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(body),
            }
        );

        const result: ApiResponse<CreateOrderPackageTourResponseDTO> = await res?.json();

        if (!res.ok) {
            return NextResponse.json(
                { message: result.message },
                { status: res.status, statusText:result.message },
            );
        }

        return Response.json(result)

    } catch (error) {
        // if route handler error
        throw error
    }
}