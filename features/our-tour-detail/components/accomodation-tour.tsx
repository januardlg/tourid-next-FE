import { PackageTourProductDTO } from "@/features/our-tour/lib/package-tour.dto"
import React from "react";

type AccomodationTourProps = Pick<PackageTourProductDTO, 'hostelryAddress' | 'hostelryPartnerName' | 'hostelryPartnerLocation'>;

const AccomodationTour = ({ hostelryAddress, hostelryPartnerName, hostelryPartnerLocation }: AccomodationTourProps) => {
    return (
        <section>
            <p className="text-title-detail-tour">Accomodation Tour<span className="ml-2 text-sub-title-detail-tour ">When you stay during tour</span></p>
            <div className="grid grid-cols-2 gap-10">
                <p className="text-tid-grey-200">Simply arrive at the address below to begin. For the rest of your trip, enjoy all-inclusive daily transport with us, including a comfortable drop-off at your residence after each day’s activities</p>
                <div className="text-tid-grey-200">
                    <p className="text-lg font-semibold">{hostelryPartnerName}l</p>
                    <p className="">{hostelryAddress} <span><a className="text-blue-600" rel="noopener noreferrer" href={hostelryPartnerLocation} target="_blank">View on map</a></span></p>
                </div>
            </div>
        </section >
    )
}
export default React.memo(AccomodationTour)

