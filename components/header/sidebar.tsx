
import { usePathname } from 'next/navigation'
import Image from "next/image"

import { cn } from "@/lib/utils"
import Link from 'next/link'
import DashboardIcon from '../icons/dashboard-icon'
import BookIcon from '../icons/book-icon'
import GearIcon from '../icons/gear-icon'
import ArrowCircleIcon from '../icons/arrow-circle-icon'

export interface ISideBarMenu {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    href: string
}


export interface ISideBar {
    isExpand: boolean;
    handleExpandSideBar: () => void
}

const SideBar = ({ isExpand, handleExpandSideBar }: ISideBar) => {

    const SIDEBAR_MENUS: ISideBarMenu[] = [
        { icon: DashboardIcon, title: 'Dashboard', href: '/dashboard' },
        { icon: BookIcon, title: 'Tour Management', href: '/our-tour-management' },
        { icon: GearIcon, title: 'Setting', href: '/setting' }
    ]

    const pathname = usePathname()

    // console.log({ pathname })

    return (
        <aside className={cn(
            "bg-white h-screen fixed top-0 left-0 w-62 z-50 shadow-md",
            'transform transition-transform duration-500',
            isExpand ? 'translate-x-0' : '-translate-x-full',
        )}>
            <div className="h-25 px-10 flex justify-center items-center">
                <Image src={`/icons/tourid-logo.png`} alt="Tour Id" width={100} height={100} className='w-auto h-10' />
            </div>
            <nav>
                <ul>
                    {SIDEBAR_MENUS.map((menu) => {

                        const Icon = menu.icon

                        return (

                            <li key={menu.title} >
                                <Link href={menu.href}
                                    className={cn(
                                        "flex items-center space-x-3 px-5 py-3 border-l-6 border-white text-black",
                                        menu.href == pathname && "border-tid-red-100 text-tid-red-100"
                                    )}
                                >
                                    <Icon color={menu.href == pathname ? '#DF6951' : 'black'} />
                                    <p>{menu.title}</p>
                                </Link>

                            </li>
                        )
                    })}
                </ul>
            </nav>

            <button onClick={handleExpandSideBar} className={cn(
                'absolute top-10 right-0 translate-x-4 cursor-pointer z-auto',
                'transition duration-200 ease-in-out',
                !isExpand && 'rotate-180'
            )}>
                <ArrowCircleIcon />
            </button>
        </aside >
    )
}

export default SideBar