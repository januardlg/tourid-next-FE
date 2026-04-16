import { ApiResponse } from "@/dtos/api-dto";
import {
  MetaDataPackageTourDTO,
  PackageTourProductDTO,
  PackageTourQueryDTO,
} from "../lib/package-tour.dto";

// client requests go through BFF (Route Handler) to protect data
// use BFF (Route Handler) => protect tokens / secrets, avoid CORS, centralize logic

export async function getPackageTourListClient(params?: PackageTourQueryDTO) {
  const queryParams = new URLSearchParams({
    ...params,
  });

  const response = await fetch("/api/package-tour?" + queryParams.toString(), {
    method: "GET",
  });

  console.log("HIT API CLIENT", queryParams.toString());

  const result: ApiResponse<PackageTourProductDTO[], MetaDataPackageTourDTO> =
    await response.json();

  return result;
}
