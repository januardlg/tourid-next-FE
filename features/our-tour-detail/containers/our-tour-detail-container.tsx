import OurTourDetail from "../components/our-tour-detail";
import { makeQueryClient } from "@/lib/query";
import { getPackageTourDetailServer, getPaymentMethodListServer } from "../services/tour-detail.server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { QUERY_KEYS_CONSTANTS } from "@/lib/constants/query-key";

export interface OurTourDetailContainerProps {
  tourId: string;
}

const OurTourDetailContainer = async ({
  tourId,
}: OurTourDetailContainerProps) => {
  const queryClient = makeQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS_CONSTANTS.ourTour.packageTourDetail(tourId),
      queryFn: () => getPackageTourDetailServer(tourId),
    }),
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS_CONSTANTS.common.paymentMethodList(),
      queryFn: () => getPaymentMethodListServer(),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OurTourDetail tourId={tourId} />
    </HydrationBoundary>
  );
};

export default OurTourDetailContainer;
