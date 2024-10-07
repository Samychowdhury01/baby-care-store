/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { TProduct } from "@/types";
import Link from "next/link";
import AddToCart from "../ui/AddToCart";
import { useState } from "react";
import { LeftArrow, RightArrow } from "../ui/Arrow";

const Swipper = ({ products }: { products: TProduct[] }) => {
  const [swiper, setSwiper] = useState<any>(null); // Use state to store swiper instance

  return (
    <>
      <Swiper
        onSwiper={(swiperInstance) => setSwiper(swiperInstance)} // Save swiper instance
        spaceBetween={30}
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-full w-full"
        breakpoints={{
          640: {
            slidesPerView: 2, // Two slides for tablets
          },
          1024: {
            slidesPerView: 3, // Two slides for PCs
          },
        }}
      >
        {products?.map((product) => (
          <SwiperSlide key={product._id} className="pb-10 md:w-[285px]">
            <Card shadow="sm" className="">
              <CardBody className="overflow-hidden p-0">
                <Image
                  shadow="sm"
                  width="100%"
                  src={product?.image}
                  alt="baby"
                  radius="none"
                  className="w-full object-contain h-[200px]"
                />
                <h3 className="my-3 px-3">{product.name}</h3>
              </CardBody>

              <CardFooter className="text-small justify-between">
                <b>{product.price}TK</b>
                <AddToCart product={product} />
              </CardFooter>
              <Button
                as={Link}
                href={`${product?.categoryId?.url}/${product._id}`}
                color="secondary"
                radius="none"
                className="text-black"
              >
                View Details
              </Button>
            </Card>
          </SwiperSlide>
        ))}

        {/* Only show the button if swiper is initialized */}
        {swiper && (
          <div className="flex items-center justify-end gap-5">
            <button onClick={() => swiper.slidePrev()}>
              <LeftArrow />
            </button>
            <button onClick={() => swiper.slideNext()}>
              <RightArrow />
            </button>
          </div>
        )}
      </Swiper>
    </>
  );
};

export default Swipper;
