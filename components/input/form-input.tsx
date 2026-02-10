import { cn } from "@/lib/utils"

export interface IInputForm {
    name: string,
    value: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>
}

const FormInput = ({ name, value, placeholder, onChange }: IInputForm) => {
    return (
        <input className={cn(
            "w-full py-3 px-4 border border-tid-red-100 rounded-lg bg-white",
            "focus:outline-tid-red-100 focus:outline-1"
        )} type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} />
    )
}

export default FormInput