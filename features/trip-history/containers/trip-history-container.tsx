import Pagination from "@/features/our-tour/components/pagination"
import FilterStatus from "../components/filter-status"
import HistoryCard from "../components/history-card"
import SortCategory from "../components/sort-category"

const TripHistoryContainer = () => {

    return (
        <section className="mt-12">
            <div className="grid grid-cols-12 gap-9 ">
                <div className="col-span-4">
                    <p className="text-2xl font-bold">Explore Our Tour</p>
                    <p>23 Activities Found</p>
                </div>
                <div className="col-span-4">
                    <FilterStatus />
                </div>
                <div className="col-span-4">
                    <SortCategory />
                </div>
            </div>

            <div className="mt-12">
                <div className="space-y-6">

                    <HistoryCard />

                </div>
            </div>

            <div className="mt-20">
                <Pagination />
            </div>
        </section>
    )
}

export default TripHistoryContainer