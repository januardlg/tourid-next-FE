'use client'

import Pagination from './pagination';
import ProductCard from '@/features/our-tour/components/product-card';
import { usePackageTourList } from '../hooks/usePackageTourList';
const PackageTourList = () => {

    const { packageTourListData } = usePackageTourList()

    return (
        <>
            <div className=" col-span-12 grid grid-cols-12 gap-6 mt-10">

                {packageTourListData?.data?.map((packageTour) => (
                    <div key={packageTour.packageId + ':' + packageTour.namePackage} className="col-span-4">
                        <ProductCard data={packageTour} />
                    </div>
                ))}


            </div>
            <div className='col-span-12'>
                <Pagination />
            </div>
        </>
    )
}

export default PackageTourList