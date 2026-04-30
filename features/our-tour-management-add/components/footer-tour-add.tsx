
import Button from "@/components/button/button"

interface IFooterTourAdd {
    onHandlePublish: () => void
}

const FooterTourAdd = ({ onHandlePublish }: IFooterTourAdd) => {
    return (
        <section className="py-7 px-6 flex-align-items-center justify-between bg-white">
            <div className="w-fit">
                <Button type="OUTLINE" onClick={() => { }}>
                    <p>Save as Draft</p>
                </Button>
            </div>
            <div className="flex-align-items-center space-x-4">
                <Button type="OUTLINE" onClick={() => { }}>
                    <p>Cancel</p>
                </Button>
                <Button type="PRIMARY" onClick={onHandlePublish}>
                    <p>Publish</p>
                </Button>
            </div>
        </section>
    )
}

export default FooterTourAdd