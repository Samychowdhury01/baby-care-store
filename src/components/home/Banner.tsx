/* eslint-disable react/no-unescaped-entities */
import Swipper from "./Swipper";

const Banner = async() => {
  const res = await fetch(`${process.env.LOCAL_SERVER as string}/products?limit=4&fields=name,image,price,_id`);
  const { data } = await res.json();

  return (
    <div className="md:relative h-[900px] flex items-center justify-center banner-bg w-full">
      <div className="md:text-center space-y-5">
        {/* heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-foreground md:tracking-wide">
        Nurturing Moments, Creating Smiles. <span className="gradient font-extrabold block mt-2">Your Baby, Your Tender Touch!</span>
        </h1>
        {/* description */}
        <p className="md:w-1/2 mx-auto text-foreground">
        At BabyBliss, we believe every little moment with your baby is precious. Our products are designed to nurture those moments, bringing comfort and joy to both you and your little one. Whether it's the softness of a blanket or the gentle care of our essentials, we’re here to support you in creating beautiful memories, one tender touch at a time.
        </p>
    <div className=" w-screen md:w-[800px] mx-auto">
        <Swipper products={data}/>
    </div>
        
      </div>
    </div>
  );
};

export default Banner;
