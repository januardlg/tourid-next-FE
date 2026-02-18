import Image from "next/image"
import ActionForm from "../components/action-form"
import TermConditionTour from "../components/term-condition-tour"
import DescriptionTour from "../components/description-tour"
import Divider from "@/features/home/components/divider"
import ActivityList from "../components/activity-list"
import AccomodationTour from "../components/accomodation-tour"

const OurTourDetailContainer = () => {
    return (
        <section className="mt-12">
            <p className="text-2xl font-bold">Siantar Tour : City Tour and History</p>
            <section className="grid grid-cols-12 gap-6 mt-4">
                <div className="h-full col-span-8">
                    <Image src={'/images/step-content.png'} alt="image" width={2000} height={2000} className="w-full h-full" />
                </div>
                <div className="col-span-4">
                    <ActionForm />
                </div>
            </section>
            <section className="space-y-6">
                <TermConditionTour />
                <DescriptionTour />
                <Divider />
                <ActivityList />
                <Divider />
                <AccomodationTour />
            </section>
        </section>
    )
}

export default OurTourDetailContainer