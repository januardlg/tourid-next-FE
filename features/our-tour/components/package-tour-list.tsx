"use client";

import Pagination from "./pagination";
import ProductCard from "@/features/our-tour/components/product-card";
import { usePackageTourList } from "../hooks/usePackageTourList";
import { useState } from "react";
import { PackageTourQueryDTO } from "../lib/package-tour.dto";
import { useQuery } from "@tanstack/react-query";
import { intialParamsPackageTour } from "../lib/shared-data";
import { getPackageTourListClient } from "../services/tour-list.client";
import ArrowNextIcon from "@/components/icons/arrow-next-icon";
import { cn } from "@/lib/utils";
const PackageTourList = () => {
  const [queryParamsState, setQueryParamsState] = useState<PackageTourQueryDTO>(
    intialParamsPackageTour,
  );

  const query = useQuery({
    queryKey: [
      "package-tour-list",
      queryParamsState.page,
      queryParamsState.limit,
    ],
    queryFn: ({ queryKey }) => {
      const [, page, limit] = queryKey;
      return getPackageTourListClient({ page, limit });
    },
    staleTime: 60_000,
  });

  // const [totalPages, setTotalPages] = useState(packageTourListData?.meta?.totalPages as number)

  const totalPages = query.data?.meta?.totalPages as number;
  // const LIMIT: number = 5
  const [activePage, setActivePage] = useState(1);

  const arrTotalPages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const handleNextPage = () => {
    let numberPage = activePage;

    if (activePage < totalPages) {
      numberPage += 1;
    }

    setActivePage(numberPage);

    setQueryParamsState((prev: PackageTourQueryDTO) => {
      return {
        ...prev,
        page: numberPage.toString(),
      };
    });
  };

  const handlePrevPage = () => {
    let numberPage = activePage;

    if (activePage > 1) {
      numberPage = numberPage - 1;
    } else {
      numberPage = 1;
    }
    setActivePage(numberPage);

    setQueryParamsState((prev) => {
      return {
        ...prev,
        page: numberPage.toString(),
      };
    });
  };

  console.log("packageTourListData in compnent", query.data);

  if(query.isLoading){
    return(
        <p>loading</p>
    )
  }
  return (
    <>
      <div className=" col-span-12 grid grid-cols-12 gap-6 mt-10">
        {query.data?.data?.map((packageTour) => (
          <div
            key={packageTour.packageId + ":" + packageTour.namePackage}
            className="col-span-4"
          >
            <ProductCard data={packageTour} />
          </div>
        ))}
      </div>
      <div className="col-span-12">
        {/* <Pagination /> */}
         <section className="mt-15 w-full flex justify-center items-center">
            <div className="flex-align-items-center gap-7">
                <button className={
                    cn('opacity-100 transition duration-300 ease-in-out rotate-180 cursor-pointer', activePage === 1 && 'opacity-0')
                } onClick={handlePrevPage}>
                    <ArrowNextIcon />
                </button>
                {arrTotalPages.slice(activePage - 1, activePage + 1).map((val: number) => (
                    <div key={val} className={cn("text-lg font-medium text-tid-grey-200", activePage === val && 'font-bold text-black')}>{val}</div>
                ))}
                <button className={
                    cn('opacity-100 transition duration-300 ease-in-out cursor-pointer', activePage === totalPages && 'opacity-0')
                } onClick={handleNextPage}>
                    <ArrowNextIcon />
                </button>


            </div>
        </section>
      </div>
    </>
  );
};

export default PackageTourList;
