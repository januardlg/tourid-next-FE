"use client";
import DescriptionTour from "@/features/our-tour-detail/components/description-tour";
import Image from "next/image";
import { useTripHistoryDetail } from "../hooks/useTripHistoryDetail";
import TermConditionTour from "@/features/our-tour-detail/components/term-condition-tour";
import Divider from "@/features/home/components/divider";
import ActivityList from "@/features/our-tour-detail/components/activity-list";
import AccomodationTour from "@/features/our-tour-detail/components/accomodation-tour";
import HistoryPaymentLogs from "./history-payment-logs";
import { OrderPackageTourDetailResponseDTO } from "../lib/trip-history-detail";

interface TripHistoryDetailProps {
  orderPackageId: string;
}

const TripHistoryDetail = ({ orderPackageId }: TripHistoryDetailProps) => {
  const { TERM_CONDITIONS, queryResult, handleConfirmPayment } = useTripHistoryDetail(orderPackageId);

  const data = queryResult?.data?.data;

  return (
    <section className="mt-12">
      <p className="text-2xl font-bold">{data?.packageTourName}</p>
      <section className="grid grid-cols-12 gap-6 mt-4">
        <div className="h-full col-span-6">
          <Image
            src={"/images/step-content.png"}
            alt="image"
            width={2000}
            height={2000}
            className="w-full h-full"
          />
        </div>
        <div className="col-span-6">
          <HistoryPaymentLogs
            packageDetail={data as OrderPackageTourDetailResponseDTO}
            onConfirmPayment={handleConfirmPayment}
          />
        </div>
      </section>
      <section className="space-y-6">
        <TermConditionTour termConditionsData={TERM_CONDITIONS} />
        <DescriptionTour description={data?.packageTourDescription || ""} />
        <Divider />
        <ActivityList activities={data?.packageTourActivities || []} />
        <Divider />
        <AccomodationTour
          hostelryAddress={data?.hostelryAddress || ""}
          hostelryPartnerName={data?.hostelryName || ""}
          hostelryPartnerLocation={data?.hostelryLocation || ""}
        />
      </section>
    </section>
  );
};

export default TripHistoryDetail;
