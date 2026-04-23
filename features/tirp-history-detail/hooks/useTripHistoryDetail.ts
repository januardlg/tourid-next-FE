import { ITermConditionTour } from "@/features/our-tour-detail/components/term-condition-tour";
import { QUERY_KEYS_CONSTANTS } from "@/lib/constants/query-key";
import { useQuery } from "@tanstack/react-query";
import getTripHistoryDetail from "../services/trip-history-detail";

export const useTripHistoryDetail = (orderPackageId: string) => {
  const queryResult = useQuery({
    queryKey: QUERY_KEYS_CONSTANTS.ourTour.packageTourDetail(orderPackageId),
    queryFn: () => getTripHistoryDetail(orderPackageId),
    staleTime: 60_000,
  });

  const TERM_CONDITIONS: ITermConditionTour[] = [
    {
      title: "Free Cancelation",
      description: "Cancel up to 24 hours in advance to receive a full refund",
    },
    {
      title: "Health precautions",
      description: "Special health and safety measures apply. Learn more",
    },
    {
      title: "Mobile ticketing",
      description: "Use your phone or print your voucher",
    },
    {
      title: "Health precautions3",
      description: "Special health and safety measures apply. Learn more",
    },
    {
      title: "Duration",
      description: "",
    },
    {
      title: "Instant confirmation",
      description: "Don’t wait for the confirmation!",
    },
  ];

  return {
    TERM_CONDITIONS,
    queryResult,
  };
};
