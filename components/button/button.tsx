import { cn } from "@/lib/utils"

export interface IButton {
    type?: 'PRIMARY' | 'OUTLINE'
    children: React.ReactNode
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ type = 'PRIMARY', children, onClick }: IButton) => {
    return (
        <button onClick={onClick}
            className={cn(
                'py-3 px-4 text-white rounded-lg',
                { 'bg-tid-primary-100': type === 'PRIMARY' },
                { 'border border-tid-primary-100 text-tid-primary-100': type === 'OUTLINE' }
            )}
        >
            {children}
        </button>
    )
}

export default Button