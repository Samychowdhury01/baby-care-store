import { Button } from "@nextui-org/button";
import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";

const Sale = () => {
  return (
    <div className="mt-24 h-screen">
      <div className="flex items-center justify-between mb-9">
        <h2 className="text-4xl gradient font-semibold">Flash Sale</h2>
        <Button
          as={Link}
          href="/products"
          color="primary"
          variant="bordered"
          className="shadow-2xl shadow-primary hover:bg-primary hover:text-black transition-all duration-500"
          endContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          }
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
};

export default Sale;
