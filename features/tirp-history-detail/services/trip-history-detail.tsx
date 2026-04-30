import { ApiResponse } from "@/lib/api";
import { OrderPackageTourDetailResponseDTO } from "../lib/trip-history-detail";
import { createError } from "@/lib/response-handler";

export const getTripHistoryDetail = async (orderPackageId: string) => {
  try {
    const res = await fetch("/api/trip-history/" + orderPackageId, {
      method: "GET",
    });
    
    const result: ApiResponse<OrderPackageTourDetailResponseDTO> =
      await res.json();
    // if got error from route handler
    if (!res.ok) {
          throw createError(result?.message, res?.status)
      }

    return result;
  } catch (error) {
    throw error;
  }
};
