import Footer from "@/components/footer/footer";
import CustomerHeader from "@/components/header/customer-header";
import ReactQueryProvider from "@/features/our-tour/components/react-query-provider";
import { getUserDataFromJWT } from "@/lib/auth-utils";
import { cookies } from 'next/headers'


const Layout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const dataToken = await getUserDataFromJWT(token as string);


  return (
    <section className="grid grid-cols-12 pt-12 relative">
      <section className="col-span-1" />
      <section className="col-span-10">
        <section className="col-span-12">
          <CustomerHeader dataUser={dataToken} />
        </section>
        <ReactQueryProvider>
          <section className="col-span-12">{children}</section>
        </ReactQueryProvider>
        <Footer />
        <section className="col-span-1" />
      </section>
      <section className="absolute -z-10 left-0 top-0 w-120 h-120 bg-[#F8DCD7] blur-lg opacity-30 rounded-br-[100px]"></section>
    </section>
  );
};

export default Layout;
