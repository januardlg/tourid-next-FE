import Image from "next/image"
import Footer from "../../components/footer/footer"
import Link from "next/link"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="grid grid-cols-12">
            <section className="col-span-1" />
            <section className="col-span-10">
                <section className="grid grid-cols-12 gap-1">
                    <section className="col-span-12 grid grid-cols-12 h-20 items-center">
                        <Image src={`/icons/tourid-logo.png`} alt="Tour Id" width={100} height={100} />
                    </section>
                    <section className="col-span-6 min-h-165">
                        <Image src={`/images/auth.png`} width={1000} height={1000} alt="Image Auth" className="w-full h-full" />
                    </section>
                    <section className="col-span-6 px-8">{children}</section>
                </section>
                <Footer />
            </section>
            <section className="col-span-1" />
        </section>
    )
}

export default Layout