import ProductCard from "@/features/our-tour/components/product-card";
import { PackageTourProductDTO } from "@/features/our-tour/lib/package-tour.dto";

const FeaturedTour = () => {
  const DUMMYTOPSELLINGTOURS: PackageTourProductDTO[] = [
    {
      packageId: 1,
      imageUrl: "/images/tours/bali.webp",
      namePackage: "Hidden Village In Bali",
      cost: "2500000",
      description: "Explore Bali's hidden villages and local culture.",
      starDate: new Date("2026-11-01"),
      endDate: new Date("2026-11-03"),
      activities: [],
      hostelryPartnerId: 1,
      quota: 12,
      quotaRemaining: 8,
      createdAt: new Date("2026-10-01"),
      updatedAt: new Date("2026-10-01"),
    },
    {
      packageId: 2,
      imageUrl: "/images/tours/toba.webp",
      namePackage: "Wonderful Toba",
      cost: "1800000",
      description: "Enjoy the scenery and attractions around Lake Toba.",
      starDate: new Date("2026-11-05"),
      endDate: new Date("2026-11-08"),
      activities: [],
      hostelryPartnerId: 2,
      quota: 15,
      quotaRemaining: 10,
      createdAt: new Date("2026-10-01"),
      updatedAt: new Date("2026-10-01"),
    },
    {
      packageId: 3,
      imageUrl: "/images/tours/bromo.webp",
      namePackage: "Hiking in Bromo",
      cost: "1200000",
      description: "Hike through the breathtaking landscapes of Mount Bromo.",
      starDate: new Date("2026-11-10"),
      endDate: new Date("2026-11-12"),
      activities: [],
      hostelryPartnerId: 3,
      quota: 10,
      quotaRemaining: 6,
      createdAt: new Date("2026-10-01"),
      updatedAt: new Date("2026-10-01"),
    },
  ];

  return (
    <section className="mt-10">
      <p className="text-center text-5xl font-semibold">Our Top Selling Tour</p>
      <div className="mt-15 grid grid-cols-12 gap-10">
        {DUMMYTOPSELLINGTOURS.map((tour) => (
          <div key={tour.packageId} className="col-span-4">
            <ProductCard data={tour} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTour;
