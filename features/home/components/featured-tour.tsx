import ProductCard from "@/components/card/product-card"

const FeaturedTour = () => {
    return (
        <section className="mt-24">
            <p className="text-center text-5xl font-semibold">Our Top Selling Tour</p>
            <div className="mt-15 grid grid-cols-12 gap-10">
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
    )
}

export default FeaturedTour