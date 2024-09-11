import ProductCard from "@/components/ui/ProductCard";
import { TProduct } from "@/types";
import React from "react";

const DynamicCategoriesPage = async ({
  params,
}: {
  params: {
    dynamicCategories: string;
  };
}) => {
  const res = await fetch(
    `${process.env.LOCAL_SERVER as string}/products?categoryUrl=${
      params.dynamicCategories
    }`
  );
  const { data: products } = await res.json();

  // Generate a dynamic title based on the category
  const categoryTitle = params.dynamicCategories
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="relative mt-8 space-y-8">
      <h2 className="text-3xl gradient font-semibold">{categoryTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DynamicCategoriesPage;
