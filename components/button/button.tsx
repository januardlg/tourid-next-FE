import { cn } from "@/lib/utils"

export interface IButton {
    variant?: 'PRIMARY' | 'OUTLINE'
    children: React.ReactNode
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ variant = 'PRIMARY', children, onClick }: IButton) => {
    return (
        <button onClick={onClick}
            className={cn(
                'py-3 px-4 text-white rounded-lg',
                { 'bg-tid-red-100': variant === 'PRIMARY' },
                { 'border border-tid-red-100 text-tid-red-100': variant === 'OUTLINE' }
            )}
        >
            {children}
        </button>
    )
}

export default Button