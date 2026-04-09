import { useQuery } from '@tanstack/react-query';
import { getPackageTourList } from '../services/tour-list';
import { useState } from 'react';
import dayjs from 'dayjs';
import { PackageTourQueryDTO } from '../lib/package-tour.dto';


export const usePackageTourList = () => {

    const queryParams: PackageTourQueryDTO = {
        limit: '5'
    }
    const { data: packageTourListData, isLoading } = useQuery({
        queryKey: ['package-tour-list'],
        queryFn: getPackageTourList, //trigger when no cached detec
    });

    // const [totalPages, setTotalPages] = useState(packageTourListData?.meta?.totalPages as number)

    const totalPages = packageTourListData?.meta?.totalPages as number
    // const LIMIT: number = 5
    const [activePage, setActivePage] = useState(1)

    const arrTotalPages = Array.from({ length: totalPages }, (_, index) => index + 1)




    const handleNextPage = () => {
        setActivePage((prevState: number) => {
            if (prevState < totalPages) {
                return prevState + 1
            } else {
                return prevState
            }
        })
    }

    const handlePrevPage = () => {
        setActivePage((prevSate) => {
            if (prevSate > 1) {
                return prevSate - 1
            } else return 1
        })
    }


    const getDurationDate = (endDate: Date, startDate: Date) => {
        return (dayjs(endDate).diff(dayjs(startDate), 'day'))
    }

    return {
        packageTourListData,
        activePage,
        arrTotalPages,

        totalPages,

        handleNextPage,
        handlePrevPage,
        getDurationDate
    }
}