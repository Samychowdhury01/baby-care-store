/* eslint-disable react/no-unescaped-entities */
import { Button } from "@nextui-org/button";
import Link from "next/link";
import RightArrow from "../ui/RightArrow";
import { TProduct } from "@/types";
import ProductCard from "../ui/ProductCard";

const Popular = async () => {
  const res = await fetch(
    `${
      process.env.LOCAL_SERVER as string
    }/products?limit=8&fields=name,image,price,_id`
  );
  const { data } = await res.json();
  return (
    <div className="my-44">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center mb-10">
        <div className="space-y-3">
          <h2 className="text-xl md:text-3xl font-semibold gradient">
            Most Popular Products
          </h2>
          <p className="text-foreground md:w-1/2">
            Discover our top categories, featuring everything from cozy clothing
            to essential baby gear. We've curated the best products to keep your
            little one happy and healthy.
          </p>
        </div>
        <Button
          as={Link}
          href="/categories"
          color="primary"
          variant="bordered"
          radius="lg"
          className="shadow-2xl shadow-primary hover:bg-primary hover:text-black transition-all duration-500"
          endContent={<RightArrow />}
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {data.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </div>
  );
};

export default Popular;
