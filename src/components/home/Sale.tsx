/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import RightArrow from "../ui/RightArrow";
import ProductCard from "../ui/ProductCard";
import { TProduct } from "@/types";
import { Button } from "@nextui-org/react";

const Sale = async() => {
  const res = await fetch(`${process.env.PRODUCTION_SERVER as string}/products?limit=4&isFlashSale=false&fields=name,image,price,_id`);
  const { data } = await res.json();
  return (
    <div className="my-44">
      <div className="flex items-center justify-between mb-9">
        <h2 className="text-3xl gradient font-semibold">Flash Sale</h2>
        <Button
          as={Link}
          href="/sales"
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
        {
          data?.slice(0,4).map((product : TProduct) => (
            <ProductCard
            key={product._id}
            product={product}
            />
            ))
        }
      </div>
    </div>
  );
};

export default Sale;
