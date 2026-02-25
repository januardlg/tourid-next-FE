export interface IInputTid {
    type?: HTMLInputTypeAttribute
    label?: string,
    name?: string,
    value?: string,
    placeholder?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}