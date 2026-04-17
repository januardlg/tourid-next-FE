import { ApiResponse } from "@/dtos/api-dto";
import { PackageTourProductDTO } from "@/features/our-tour/lib/package-tour.dto";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ tourId: string }> }) {

    const { tourId } = await params;


    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/packageTour/' + tourId, {
        method: "GET",
    });
    const result: ApiResponse<PackageTourProductDTO> = await res.json()


    return Response.json(result);
}