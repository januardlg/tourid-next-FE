
import { Dispatch, SetStateAction } from "react"

import ArrowNextIcon from "@/components/icons/arrow-next-icon"
import { cn } from "@/lib/utils"

interface IPagination {
    totalPages: number,
    activePage: number
    setActivePage: Dispatch<SetStateAction<number>>
    onChangePage: (selectedPage: number) => void
}

const Pagination = ({
    totalPages,
    activePage,
    setActivePage,
    onChangePage
}: IPagination) => {


    const arrTotalPages = Array.from(
        { length: totalPages },
        (_, index) => index + 1,
    );

    // FUNCTION FOR PAGINATION
    const handleNextPage = () => {
        let numberPage = activePage;

        if (numberPage < totalPages) {
            numberPage += 1;
        }
        setActivePage(numberPage)
        onChangePage(numberPage)
    };

    const handlePrevPage = () => {
        let numberPage = activePage;

        if (numberPage > 1) {
            numberPage = numberPage - 1;
        } else {
            numberPage = 1;
        }

        setActivePage(numberPage)
        onChangePage(numberPage)
    };

    return (
        <section className="mt-15 w-full flex justify-center items-center">
            <div className="flex-align-items-center gap-7">
                <button className={
                    cn('opacity-100 transition duration-300 ease-in-out rotate-180 cursor-pointer', activePage === 1 && 'opacity-0')
                } onClick={handlePrevPage}>
                    <ArrowNextIcon />
                </button>
                {arrTotalPages?.slice(activePage - 1, activePage + 1).map((val: number) => (
                    <div key={val} className={cn("text-lg font-medium text-tid-grey-200", activePage === val && 'font-bold text-black')}>{val}</div>
                ))}
                <button className={
                    cn('opacity-100 transition duration-300 ease-in-out cursor-pointer', activePage === totalPages && 'opacity-0')
                } onClick={handleNextPage}>
                    <ArrowNextIcon />
                </button>
            </div>
        </section>
    )
}

export default Pagination