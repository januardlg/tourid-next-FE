import { cn } from "@/lib/utils"
import { IInputTid } from "./input"


const FormInput = ({ name, value, placeholder, onChange }: IInputTid) => {
    return (
        <input className={cn(
            "w-full py-3 px-4 border border-tid-red-100 rounded-lg bg-white",
            "focus:outline-tid-red-100 focus:outline-1"
        )} type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} />
    )
}

export default FormInput