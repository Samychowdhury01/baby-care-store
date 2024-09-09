"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Swipper = () => {
  return (
    <>
      <Swiper
      slidesPerView={3}
      spaceBetween={30}
        pagination={{
          type: "fraction",
          clickable : true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-full w-full"
        
      >
        <SwiperSlide className="pb-10 w-[285px]">
          <Card shadow="sm" className="">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                src="https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="baby"
                className="w-full object-cover h-[220px]"
              />
              <h3 className="my-3 px-3">product name</h3>
            </CardBody>

            <CardFooter className="text-small justify-between">
              <b>title</b>
              <p className="text-default-500">tem.price</p>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="pb-10 w-[285px]">
          <Card shadow="sm" className="">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                src="https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="baby"
                className="w-full object-cover h-[220px]"
              />
              <h3 className="my-3 px-3">product name</h3>
            </CardBody>

            <CardFooter className="text-small justify-between">
              <b>title</b>
              <p className="text-default-500">tem.price</p>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="pb-10 w-[285px]">
          <Card shadow="sm" className="">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                src="https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="baby"
                className="w-full object-cover h-[220px]"
              />
              <h3 className="my-3 px-3">product name</h3>
            </CardBody>

            <CardFooter className="text-small justify-between">
              <b>title</b>
              <p className="text-default-500">tem.price</p>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="pb-10 w-[285px]">
          <Card shadow="sm" className="">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                src="https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="baby"
                className="w-full object-cover h-[220px]"
              />
              <h3 className="my-3 px-3">product name</h3>
            </CardBody>

            <CardFooter className="text-small justify-between">
              <b>title</b>
              <p className="text-default-500">tem.price</p>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="pb-10 w-[285px]">
          <Card shadow="sm" className="">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                src="https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="baby"
                className="w-full object-cover h-[220px]"
              />
              <h3 className="my-3 px-3">product name</h3>
            </CardBody>

            <CardFooter className="text-small justify-between">
              <b>title</b>
              <p className="text-default-500">tem.price</p>
            </CardFooter>
          </Card>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
};

export default Swipper;

/*

 <div className="flex items-center justify-center"> 
       
        </div>

*/
