import Image from "next/image"
import ButtonLink from "../button/button-link"

const ProductCard = () => {
    return (
        <div className="px-6 py-5 rounded-3xl w-full shadow-2xl">
            <Image src={`/images/step-content.png`} alt="content" width={320} height={161} className="w-full h-65 rounded-3xl" />
            <p className="mt-8 text-lg font-medium">Trip To Greece</p>
            <div className="flex space-x-2 items-center text-base text-tid-grey-100">
                <p>2 Days Trip</p>
                <p>|</p>
                <p>Transport Facility</p>
            </div>
            <div className="flex-align-items-center justify-between mt-4">
                <div>
                    <p className="text-xs text-tid-grey-100">Start From</p>
                    <p className="text-xl text-tid-red-100 font-semibold">Rp 350.000 / person</p>
                </div>
                <ButtonLink href="/">Detail</ButtonLink>
            </div>
        </div>
    )
}

export default ProductCard