import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Popular from "@/components/home/Popular";
import Sale from "@/components/home/Sale";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Sale />
      <Categories />
      <Popular />
    </>
  );
};

export default HomePage;
