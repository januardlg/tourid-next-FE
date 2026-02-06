import Footer from "@/components/footer/footer"
import CustomerHeader from "@/components/header/customer-header"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="grid grid-cols-12 pt-12 relative">
            <section className="col-span-1" />
            <section className="col-span-10">
                <section className="col-span-12">
                    <CustomerHeader />
                </section>
                <section className="col-span-12">
                    {children}
                </section>
                <Footer />
                <section className="col-span-1" />
            </section>
            <section className="absolute -z-10 left-0 top-0 w-120 h-120 bg-[#F8DCD7] blur-lg opacity-30 rounded-br-[100px]">

            </section>
        </section>
    )
}

export default Layout