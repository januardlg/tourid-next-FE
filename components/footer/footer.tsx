import Image from "next/image"
import OfficeIcon from "../icons/office-icon"
import FooterItem, { IFooterItem } from "./footer-item"

const Footer = () => {



    const DISCOVER: IFooterItem =
    {
        title: 'Discover',
        items: [
            {
                item: 'Home',
                link: '/Home'
            },
            {
                item: 'Our Trip',
                link: '/our-trip'
            },
            {
                item: 'Craft Your Dream',
                link: '/our-trip'
            },
        ]
    }

    const QUICK_LINK: IFooterItem = {
        title: 'Quick Links',
        items: [
            {
                item: 'Blogs',
                link: '/Blogs'
            },
            {
                item: 'Register',
                link: '/register'
            },
            {
                item: 'Login',
                link: '/login'
            },
        ]
    }

    const CONTACT: IFooterItem = {
        title: 'Contact',
        items: [
            {
                item: <div className="flex-align-items-center space-x-2">
                    <OfficeIcon />
                    <p>Kebon Jeruk, Jakarta</p>
                </div>,
                link: '/Blogs'
            },
            {
                item: <div className="flex-align-items-center space-x-2">
                    <OfficeIcon />
                    <p>tourId@mail.com</p>
                </div>,
                link: '/Blogs'
            },
            {
                item: <div className="flex-align-items-center space-x-2">
                    <OfficeIcon />
                    <p>tourId@mail.com</p>
                </div>,
                link: '/Blogs'
            },
        ]
    }

    return (
        <footer className="mt-15 pb-5">
            <section className="grid grid-cols-12">
                <div className="col-span-5 space-y-4">
                    <div>
                        <Image src={`/icons/tourid-logo.png`} alt="Tour Id" width={100} height={100} />
                    </div>
                    <div className="max-w-1/2">
                        <p className="text-tid-grey-100">We’ll help make your dream getaway come true, wherever you wish to travel in Indonesia.</p>
                    </div>
                </div>
                <div className="col-span-2">
                    <FooterItem itemData={DISCOVER} />
                </div>
                <div className="col-span-2">
                    <FooterItem itemData={QUICK_LINK} />
                </div>
                <div className="col-span-3">
                    <FooterItem itemData={CONTACT} />
                </div>
            </section>
            <section className="mt-8">
                <p>© 2026 <span className="text-tid-primary-100">MVP Portofolio</span> . All Rights Reserved</p>
            </section>
        </footer>
    )
}

export default Footer