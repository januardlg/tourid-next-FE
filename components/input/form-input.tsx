import { cn } from "@/lib/utils"
import { IInputTid } from "./input"

export interface IInputForm {
    name: string,
    value: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>
    error?: string
}

const FormInput = ({ name, value, placeholder, onChange, error }: IInputForm) => {
    return (
        <div className="space-y-0">
            <input className={cn(
                "w-full p-4 border border-tid-red-100 rounded-lg",
                "focus:outline-tid-red-100 focus:outline-1"
            )} type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} />
            <div className={cn(
                'h-4 opacity-0 transition-all duration-100 ease-in-out',
                error && 'flex opacity-100 '
            )}>
                <p className="text-sm text-red-400 ml-0.5">{name + ' ' + error}</p>
            </div>
        </div>
    )
}

export default FormInput