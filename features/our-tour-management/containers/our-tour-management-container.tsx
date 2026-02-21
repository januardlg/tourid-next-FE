import AdminHeader from "@/components/header/admin-header"
import SearchCategory from "../components/search-category"
import SortCategory from "../components/sort-category"
import ButtonAddTour from "../components/button-add"
import Pagination from "@/features/our-tour/components/pagination"

const OurTourManagementContainer = () => {
    return (
        <section>
            <AdminHeader title="Tour List" />
            <section className="admin-feature-container">
                <section className="grid grid-cols-12 gap-6">
                    <div className="col-span-4">
                        <SearchCategory />
                    </div>
                    <div className="col-span-4">
                        <SortCategory />
                    </div>
                    <div className="col-span-4 flex justify-end">
                        <div className="w-fit">
                            <ButtonAddTour />
                        </div>
                    </div>
                </section>
                <section className="mt-8">
                    <table className="table-auto w-full bg-white">
                        <thead>
                            <tr >
                                <td>Tour Id</td>
                                <td>Name</td>
                                <td>Created At</td>
                                <td>Tour Date</td>
                                <td>Status</td>
                                <td>Price per Pax</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Siantar Tour</td>
                                <td>20/12/2021</td>
                                <td>25/12/2021-27/12/2021</td>
                                <td>Published</td>
                                <td>Rp 300.000</td>
                            </tr>
                            <tr >
                                <td>1</td>
                                <td>Siantar Tour</td>
                                <td>20/12/2021</td>
                                <td>25/12/2021-27/12/2021</td>
                                <td>Published</td>
                                <td>Rp 300.000</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <Pagination />
                </section>
            </section>
        </section>
    )
}

export default OurTourManagementContainer