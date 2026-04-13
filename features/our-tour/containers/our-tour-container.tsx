import SearchCategory from "../components/search-category";
import SortCategory from "../components/sort-category";
import PackageTourList from "../components/package-tour-list";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { makeQueryClient } from "@/lib/query";
import { intialParamsPackageTour } from "../lib/shared-data";
import { QUERY_KEYS_OUR_TOUR } from "../constant/query-key";
import { getPackageTourListServer } from "../services/tour-list.server";

const OurTourContainer = async () => {
  // fetches data and populates the cache before a user needs it
  const queryClient = makeQueryClient();

  await queryClient.prefetchQuery({
    queryKey:  ['package-tour-list', intialParamsPackageTour.page], //cache name
    queryFn: () => getPackageTourListServer(intialParamsPackageTour),
  });

  return (
    <section className="mt-12">
      <div className="grid grid-cols-12 gap-9 ">
        <div className="col-span-4">
          <p className="text-2xl font-bold">Explore Our Tour</p>
          <p>23 Activities Found</p>
        </div>
        <div className="col-span-4">
          <SearchCategory />
        </div>
        <div className="col-span-4">
          <SortCategory />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <PackageTourList />
        </HydrationBoundary>
      </div>
    </section>
  );
};

export default OurTourContainer;
