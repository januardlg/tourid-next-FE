"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPackageTourListClient } from "../services/tour-list.client";
import { useState, useEffect } from "react";
import { PackageTourQueryDTO } from "../lib/package-tour.dto";
import { intialParamsPackageTour } from "../lib/shared-data";
import { QUERY_KEYS_OUR_TOUR } from "../constant/query-key";
import { useAppStore } from "@/providers/app-store-provider";

export const usePackageTourList = () => {

    const { setIsOpenLoadingOverlay } = useAppStore((store) => store);
    const [queryParamsState, setQueryParamsState] = useState<PackageTourQueryDTO>(
        intialParamsPackageTour,
    );


    const queryResultFetch = useQuery({
        queryKey: [
            QUERY_KEYS_OUR_TOUR.packageTourList([queryParamsState.page,
            queryParamsState.limit,]),
        ],
        queryFn: () => {
            return getPackageTourListClient(queryParamsState);
        },
        staleTime: 60_000,
        placeholderData: keepPreviousData
    });


    // Set loading overlay based on query pending state
    useEffect(() => {
        setIsOpenLoadingOverlay(queryResultFetch.isFetching);
    }, [queryResultFetch.isFetching, setIsOpenLoadingOverlay]);


    const [totalPages, setTotalPages] = useState(queryResultFetch?.data?.meta?.totalPages as number ?? 1)

    const arrTotalPages = Array.from(
        { length: totalPages },
        (_, index) => index + 1,
    );

    const handleNextPage = () => {
        let numberPage = parseInt(queryParamsState.page || '1');

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
        let numberPage = parseInt(queryParamsState.page || '1');

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




    return {
        arrTotalPages,
        queryParamsState,

        totalPages,
        queryResultFetch,

        handleNextPage,
        handlePrevPage,
    };
};
