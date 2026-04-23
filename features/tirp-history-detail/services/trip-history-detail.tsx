import { ApiResponse } from "@/lib/api";
import { OrderPackageTourDetailResponseDTO } from "../lib/trip-history-detail";

const getTripHistoryDetail = async (orderPackageId: string) => {
  try {
    const res = await fetch("/api/trip-history/" + orderPackageId, {
      method: "GET",
    });

    console.log("RESPONSE CLIENT", res);

    if (!res.ok) {
      throw res;
    }

    const result: ApiResponse<OrderPackageTourDetailResponseDTO> =
      await res.json();

    return result;
  } catch (error) {
    throw error;
  }
};

export default getTripHistoryDetail;
