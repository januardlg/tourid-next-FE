import Image from "next/image"
import ButtonLink from "../../../components/button/button-link"
import { PackageTourProductDTO } from "@/features/our-tour/lib/package-tour.dto"
import { getRupiahCurrencyFormat } from "@/lib/utils"
import { usePackageTourList } from "../hooks/usePackageTourList"

const ProductCard = ({ data }: { data: PackageTourProductDTO }): React.ReactElement => {


    const { getDurationDate } = usePackageTourList()

    return (
        <div className="px-6 py-5 rounded-3xl w-full shadow-2xl">
            <div>
                <Image src={`/images/step-content.png`} alt="content" width={320} height={160} className="w-full h-48 rounded-3xl" />
            </div>
            <p className="mt-4 text-md font-medium">{data.namePackage}</p>
            <div className="flex space-x-2 items-center text-sm text-tid-grey-100">
                <p>{getDurationDate(data.endDate, data.starDate)} Days Trip</p>
                <p>|</p>
                <p>Transport Facility</p>
            </div>
            <div className="flex-align-items-center justify-between mt-4">
                <div>
                    <p className="text-xs text-tid-grey-100">Start From</p>
                    <p className="text-md text-tid-red-100 font-semibold">{getRupiahCurrencyFormat(data.cost)} / person</p>
                </div>
                <ButtonLink href="/our-tour/1">Detail</ButtonLink>
            </div>
        </div>
    )
}

export default ProductCard