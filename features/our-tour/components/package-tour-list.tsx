'use client'

import { useQuery } from '@tanstack/react-query';
import { getPackageTourList } from '../services/tour-list';
import Pagination from './pagination';

const PackageTourList = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['package-tour-list'],
        queryFn: getPackageTourList,
    });

    console.log({ data })


    return (
        <>
            <div className=" col-span-12 grid grid-cols-12 gap-6 mt-10">
                {/* <div className="col-span-4">
                <ProductCard />
            </div>
            <div className="col-span-4">
                <ProductCard />
            </div>
            <div className="col-span-4">
                <ProductCard />
            </div>
            <div className="col-span-4">
                <ProductCard />
            </div>
            <div className="col-span-4">
                <ProductCard />
            </div>
            <div className="col-span-4">
                <ProductCard />
            </div> */}
            </div>
            <div>
                <Pagination />
            </div>
        </>
    )
}

export default PackageTourList