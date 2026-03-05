export interface IAdminHeader {
    title: string
}

const AdminHeader = ({ title }: IAdminHeader) => {
    return (
        <section className="h-25 px-10 flex justify-between items-center">
            <p className="text-lg font-black mt-5">{title}</p>
            <div>
                icon
            </div>
        </section>
    )
}

export default AdminHeader