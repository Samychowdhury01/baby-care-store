import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Sale from "@/components/home/Sale";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Banner />
        <Sale />
      </div>
      <Categories />
    </>
  );
};

export default HomePage;
