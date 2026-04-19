import { useEffect, useState } from "react";
import { QUERY_KEYS_CONSTANTS } from "@/lib/constants/query-key";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTripHistoryListClient } from "../service/trip-history.client";
import { SortingType } from "@/components/input/select/select-with-sorting";
import { IListOption } from "@/features/home/components/list-box";
import { PAYMENT_STATUS } from "../lib/constants";
import { OrderPackageTourQueryDTO } from "../lib/trip-history";
import { initialParamsOrderPackageTour } from "../lib/shared-data";
import { useAppStore } from "@/providers/app-store-provider";

const useTripHistory = () => {

  const { setIsOpenLoadingOverlay } = useAppStore((store) => store)

  // PARAMS FOR QUERY
  const [queryParamsState, setQueryParamsState] = useState<OrderPackageTourQueryDTO>(
    initialParamsOrderPackageTour,
  );

  const queryResultFetch = useQuery({
    queryKey: [QUERY_KEYS_CONSTANTS.tripHistory.tripHistoryList([queryParamsState.page,
    queryParamsState.limit,
    queryParamsState.filterBy,
    queryParamsState.filterValue,
    queryParamsState.sortBy,
    queryParamsState.order,])],
    queryFn: async () => await getTripHistoryListClient(queryParamsState),
    placeholderData: keepPreviousData
  });


  // STATE
  //   pagination
  const totalPages = (queryResultFetch?.data?.meta?.totalPages as number) ?? 1;
  const [activePage, setActivePage] = useState<number>(parseInt(initialParamsOrderPackageTour.page))


  //   sorting
  const sortingByOptions: IListOption[] = [
    { id: "created_at", name: "Transaction Date" },
  ];
  const [sortingBy, setSortingBy] = useState(sortingByOptions[0]);
  const [sortingValue, setSortingValue] = useState<SortingType>("desc");

  const categoryOptionsList: IListOption[] = [
    // {
    //   id: "option",
    //   name: "Select Status",
    //   disabled: true,
    // },
    {
      id: "",
      name: "All Status",
    },
    {
      id: "PENDING",
      name: PAYMENT_STATUS.PENDING,
    },
    {
      id: "PAID",
      name: PAYMENT_STATUS.PAID,
    },
    { id: "EXPIRED", name: PAYMENT_STATUS.EXPIRED },
    { id: "WAITING_VERIFICATION", name: PAYMENT_STATUS.WAITING_VERIFICATION },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    categoryOptionsList[0],
  );


  const handleClickSearch = () => {
    setQueryParamsState((prev) => {
      return {
        ...prev,
        filterValue: selectedCategory.id as string,
        sortBy:
          sortingBy.id === ""
            ? initialParamsOrderPackageTour?.sortBy
            : (sortingBy.id as string),
        order: sortingValue,
      }
    })
    setActivePage(1)
  }

  useEffect(() => {
    setIsOpenLoadingOverlay(queryResultFetch.isFetching);
  }, [queryResultFetch.isFetching, setIsOpenLoadingOverlay]);


  return {
    queryResultFetch,
    sortingByOptions,
    sortingBy,
    sortingValue,
    categoryOptionsList,
    selectedCategory,
    totalPages,
    activePage,

    setActivePage,
    setSortingBy,
    setSortingValue,
    setSelectedCategory,
    handleClickSearch
  };
};

export default useTripHistory;
