"use client";
import { useQuery } from "@tanstack/react-query";
import { getPackageTourListClient } from "../services/tour-list.client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { PackageTourQueryDTO } from "../lib/package-tour.dto";
import { intialParamsPackageTour } from "../lib/shared-data";
import { QUERY_KEYS_OUR_TOUR } from "../constant/query-key";

export const usePackageTourList = () => {
  const [queryParamsState, setQueryParamsState] = useState<PackageTourQueryDTO>(
    intialParamsPackageTour,
  );

  const query = useQuery({
    queryKey: ["package-tour-list", queryParamsState.page, queryParamsState.limit],
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

  useEffect(() => {
    console.log("packageTourListData in hook", query.data);
  }, [query.data]);

  return {
    packageTourListData : query.data,
    activePage,
    arrTotalPages,

    totalPages,

    handleNextPage,
    handlePrevPage,
  };
};
