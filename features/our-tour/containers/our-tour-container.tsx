import PackageTourList from "../components/package-tour-list";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { makeQueryClient } from "@/lib/query";
import { initialParamsPackageTour } from "../lib/shared-data";
import { QUERY_KEYS_CONSTANTS } from "../../../lib/constants/query-key";
import { getPackageTourListServer } from "../services/tour-list.server";

const OurTourContainer = async () => {
  // fetches data and populates the cache before a user needs it
  const queryClient = makeQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [
      QUERY_KEYS_CONSTANTS.ourTour.packageTourList([
        initialParamsPackageTour.page,
        initialParamsPackageTour.limit,
        initialParamsPackageTour.filterBy,
        initialParamsPackageTour.filterValue,
        initialParamsPackageTour.sortBy,
        initialParamsPackageTour.order
      ]),
    ], //cache name
    queryFn: () => getPackageTourListServer(initialParamsPackageTour),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PackageTourList />
    </HydrationBoundary>
  );
};

export default OurTourContainer;
