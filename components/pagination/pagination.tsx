
import ArrowNextIcon from "@/components/icons/arrow-next-icon"
import { cn } from "@/lib/utils"

interface IPagination {
    arrTotalPages: number[]
    activePage: number
    totalPages: number
    handleNextPage: () => void
    handlePrevPage: () => void

}

const Pagination = ({ handleNextPage, handlePrevPage, arrTotalPages, activePage, totalPages }: IPagination) => {

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