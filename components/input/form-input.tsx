import { cn } from "@/lib/utils"

export interface IInputForm {
    name: string,
    value: string,
    placehodler: string,
    onChange: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>
}

const FormInput = ({ name, value, placehodler, onChange }: IInputForm) => {
    return (
        <input className={cn(
            "w-full p-4 border border-tid-primary-100 rounded-lg",
            "focus:outline-tid-primary-100 focus:outline-1"
        )} type="text" name={name} value={value} placeholder={placehodler} onChange={onChange} />
    )
}

export default FormInput