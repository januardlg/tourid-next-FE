"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPackageTourListClient } from "../services/tour-list.client";
import { useState, useEffect } from "react";
import { PackageTourQueryDTO } from "../lib/package-tour.dto";
import { initialParamsPackageTour } from "../lib/shared-data";
import { QUERY_KEYS_CONSTANTS } from "../../../lib/constants/query-key";
import { useAppStore } from "@/providers/app-store-provider";
import { IListOption } from "@/features/home/components/list-box";
import { SortingType } from "@/components/input/select/select-with-sorting";

export const usePackageTourList = () => {
  const { setIsOpenLoadingOverlay } = useAppStore((store) => store);

  // PARAMS FOR QUERY
  const [queryParamsState, setQueryParamsState] = useState<PackageTourQueryDTO>(
    initialParamsPackageTour,
  );

  // QUERY
  const queryResultFetch = useQuery({
    queryKey: [
      QUERY_KEYS_CONSTANTS.ourTour.packageTourList([
        queryParamsState.page,
        queryParamsState.limit,
        queryParamsState.filterBy,
        queryParamsState.filterValue,
        queryParamsState.sortBy,
        queryParamsState.order,
      ]),
    ],
    queryFn: () => {
      return getPackageTourListClient(queryParamsState);
    },
    staleTime: 60_000,
    placeholderData: keepPreviousData,
  });

  // STATE
  //   pagination
  const totalPages = (queryResultFetch?.data?.meta?.totalPages as number) ?? 1;
  const arrTotalPages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  // console.log('arrTotalPages', arrTotalPages);
  //   searching
  const filterSearchOptions: IListOption[] = [
    { id: "", name: "Select Category", disabled: true },
    { id: "name_package", name: "Package Name" },
    // { id: 'start_date', name: 'Start Date' },
    { id: "description", name: "Description" },
  ];
  const [filterBy, setFilterBy] = useState(filterSearchOptions[0]);
  const [filterValue, setFilterValue] = useState("");

  //   sorting
  const sortingByOptions: IListOption[] = [
    { id: "", name: "Select Category", disabled: true },
    { id: "start_date", name: "Start Date" },
    { id: "quota", name: "Quota" },
  ];
  const [sortingBy, setSortingBy] = useState(sortingByOptions[0]);
  const [sortingValue, setSortingValue] = useState<SortingType>("desc");

  // FUNCTION FOR PAGINATION
  const handleNextPage = () => {
    let numberPage = parseInt(queryParamsState.page || "1");

    if (numberPage < totalPages) {
      numberPage += 1;
    }

    setQueryParamsState((prev: PackageTourQueryDTO) => {
      return {
        ...prev,
        page: numberPage.toString(),
      };
    });
  };

  const handlePrevPage = () => {
    let numberPage = parseInt(queryParamsState.page || "1");

    if (numberPage > 1) {
      numberPage = numberPage - 1;
    } else {
      numberPage = 1;
    }

    setQueryParamsState((prev) => {
      return {
        ...prev,
        page: numberPage.toString(),
      };
    });
  };

  const handleClickSearch = () => {
    console.log("handleClickSearch");
    setQueryParamsState((prev: PackageTourQueryDTO) => {
      return {
        ...prev,
        filterBy:
          filterBy.id === ""
            ? initialParamsPackageTour?.filterBy
            : (filterBy.id as string),
        filterValue: filterValue,
        sortBy:
          sortingBy.id === ""
            ? initialParamsPackageTour?.sortBy
            : (sortingBy.id as string),
        order: sortingValue,
      };
    });
  };

  useEffect(() => {
    setIsOpenLoadingOverlay(queryResultFetch.isFetching);
  }, [queryResultFetch.isFetching, setIsOpenLoadingOverlay]);

  return {
    arrTotalPages,
    queryParamsState,
    totalPages,
    filterSearchOptions,
    sortingByOptions,
    filterBy,
    filterValue,
    sortingBy,
    sortingValue,

    queryResultFetch,

    handleNextPage,
    handlePrevPage,
    setFilterBy,
    setFilterValue,
    setSortingBy,
    setSortingValue,

    handleClickSearch,
  };
};
