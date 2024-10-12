import delivery from "@/assets/delivery.png";
import Image from "next/image";

const Delivery = () => {
    
  return (
    <div className="my-16 flex flex-col-reverse md:flex-row gap-5 items-center relative">
      <div className="flex-1">
        <Image
          src={delivery}
          alt="delivery"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1 space-y-5">
        <h2 className="text-xl md:text-3xl font-semibold gradient">
          Our Delivery Process
        </h2>
        <p>
          At BabyBliss, we strive to make the delivery process smooth and
          hassle-free for our customers. Once you place an order, our team
          carefully packages your baby products with love and care to ensure
          they arrive in perfect condition. We partner with trusted delivery
          services to offer fast, reliable shipping to your doorstep. You’ll
          receive real-time updates and tracking information, so you can monitor
          your order every step of the way. Our goal is to deliver your products
          safely and promptly, making your shopping experience as blissful as
          possible.
        </p>
      </div>
    </div>
  );
};

export default Delivery;
