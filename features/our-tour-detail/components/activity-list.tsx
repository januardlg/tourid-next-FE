import { PackageTourProductDTO } from "@/features/our-tour/lib/package-tour.dto";

type ActivityListProps = Pick<PackageTourProductDTO, "activities">;

const ActivityList = ({ activities }: ActivityListProps) => {

    return (
        <section>
            <p className="text-title-detail-tour">Activity<span className="ml-2 text-sub-title-detail-tour ">What you will do</span></p>
            <div className="space-y-2 mt-3">
                {activities.map((activity) => (
                    <div key={activity.day} className="flex space-x-2 text-tid-grey-100">
                        <p className="font-semibold">Day {activity.day}</p>
                        <p>:</p>
                        <div className="flex-align-items-center">
                            {activity?.titleList?.map((act, index: number) => (
                                <p key={act.id}>{act.title}{index !== activity?.titleList.length - 1 && <span className="mr-1">,</span>} </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ActivityList