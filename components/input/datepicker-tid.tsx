import { useRef, useState } from "react";
import { IInputTid } from "./input";
import CalendarIcon from "../icons/calendar-icon";
import { cn, getDateFormat, getDateISOFormat } from "@/lib/utils";

interface IDatePicker extends IInputTid {
    minDate?: string,
    handleChangeDate: (deliveryDate: string) => void;
}

const DatePickerTid = ({
    label,
    name,
    placeholder,
    minDate,
    handleChangeDate
}: IDatePicker) => {
    const datePickerRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        try {
            if (datePickerRef.current?.showPicker) {
                datePickerRef.current.showPicker();
            } else {
                datePickerRef.current?.click();
            }
        } catch (error) {
            console.error("Failed Open Date Picker", error);
        }
    };


    const [formattedDate, setFormattedDate] = useState(placeholder)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        console.log(e.target.value)
        if (e.target.value) {
            setFormattedDate(getDateFormat(e.target.value));
            handleChangeDate(getDateISOFormat(e.target.value));
        } else {
            setFormattedDate(placeholder);
            handleChangeDate("");
        }
    };


    return (
        <div className="flex flex-col space-y-2">
            {label && <label htmlFor={name} className="text-sm font-semibold">{label}</label>}
            <div
                className={cn(
                    "relative w-full py-2 px-2.5 border border-tid-grey-400 rounded-sm bg-white cursor-pointer",
                    "focus:outline-tid-grey-200 focus:outline-[0.5px]"
                )}
                role="form"
                tabIndex={0}
                onClick={handleClick}
            >
                <input
                    ref={datePickerRef}
                    className="opacity-0 appearance-none block  w-full h-full "
                    type="date"
                    onChange={handleChange}
                    name={name}
                    min={minDate}
                />
                <div className="absolute top-[20%] text-[#555A61]">
                    {formattedDate}
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <CalendarIcon />
                </div>
            </div>
        </div>
    );
};

export default DatePickerTid;
