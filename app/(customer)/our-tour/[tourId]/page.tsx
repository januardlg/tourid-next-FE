import OurTourDetailContainer from "@/features/our-tour-detail/containers/our-tour-detail-container"


const Page = async ({ params }: { params: Promise<{ tourId: string }> }) => {

    const { tourId } = await params

    return (
        <OurTourDetailContainer tourId={tourId} />
    )
}

export default Page