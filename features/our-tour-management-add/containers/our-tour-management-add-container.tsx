"use client"
import AdminHeader from "@/components/header/admin-header"
import DatePickerTid from "@/components/input/datepicker-tid"
import InputTid from "@/components/input/input-tid"
import TextAreaTid from "@/components/input/text-area-tid"
import ImagePicker from "../components/image-picker"
import ListBoxTid from "@/features/home/components/list-box"
import FooterTourAdd from "../components/footer-tour-add"
import ActivityListForm from "../components/activity-list-form"

// utils
import { getDateStringFromISO } from "@/lib/utils"

// hooks
import { useTourAdd } from "../hooks/useTourAdd"

const OurTourManagementAddContainer = () => {

    const { ourTourData, activityList, setActivityList, handleChangeInput, todayDateISO, handleChangeStartDate, handleChangeEndDate, accomodationOptions, accomodation, setAccomodation, handlePublish, } = useTourAdd()

    return (
        <section>
            <AdminHeader title="Add New Tour" />

            <section className="admin-feature-container space-y-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <InputTid name={'tourName'} value={ourTourData.tourName} onChange={handleChangeInput} placeholder="Enter Tour Name" label="Tour Name" />
                    <InputTid name={'price'} value={ourTourData.price} onChange={handleChangeInput} placeholder="Enter Tour Name" label="Price" />
                    <DatePickerTid name={'startDate'} value={ourTourData.startDate} minDate={getDateStringFromISO(todayDateISO)} handleChangeDate={handleChangeStartDate} placeholder="Enter Start Date" label="Start Date" />
                    <DatePickerTid name={'endDate'} value={ourTourData.endDate} minDate={ourTourData.startDate ? getDateStringFromISO(ourTourData.startDate) : getDateStringFromISO(todayDateISO)} handleChangeDate={handleChangeEndDate} placeholder="Enter End Date" label="End Date" />
                    <div className="space-y-2">
                        <p className="text-sm font-semibold">Accomodation</p>
                        <ListBoxTid value={accomodation} onChange={setAccomodation} listOptions={accomodationOptions} isInputGroup={true} />
                    </div>
                    <div className="col-span-2">
                        <TextAreaTid name={'description'} value={ourTourData.description} onChange={handleChangeInput} placeholder="Enter Descritpion" label="Description" />
                    </div>
                </div>

                <ImagePicker />

                <ActivityListForm activityList={activityList} setActivityList={setActivityList} />
            </section>
            <FooterTourAdd onHandlePublish={handlePublish} />
        </section>
    )
}

export default OurTourManagementAddContainer