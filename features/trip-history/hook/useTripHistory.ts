import { QUERY_KEYS_CONSTANTS } from "@/lib/constants/query-key";
import { useQuery } from "@tanstack/react-query";
import { getTripHistoryListClient } from "../service/trip-history.client";
import { SortingType } from "@/components/input/select/select-with-sorting";
import { IListOption } from "@/features/home/components/list-box";
import { useState } from "react";
import { set } from "zod";
import { PAYMENT_STATUS } from "../lib/constants";

const useTripHistory = () => {
  const queryResultFetch = useQuery({
    queryKey: [QUERY_KEYS_CONSTANTS.tripHistory.tripHistoryList()],
    queryFn: async () => await getTripHistoryListClient(),
  });

  //   sorting
  const sortingByOptions: IListOption[] = [
    { id: "", name: "Select Category", disabled: true },
    { id: "start_date", name: "Trip Start Date" },
  ];
  const [sortingBy, setSortingBy] = useState(sortingByOptions[0]);
  const [sortingValue, setSortingValue] = useState<SortingType>("desc");

  const categoryOptionsList: IListOption[] = [
    {
      id: "option",
      name: "Select Status",
      disabled: true,
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

  return {
    queryResultFetch,
    sortingByOptions,
    sortingBy,
    sortingValue,
    categoryOptionsList,
    selectedCategory,
    setSortingBy,
    setSortingValue,
    setSelectedCategory,
  };
};

export default useTripHistory;
