import { Button } from "@nextui-org/button";
import Link from "next/link";
import RightArrow from "../ui/RightArrow";
import ProductCard from "./ProductCard";

const Popular = () => {
  return (
    <div className="my-44">
      <div className="flex items-center justify-center mb-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold gradient">
            Most Popular Products
          </h2>
          <p className="text-foreground w-1/2">
            Discover our top categories, featuring everything from cozy clothing
            to essential baby gear. We've curated the best products to keep your
            little one happy and healthy.
          </p>
        </div>
        <Button
          as={Link}
          href="/products"
          color="primary"
          variant="bordered"
          radius="lg"
          className="shadow-2xl shadow-primary hover:bg-primary hover:text-black transition-all duration-500"
          endContent={<RightArrow />}
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Popular;
