import ProductCard from "@/components/card/product-card";
import SearchCategory from "../components/search-category";

const OurTourContainer = () => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-12 ">
        <div className="col-span-4">
          <p className="text-2xl font-bold">Explore Our Tour</p>
          <p>23 Activities Found</p>
        </div>
        <div className="col-span-4">
          <SearchCategory />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-15">
        <div className="col-span-4">
          <ProductCard />
        </div>
        <div className="col-span-4">
          <ProductCard />
        </div>
        <div className="col-span-4">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default OurTourContainer;
