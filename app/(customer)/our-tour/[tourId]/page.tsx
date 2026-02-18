import OurTourDetailContainer from "@/features/our-tour-detail/containers/our-tour-detail-container"


const Page = async ({ params }: { params: Promise<{ tripId: string }> }) => {

    const { tripId } = await params

    return (
        <OurTourDetailContainer />
    )
}

export default Page