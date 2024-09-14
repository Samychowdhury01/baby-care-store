import ProductCard from "@/components/ui/ProductCard";
import { TProduct } from "@/types";

const SalePage = async () => {
  const res = await fetch(
    `${process.env.PRODUCTION_SERVER as string}/products?isFlashSale=true`
  );
  const { data: products } = await res.json();
  return (
    <div className="relative mt-8 space-y-8">
      <h2 className="text-3xl gradient font-semibold">Flash Sale</h2>
      {/* here will be a search bar */}
      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SalePage;
