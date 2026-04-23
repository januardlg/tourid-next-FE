import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import TripHistoryDetail from "../components/trip-history-detail";
import { makeQueryClient } from "@/lib/query";
import { QUERY_KEYS_CONSTANTS } from "@/lib/constants/query-key";
import getTripHistoryDetail from "../services/trip-history-detail";

interface TripHistoryDetailContainerProps {
  orderPackageId: string;
}

const TripHistoryDetailContainer = ({
  orderPackageId,
}: TripHistoryDetailContainerProps) => {
  const queryClient = makeQueryClient();

  queryClient.prefetchQuery({
    queryKey: QUERY_KEYS_CONSTANTS.ourTour.packageTourDetail(orderPackageId),
    queryFn: () => getTripHistoryDetail(orderPackageId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TripHistoryDetail orderPackageId={orderPackageId} />
    </HydrationBoundary>
  );
};

export default TripHistoryDetailContainer;
