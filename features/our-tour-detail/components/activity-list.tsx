const ActivityList = () => {


    const ACITIVITIES = [
        {
            day: "1",
            title: ["Traditional Market", "Zoo", "Taman Merdeka"]
        },
        {
            day: "2",
            title: ["Diving"]
        }
    ]

    return (
        <section>
            <p className="text-title-detail-tour">Activity<span className="ml-2 text-sub-title-detail-tour ">What you will do</span></p>
            <div className="space-y-2 mt-3">
                {ACITIVITIES.map((activity) => (
                    <div key={activity.day} className="flex space-x-2 text-tid-grey-100">
                        <p className="font-semibold">Day {activity.day}</p>
                        <p>:</p>
                        <div className="flex-align-items-center">
                            {activity?.title?.map((act, index: number) => (
                                <p key={act}>{act}{index !== activity?.title.length - 1 && <span className="mr-1">,</span>} </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ActivityList