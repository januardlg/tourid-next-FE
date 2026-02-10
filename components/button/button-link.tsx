import Link from "next/link"

export interface IButtonLink {
    type?: 'PRIMARY' | 'OUTLINE'
    href: string
    children: React.ReactNode
}

const ButtonLink = ({ type = 'PRIMARY', href, children, }: IButtonLink) => {
    return (
        <Link href={href}>
            <div className="px-7 py-2 w-fit bg-tid-red-100 rounded-md " >
                <p className="text-white text-base font-medium"> {children}</p>
            </div>
        </Link>
    )
}

export default ButtonLink