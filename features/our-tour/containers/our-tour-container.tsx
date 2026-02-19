import ProductCard from "@/components/card/product-card";
import SearchCategory from "../components/search-category";
import SortCategory from "../components/sort-category";
import Pagination from "../components/pagination";

const OurTourContainer = () => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-12 gap-9 ">
        <div className="col-span-4">
          <p className="text-2xl font-bold">Explore Our Tour</p>
          <p>23 Activities Found</p>
        </div>
        <div className="col-span-4">
          <SearchCategory />
        </div>
        <div className="col-span-4">
          <SortCategory />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className=" col-span-12 grid grid-cols-12 gap-6 mt-10">
          <div className="col-span-4">
            <ProductCard />
          </div>
          <div className="col-span-4">
            <ProductCard />
          </div>
          <div className="col-span-4">
            <ProductCard />
          </div>
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

      </div>
      <Pagination />
    </section>
  );
};

export default OurTourContainer;
