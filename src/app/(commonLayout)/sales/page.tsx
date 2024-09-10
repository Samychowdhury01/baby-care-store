import ProductCard from "@/components/home/ProductCard";


const SalePage = () => {
    return (
        <div className="relative mt-8 space-y-8">
            <h2 className="text-3xl gradient font-semibold">Flash Sale</h2> 
            {/* here will be a search bar */}
            {/* products */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            </div>
        </div>
    );
};

export default SalePage;