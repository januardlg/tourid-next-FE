"use client"
import AdminHeader from "@/components/header/admin-header"
import DatePickerTid from "@/components/input/datepicker-tid"
import InputTid from "@/components/input/input-tid"
import TextAreaTid from "@/components/input/text-area-tid"
import { getDateStringFromISO, getRupiahCurrencyFormat } from "@/lib/utils"
import dayjs from "dayjs"
import { useEffect, useMemo, useState } from "react"
import { IActivityList } from "../lib/interfaces"
import Divider from "@/features/home/components/divider"
import PlusCircleIcon from "@/components/icons/plus-circle-icon"
import Button from "@/components/button/button"
import ImagePicker from "../components/image-picker"

const OurTourManagementAddContainer = () => {

    const ourTourInitialData = {
        tourName: '',
        price: '',
        startDate: '',
        endDate: '',
        description: ''
    }

    const [ourTourData, setOurTourData] = useState(ourTourInitialData)

    const [activityList, setActivityList] = useState<IActivityList[] | []>([])


    const formatValue = (name: string, value: string) => {
        if (name === 'price') return getRupiahCurrencyFormat(value);
        return value;
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setOurTourData((prevState) => {
            // console.log(e.target.value)
            return {
                ...prevState,
                [e.target.name]: formatValue(e.target.name, e.target.value),
            }
        })
    }

    const handleChangeStartDate = (date: string) => {
        setOurTourData((prevState) => {
            return {
                ...prevState,
                startDate: date
            }
        })
    }

    const handleChangeEndDate = (date: string) => {
        setOurTourData((prevState) => {
            return {
                ...prevState,
                endDate: date
            }
        })
    }


    // useEffect(() => {
    //     console.log({ ourTourData })
    // }, [ourTourData])


    const todayDateISO = new Date().toISOString()



    // const activitiesList: IActivityList[] | [] = useMemo(() => {
    //     if (ourTourData.endDate && ourTourData.startDate) {
    //         const endDate = dayjs(ourTourData.endDate)
    //         const startDate = dayjs(ourTourData.startDate)
    //         const diffDate = endDate.diff(startDate, 'day')

    //         const duration = diffDate + 1

    //         return Array.from({ length: duration }, (_, index) => {
    //             return {
    //                 day: index + 1,
    //                 titleList: ['']
    //             }
    //         })

    //     }
    //     return [];
    // }, [ourTourData.startDate, ourTourData.endDate])


    // useEffect(() => {
    //     console.log({ activitiesList })
    // }, [activitiesList])




    useEffect(() => {

        if (ourTourData.endDate && ourTourData.startDate) {
            const endDate = dayjs(ourTourData.endDate)
            const startDate = dayjs(ourTourData.startDate)
            const diffDate = endDate.diff(startDate, 'day')

            const duration = diffDate + 1

            const activities = Array.from({ length: duration }, (_, index) => {
                return {
                    day: index + 1,
                    titleList: [{ id: 0, title: '' }]
                }
            })

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setActivityList(activities)

        }

    }, [ourTourData.startDate, ourTourData.endDate])


    const buttonAddActivityTitle = (day: number) => {

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


    // useEffect(() => {
    //     console.log({ activityList })
    // }, [activityList])


    const handlePublish = () => {
        const payLoad = {
            ...ourTourData,
            activities: activityList
        }

        console.log({ payLoad })
    }


    return (
        <section>
            <AdminHeader title="Add New Tour" />

            <section className="admin-feature-container">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <InputTid name={'tourName'} value={ourTourData.tourName} onChange={handleChangeInput} placeholder="Enter Tour Name" label="Tour Name" />
                    <InputTid name={'price'} value={ourTourData.price} onChange={handleChangeInput} placeholder="Enter Tour Name" label="Price" />
                    <DatePickerTid name={'startDate'} value={ourTourData.startDate} minDate={getDateStringFromISO(todayDateISO)} handleChangeDate={handleChangeStartDate} placeholder="Enter Start Date" label="Start Date" />
                    <DatePickerTid name={'endDate'} value={ourTourData.endDate} minDate={ourTourData.startDate ? getDateStringFromISO(ourTourData.startDate) : getDateStringFromISO(todayDateISO)} handleChangeDate={handleChangeEndDate} placeholder="Enter End Date" label="End Date" />
                    <div className="col-span-2">
                        <TextAreaTid name={'description'} value={ourTourData.description} onChange={handleChangeInput} placeholder="Enter Descritpion" label="Description" />
                    </div>
                </div>
                <div className="mt-6">
                    <ImagePicker />
                </div>

                <div className="mt-6" >
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
                                    <button className="cursor-pointer" onClick={() => buttonAddActivityTitle(activity.day)}><PlusCircleIcon /></button>
                                </div>
                                <div className="mt-6">
                                    <Divider />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <section className="py-7 px-6 flex-align-items-center justify-between bg-white">
                <div className="w-fit">
                    <Button type="OUTLINE" onClick={() => { }}>
                        <p>Save as Draft</p>
                    </Button>
                </div>
                <div className="flex-align-items-center space-x-4">
                    <Button type="OUTLINE" onClick={() => { }}>
                        <p>Cancel</p>
                    </Button>
                    <Button type="PRIMARY" onClick={handlePublish}>
                        <p>Publish</p>
                    </Button>
                </div>
            </section>
        </section>
    )
}

export default OurTourManagementAddContainer