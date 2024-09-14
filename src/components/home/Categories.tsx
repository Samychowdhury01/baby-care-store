/* eslint-disable react/no-unescaped-entities */
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import RightArrow from "../ui/RightArrow";
import { TCategory } from "@/types";

const Categories = async () => {
  const res = await fetch(`${process.env.PRODUCTION_SERVER as string}/categories`);
  const { data } = await res.json();

  return (
    <div className="mt-44 space-y-16">
      <div className="space-y-3 text-center">
        <h2 className="text-xl md:text-3xl font-semibold gradient">
          Top Categories
        </h2>
        <p className="text-foreground md:w-1/2 mx-auto">
          Discover our top categories, featuring everything from cozy clothing
          to essential baby gear. We've curated the best products to keep your
          little one happy and healthy.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data?.slice(0, 4).map((category: TCategory, index: number) => (
          <div
            key={index}
            className={`${(index + 1) % 2 === 1 ? "row-span-2" : ""}`}
          >
            <Link href={category.url}>
              <Card
                isPressable
                radius="lg"
                className={`${
                  (index + 1) % 2 === 1 ? "h-[515px]" : "h-[240px]"
                } border-none hover:drop-shadow-2xl duration-500 transition-all w-full`}
              >
                <div>
                  <Image
                    alt="Woman listing to music"
                    className={`object-cover w-full ${
                      (index + 1) % 2 === 1 ? "h-[515px]" : "h-[240px]"
                    } w-full`}
                    src={category.image}
                    width="100%"
                  />
                  <CardFooter className="bg-transparent overflow-hidden py-1 absolute bottom-1 ml-1 z-10">
                    <p className="font-semibold">{category?.name}</p>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
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
    </div>
  );
};

export default Categories;
