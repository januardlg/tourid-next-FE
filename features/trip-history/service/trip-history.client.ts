import { ApiResponse } from "@/dtos/api-dto";
import { OrderPackageResponseDTO } from "../lib/trip-history";

export const getTripHistoryListClient = async () => {
  const res = await fetch("/api/trip-history", {
    method: "GET",
  });

  // console.log("RESPONSE CLIENT", res);

  const result: ApiResponse<OrderPackageResponseDTO[]> = await res.json();
  return result;
};
