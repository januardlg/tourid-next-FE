import { ApiResponse } from "@/dtos/api-dto";
import { MetaOrderPackageTourDTO, OrderPackageResponseDTO, OrderPackageTourQueryDTO } from "../lib/trip-history";

export const getTripHistoryListClient = async (params?: OrderPackageTourQueryDTO) => {

  const queryParams = new URLSearchParams({
    ...params,
  });


  const res = await fetch("/api/trip-history?" + queryParams.toString(), {
    method: "GET",
  });

  console.log("RESPONSE CLIENT", res);

  if (!res.ok) {
    throw res
  }

  const result: ApiResponse<OrderPackageResponseDTO[], MetaOrderPackageTourDTO> = await res.json();
  return result;
};
