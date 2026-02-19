import Image from "next/image"


const StepOrder = () => {
    return (
        <section className="grid grid-cols-12 mt-37">
            <section className="col-span-1" />
            <section className="col-span-10">
                <p className="text-lg text-tid-grey-100 font-semibold ">Easy and Fast</p>
                <div className="grid grid-cols-12">
                    <div className="col-span-6 space-y-10 text-tid-grey-200">
                        <p className="text-5xl font-bold mt-4 text-[#14183E]">Book your next trip
                            in 3 easy steps</p>
                        <div>
                            <p className="font-bold">Choose Destination</p>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                        <div>
                            <p className=" font-bold">Make Payment</p>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                        <div>
                            <p className="font-bold">Reach Our Provided Hotel</p>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className="col-span-6 justify-self-end relative h-fit mt-6">
                        <div className="px-6 py-5 rounded-2xl w-85 shadow-2xl mr-24">
                            <Image src={`/images/step-content.png`} alt="content" width={320} height={161} className="w-full h-auto rounded-2xl" />
                            <p className="mt-6 text-lg font-medium">Trip To Greece</p>
                            <div className="flex space-x-2 items-center text-base text-tid-grey-100">
                                <p>2 Days Trip</p>
                                <p>|</p>
                                <p>Transport Facility</p>
                            </div>
                            <div className="flex-align-items-center mt-4">
                                <div>
                                    <p className="text-xs text-tid-grey-100">Start From</p>
                                    <p className="text-lg text-tid-red-100 font-semibold">Rp 350.000 / person</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-8 w-65 shadow-2xl py-4 px-5 rounded-2xl z-10 bg-white   ">
                            <p className="text-base text-tid-grey-100">Ongoing</p>
                            <p className="text-lg font-medium">Trip to Rome</p>
                            <div className="flex space-x-1 items-center text-sm text-tid-grey-100">
                                <p>2 Days Trip</p>
                                <p>|</p>
                                <p>Transport Facility</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="col-span-1" />

        </section>
    )
}

export default StepOrder