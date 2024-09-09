/* eslint-disable react/no-unescaped-entities */
import Swipper from "./Swipper";
const Banner = () => {
  return (
    <div className="relative h-[779px] flex items-center justify-center banner-bg">
      <div className="text-center space-y-5">
        {/* heading */}
        <h1 className="text-4xl font-bold text-foreground tracking-wide">
        Nurturing Moments, Creating Smiles. <span className="gradient font-extrabold block mt-2">Your Baby, Your Tender Touch!</span>
        </h1>
        {/* description */}
        <p className="w-1/2 mx-auto text-foreground">
        At BabyBliss, we believe every little moment with your baby is precious. Our products are designed to nurture those moments, bringing comfort and joy to both you and your little one. Whether it's the softness of a blanket or the gentle care of our essentials, we’re here to support you in creating beautiful memories, one tender touch at a time.
        </p>
    <div className="w-[800px] mx-auto">
        <Swipper />
    </div>
        
      </div>
    </div>
  );
};

export default Banner;
