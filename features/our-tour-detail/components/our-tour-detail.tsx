"use client";
import Image from "next/image";
import ActionForm from "./action-form";
import TermConditionTour from "./term-condition-tour";
import DescriptionTour from "./description-tour";
import Divider from "@/features/home/components/divider";
import ActivityList from "./activity-list";
import AccomodationTour from "./accomodation-tour";
import { useOurTourDetail } from "../hooks/useOurTourDetail";

interface OurTourDetailProps {
  tourId: string;
}

const OurTourDetail = ({ tourId }: OurTourDetailProps) => {
  const {
    queryResultFetch,
    numberOfGuestListOption,
    paymentMethodListOptions,
    numberOfGuest,
    handleNumberOfGuest,
    paymentMethod,
    TERM_CONDITIONS,
    handleSelectPaymentMethod,
    control,
    getValues,
    handleSubmit,
    onSubmit,
    onError,
  } = useOurTourDetail(tourId);

  const data = queryResultFetch?.data?.data;

  return (
    <section className="mt-12">
      <p className="text-2xl font-bold">{data?.namePackage}</p>
      <section className="grid grid-cols-12 gap-6 mt-4">
        <div className="h-full col-span-8">
          <Image
            src={"/images/step-content.png"}
            alt="image"
            width={2000}
            height={2000}
            className="w-full h-full"
          />
        </div>
        <div className="col-span-4">
          <ActionForm
            numberOfGuestListOption={numberOfGuestListOption}
            paymentMethodOptions={paymentMethodListOptions}
            numberOfGuest={numberOfGuest}
            handleNumberOfGuest={handleNumberOfGuest}
            paymentMethod={paymentMethod}
            handleSelectPaymentMethod={handleSelectPaymentMethod}
            control={control}
            getValues={getValues}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            onError={onError}
          />
        </div>
      </section>
      <section className="space-y-6">
        <TermConditionTour termConditionsData={TERM_CONDITIONS} />
        <DescriptionTour description={data?.description || ""} />
        <Divider />
        <ActivityList activities={data?.activities || []} />
        <Divider />
        <AccomodationTour
          hostelryAddress={data?.hostelryAddress || ""}
          hostelryPartnerName={data?.hostelryPartnerName || ""}
          hostelryPartnerLocation={data?.hostelryPartnerLocation || ""}
        />
      </section>
    </section>
  );
};

export default OurTourDetail;
