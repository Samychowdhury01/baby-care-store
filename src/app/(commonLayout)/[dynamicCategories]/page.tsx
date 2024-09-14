import ProductCard from "@/components/ui/ProductCard";
import { TProduct } from "@/types";
import { generateTitle } from "@/utils/generateTitle";
import { notFound } from "next/navigation";


const DynamicCategoriesPage = async ({
  params,
}: {
  params: {
    dynamicCategories: string;
  };
}) => {

  const { dynamicCategories } = params;
  const res = await fetch(
    `${
      process.env.PRODUCTION_SERVER as string
    }/products?categoryUrl=${dynamicCategories}`
  );
  const { data: products } = await res.json();

  if (!products?.length) {
    notFound()
  }
  return (
    <div className="relative mt-8 space-y-8">
      <h2 className="text-3xl gradient font-semibold">
        {generateTitle(dynamicCategories)}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DynamicCategoriesPage;
