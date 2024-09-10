import { Button } from "@nextui-org/button";
import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import RightArrow from "../ui/RightArrow";

const Sale = () => {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Sale;
