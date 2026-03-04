'use-client'
import Image from "next/image"
import { IMenuHeader } from "./menu-header"
import Link from "next/link"

const CustomerHeader = () => {


    const MENU_HEADER: IMenuHeader[] = [
        {
            title: 'Our Tour',
            link: '/our-tour'
        },
        {
            title: 'Trip History',
            link: '/trip-history'
        },
        {
            title: 'Blogs',
            link: '/blogs'
        },
        {
            title: 'Register',
            link: '/register'
        },
        {
            title: 'Login',
            link: '/login'
        },
    ]

    return (
        <header className="grid grid-cols-12">
            <div className="col-span-6">
                <Image src={`/icons/tourid-logo.png`} alt="Tour Id" width={100} height={100} />
            </div>
            <div className="col-span-6 flex justify-end space-x-8">
                {MENU_HEADER.map((menu) => {
                    return (
                        <Link key={menu.link} href={menu.link} className="hover:text-red-600" >{menu.title}</Link>
                    )
                })}
            </div>
        </header>
    )
}

export default CustomerHeader