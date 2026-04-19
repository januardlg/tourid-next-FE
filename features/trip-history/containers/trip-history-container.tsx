"use client";
import SelectWithSorting from "@/components/input/select/select-with-sorting";
// import Pagination from "@/components/pagination/pagination";
import HistoryCard from "../components/history-card";
import SelectCategory from "@/components/input/select/select-category";

import useTripHistory from "../hook/useTripHistory";
import Button from "@/components/button/button";
import Pagination from "@/components/pagination/pagination";

const TripHistoryContainer = () => {
  const {
    queryResultFetch,

    sortingByOptions,

    sortingBy,
    sortingValue,
    categoryOptionsList,
    selectedCategory,
    totalPages,
    activePage,

    setSortingBy,
    setSortingValue,
    setSelectedCategory,
    setActivePage,
    handleClickSearch
  } = useTripHistory();

  const tripHistoryListData = queryResultFetch.data?.data || [];

  return (
    <section className="mt-12">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-3">
          <p className="text-2xl font-bold">Explore Our Tour</p>
          <p>{queryResultFetch.data?.meta?.totalData} Activities Found</p>
        </div>
        <div className="col-span-4">
          <SelectCategory
            categoryOptionsList={categoryOptionsList}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
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
        <div className="col-span-2">
          <Button onClick={handleClickSearch}>
            <p>Search</p>
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <div className="space-y-6">
          {tripHistoryListData.map((tripHistory) => (
            <HistoryCard
              key={tripHistory.orderTourPackageId}
              historyData={tripHistory}
            />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Pagination
          totalPages={totalPages}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </section>
  );
};

export default TripHistoryContainer;
