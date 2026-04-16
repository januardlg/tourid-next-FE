'use client'
import Pagination from "./pagination";
import ProductCard from "./product-card";

// hook
import { usePackageTourList } from "../hooks/usePackageTourList";

const PackageTourList = () => {
    const { queryParamsState, totalPages, handleNextPage, arrTotalPages, queryResultFetch, handlePrevPage } = usePackageTourList()

    return (
        <>
            <div className=" col-span-12 grid grid-cols-12 gap-6 mt-10">
                {queryResultFetch.data?.data?.map((packageTour) => (
                    <div
                        key={packageTour.packageId + ":" + packageTour.namePackage}
                        className="col-span-4"
                    >
                        <ProductCard data={packageTour} />
                    </div>
                ))}
            </div>
            <div className="col-span-12">
                <Pagination
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}
                    arrTotalPages={arrTotalPages}
                    activePage={parseInt(queryParamsState.page)}
                    totalPages={totalPages}
                />
            </div>
        </>
    );
};

export default PackageTourList;
