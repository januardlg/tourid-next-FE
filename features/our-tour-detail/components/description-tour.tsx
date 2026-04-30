import { PackageTourProductDTO } from "@/features/our-tour/lib/package-tour.dto";
import React from "react";

type DescriptionTourProps = Pick<PackageTourProductDTO, "description">;

const DescriptionTour = ({ description }: DescriptionTourProps) => {
  console.log("render description tour");
  return (
    <section className="gap-y-2.5">
      <p className="text-title-detail-tour">Description</p>
      <p className="text-tid-grey-200">{description}</p>
    </section>
  );
};

export default React.memo(DescriptionTour);
