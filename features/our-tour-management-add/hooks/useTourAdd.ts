import { useEffect, useState } from "react"
import { IActivityList } from "../lib/interfaces"
import { formatValueInput } from "../lib/utils"
import dayjs from "dayjs"
import { IListOption } from "@/features/home/components/list-box"

export const useTourAdd = () => {
    const ourTourInitialData = {
        tourName: '',
        price: '',
        startDate: '',
        endDate: '',
        description: ''
    }

    const [ourTourData, setOurTourData] = useState(ourTourInitialData)

    const [activityList, setActivityList] = useState<IActivityList[] | []>([])


    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setOurTourData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: formatValueInput(e.target.name, e.target.value),
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


    const todayDateISO = new Date().toISOString()


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


    const handlePublish = () => {
        const payLoad = {
            ...ourTourData,
            hosterlyPartnerId: accomodation.id,
            activities: activityList
        }

        console.log({ payLoad })
    }


    const accomodationOptions: IListOption[] = [
        { id: 'options', name: 'Select Hotel', disabled: false },
        { id: '1', name: 'Hotel Siantar' },
    ]

    const [accomodation, setAccomodation] = useState(accomodationOptions[0])


    return {
        ourTourData,
        setOurTourData,

        activityList,
        setActivityList,

        handleChangeInput,
        handleChangeStartDate,
        handleChangeEndDate,

        todayDateISO,

        handlePublish,

        accomodationOptions,
        accomodation,
        setAccomodation
    }
}