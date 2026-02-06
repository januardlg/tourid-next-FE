import Link from "next/link"

export interface IFooterItem {
    title: string
    items: {
        item: string | React.ReactNode,
        link: string
    }[]

}

const FooterItem = ({ itemData }: { itemData: IFooterItem }) => {
    return (
        <div className="">
            <p>{itemData.title}</p>
            <div className="mt-5 space-y-4 "  >
                {itemData.items.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link href={item.link} className="text-tid-grey-100">{item.item}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FooterItem