import TripHistoryDetailContainer from "@/features/tirp-history-detail/containers/trip-history-detail-container";

const Page = async ({
  params,
}: {
  params: Promise<{ orderPackageId: string }>;
}) => {
  const { orderPackageId } = await params;

  return <TripHistoryDetailContainer orderPackageId={orderPackageId} />;
};

export default Page;
