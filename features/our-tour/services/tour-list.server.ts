import { ApiResponse } from "@/dtos/api-dto";
import {
  MetaDataPackageTourDTO,
  PackageTourProductDTO,
  PackageTourQueryDTO,
} from "../lib/package-tour.dto";

// server requests go directly to backend for simplicity and performance
// faster, simplre, no extra hop

export async function getPackageTourListServer(params?: PackageTourQueryDTO) {
  const queryParams = new URLSearchParams({
    ...params,
  });

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/packageTour?' + queryParams.toString(), {
    method: "GET",
  });

  console.log('HIT API SERVER', queryParams.toString())

  const result: ApiResponse<PackageTourProductDTO[], MetaDataPackageTourDTO> =
    await response.json();

  return result;
}
