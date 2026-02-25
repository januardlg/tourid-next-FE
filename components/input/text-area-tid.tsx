import { cn } from "@/lib/utils"
import { IInputTid } from "./input"

const TextAreaTid = ({ label, name, value, placeholder, onChange }: IInputTid) => {
    return (
        <div className="flex flex-col space-y-2">
            {label && <label htmlFor={name} className="text-sm font-semibold">{label}</label>}
            <textarea className={cn(
                "w-full py-2 px-2.5 border border-tid-grey-400 rounded-sm bg-white",
                "focus:outline-tid-grey-200 focus:outline-[0.5px]"
            )} rows={3} name={name} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default TextAreaTid