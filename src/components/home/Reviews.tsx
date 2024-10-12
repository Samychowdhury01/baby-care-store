import Image from "next/image";
import avatar from "@/assets/avatar.jpg";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Reviews = () => {
  const reviews = [
    {
      name: "Emily Johnson",
      rating: 5,
      review:
        "I absolutely love BabyBliss! The products are top-quality, and the customer service is excellent. I bought a stroller and some baby toys, and they arrived quickly. Highly recommend!",
    },
    {
      name: "Michael Smith",
      rating: 4,
      review:
        "Great selection of baby products at reasonable prices. I ordered a baby carrier, and it’s really comfortable to use. Delivery took a bit longer than expected, but overall, I'm satisfied.",
    },
    {
      name: "Sarah Thompson",
      rating: 5,
      review:
        "BabyBliss is my go-to for all my baby’s needs. I’ve purchased diapers, clothes, and a crib, and everything was perfect. The site is easy to navigate, and I always find what I need!",
    },
    {
      name: "David Lee",
      rating: 3,
      review:
        "The products are good, but the website could use some improvements. I had trouble checking out, and the shipping was delayed. However, the baby products I received were of good quality.",
    },
  ];

  return (
    <div className="mt-16 w-full">
      <h2 className="text-center text-xl md:text-3xl font-semibold gradient">
        Our Customer Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 border-2 p-2 rounded-md shadow-sm"
          >
            <Image
              src={avatar}
              alt="avatar"
              width={50}
              height={50}
              className="rounded-full"
            />

            <h4 className="font-semibold">{review.name}</h4>
            <Rating style={{ maxWidth: 80 }} value={review.rating} readOnly />
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
