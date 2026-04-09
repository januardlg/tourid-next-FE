import { ApiResponse } from "@/dtos/api-dto";
import {
  MetaDataPackageTourDTO,
  PackageTourProductDTO,
  PackageTourQueryDTO,
} from "../lib/package-tour.dto";

export async function getPackageTourList(params?: PackageTourQueryDTO) {
  const queryParams = new URLSearchParams({
    ...params,
  });

  const response = await fetch("/api/package-tour?" + queryParams.toString(), {
    method: "GET",
  });

  const result: ApiResponse<PackageTourProductDTO[], MetaDataPackageTourDTO> =
    await response.json();

  return result;
}
