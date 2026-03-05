import InputTid from "@/components/input/input-tid"
import { IActivityList } from "../lib/interfaces"
import Divider from "@/features/home/components/divider"
import PlusCircleIcon from "@/components/icons/plus-circle-icon"
import { Dispatch, SetStateAction } from "react"

interface IActivityListForm {
    activityList: IActivityList[] | [],
    setActivityList: Dispatch<SetStateAction<IActivityList[] | []>>
}

const ActivityListForm = ({ activityList, setActivityList }: IActivityListForm) => {


    const handleAddActivityTitle = (day: number) => {
        setActivityList(activityList.map((activity) => {
            if (activity.day === day) {
                return {
                    ...activity,
                    titleList: [...activity.titleList, { id: activity.titleList.length, title: '' }]
                }
            }
            return activity
        }))
    }


    const handleChangeInputTitle = (day: number, titleId: number, value: string) => {
        setActivityList(
            activityList.map((activity) => {
                if (activity.day == day) {
                    return {
                        ...activity,
                        titleList: activity.titleList.map((titleAct) => {
                            if (titleAct.id == titleId) {
                                return {
                                    ...titleAct,
                                    title: value
                                }

                            }
                            return titleAct
                        })
                    }
                }
                return activity
            })
        )
    }


    return (
        <div >
            <p className="text-lg mt-8 font-semibold">Activities</p>
            <div className="space-y-6 mt-6">
                {activityList.length > 0 && activityList.map((activity) => (
                    <div key={activity.day}>
                        <p className="font-semibold">Day {activity.day}</p>
                        <div className=" mt-2 grid grid-cols-4 gap-2">
                            {activity.titleList.map((title, index) => (
                                <div key={title.id}>
                                    {/* <input name={title.id.toString()} className="bg-white border border-tid-grey-200 w-full" value={title.title} onChange={(e) => handleChangeInputTitle(activity.day, title.id, e.target.value)} /> */}
                                    <InputTid name={title.id.toString()} value={title.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputTitle(activity.day, title.id, e.target.value)} placeholder="Enter Activity" />
                                </div>
                            ))}
                            <button className="cursor-pointer" onClick={() => handleAddActivityTitle(activity.day)}><PlusCircleIcon /></button>
                        </div>
                        <div className="mt-6">
                            <Divider />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActivityListForm