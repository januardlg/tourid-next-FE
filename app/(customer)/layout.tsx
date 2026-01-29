const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <h1>Layout customer</h1>
            {children}
        </section>
    )
}

export default Layout