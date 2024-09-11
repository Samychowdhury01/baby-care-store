import { Button } from "@nextui-org/button";
import React from "react";
import RightArrow from "../ui/RightArrow";
import Link from "next/link";
import { TCategory, TProduct } from "@/types";
import ProductCard from "../ui/ProductCard";

const Categories = async ({ category }: { category: TCategory }) => {
  const response = await fetch(
    `${
      process.env.LOCAL_SERVER as string
    }/products?limit=4&fields=name,image,price,_id&categoryId=${category._id}`
  );
  const { data: products } = await response.json();
  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-9">
          <h2 className="text-3xl gradient font-semibold">{category.name}</h2>
          <Button
            as={Link}
            href={category.url as string}
            color="primary"
            radius="lg"
            variant="bordered"
            className="shadow-2xl shadow-primary hover:bg-primary hover:text-black transition-all duration-500"
            endContent={<RightArrow />}
          >
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products?.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
