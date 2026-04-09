import { ApiResponse } from "@/dtos/api-dto";
import { MetaDataPackageTourDTO, PackageTourProductDTO } from "@/features/our-tour/lib/package-tour.dto";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const { searchParams } = request.nextUrl;

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/packageTour' + '?' + searchParams);
    const result: ApiResponse<PackageTourProductDTO[], MetaDataPackageTourDTO> = await res.json()


    return Response.json(result);
}