import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Popular from "@/components/home/Popular";
import Sale from "@/components/home/Sale";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="p-5 md:p-0">
        <Sale />
        <Categories />
        <Popular />
      </div>
    </>
  );
};

export default HomePage;
