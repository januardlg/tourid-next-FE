

const Page = async ({ params }: { params: Promise<{ tripId: string }> }) => {

    const { tripId } = await params

    return <h1>tripId {tripId}</h1>
}

export default Page