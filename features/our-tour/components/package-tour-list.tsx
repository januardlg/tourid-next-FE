"use client";
import Pagination from "../../../components/pagination/pagination";
import ProductCard from "./product-card";

// hook
import { usePackageTourList } from "../hooks/usePackageTourList";
import SelectWithInput from "@/components/input/select/select-with-input";
import SelectWithSorting from "@/components/input/select/select-with-sorting";
import Button from "@/components/button/button";

const PackageTourList = () => {
  const {
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

    handleClickSearch
  } = usePackageTourList();

  return (
    <>
      <section className="mt-12">
        <div className="grid grid-cols-12 gap-3 ">
          <div className="col-span-3">
            <p className="text-2xl font-bold">Explore Our Tour</p>
            <p>{queryResultFetch?.data?.data?.length} Activities Found</p>
          </div>
          <div className="col-span-5">
            <SelectWithInput
              filterByOptions={filterSearchOptions}
              filterBy={filterBy}
              filterValue={filterValue}
              setFilterBy={setFilterBy}
              setFilterValue={setFilterValue}
            />
          </div>
          <div className="col-span-3">
            <SelectWithSorting
              sortingByOptions={sortingByOptions}
              sortingBy={sortingBy}
              sortingValue={sortingValue}
              setSortingBy={setSortingBy}
              setSortingValue={setSortingValue}
            />
          </div>
          <div className="col-span-1">
            <div className="h-2">
              <Button onClick={handleClickSearch}>
                <p>Search</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
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
        </div>
        <div className="col-span-12">
          <Pagination
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            arrTotalPages={arrTotalPages}
            activePage={Number.parseInt(queryParamsState.page)}
            totalPages={totalPages}
          />
        </div>
      </section>
    </>
  );
};

export default PackageTourList;
