import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Popular from "@/components/home/Popular";
import Sale from "@/components/home/Sale";
import Company from "@/components/ui/Company";
import Footer from "@/components/ui/Footer";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Banner />
        <Sale />
      </div>
      <Categories />
      <Popular/>
      <Company/>
      <Footer/>
    </>
  );
};

export default HomePage;
