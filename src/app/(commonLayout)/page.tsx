import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Delivery from "@/components/home/Delivery";
import Popular from "@/components/home/Popular";
import Reviews from "@/components/home/Reviews";
import Sale from "@/components/home/Sale";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="p-5 md:p-0">
        <Sale />
        <Categories />
        <Popular />
        <Reviews /> 
        <Delivery />
      </div>
    </>
  );
};

export default HomePage;
