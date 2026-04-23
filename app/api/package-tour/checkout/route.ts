import { ApiResponse } from "@/dtos/api-dto";
import { CreateOrderPackageTourResponseDTO } from "@/features/our-tour-detail/lib/our-tour-detail-schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    try {
        const accessToken = request.cookies.get("accessToken")?.value
        const body = await request.json();
        console.log('body server', body)

        if (!accessToken) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
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

        console.log('res server', res)

    

        const result: ApiResponse<CreateOrderPackageTourResponseDTO> = await res.json();

        // if (!res.ok) {
        // return NextResponse.json(
        //     { message: result.message },
        //     { status: res.status }
        // );
        // }

        return Response.json(result)

    } catch (error) {
        // if route handler error
        throw error
    }
}