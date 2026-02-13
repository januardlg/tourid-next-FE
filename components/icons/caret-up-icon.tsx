import { IIcon } from "./icon"

const CaretUpIcon = (props: IIcon) => {
    return (
        <svg width={props?.size ?? "24"} height={props?.size ?? "24"} viewBox="0 0 24 24" fill={props?.color ?? 'none'} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9.5L7 14.5H17L12 9.5Z" fill={props?.color ?? "#484848"} />
        </svg>

    )
}

export default CaretUpIcon