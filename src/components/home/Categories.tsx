import React from "react";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import RightArrow from "../ui/RightArrow";

const Categories = () => {
  const data = [
    {
      id: 1,
      name: "Category 1",
      image:
        "https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Category 2",
      image:
        "https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Category 3",
      image:
        "https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Category 4",
      image:
        "https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="mt-44 space-y-16">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-semibold gradient">Top Categories</h2>
        <p className="text-foreground w-1/2 mx-auto">
          Discover our top categories, featuring everything from cozy clothing
          to essential baby gear. We've curated the best products to keep your
          little one happy and healthy.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-3 gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${(index + 1) % 2 === 1 ? "row-span-2" : ""}`}
          >
            <Card
              isPressable
              radius="lg"
              className={`${
                (index + 1) % 2 === 1 ? "h-[515px]" : "h-[240px]"
              } border-none hover:drop-shadow-2xl duration-500 transition-all`}
            >
              <div>
                <Image
                  alt={item.name}
                  className="object-cover h-full w-full"
                  src={item.image}
                />
                <CardFooter className="bg-transparent overflow-hidden py-1 absolute bottom-1 ml-1 z-10">
                  <p className="font-semibold">Available soon.</p>
                </CardFooter>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button
          as={Link}
          href="/products"
          color="primary"
          variant="bordered"
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
