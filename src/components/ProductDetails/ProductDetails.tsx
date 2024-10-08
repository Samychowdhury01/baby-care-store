import ReviewForm from "./ReviewForm";

type TReview = {
  _id: string;
  userName: string;
  review: string;
};
const ProductDetails = async ({ productId }: { productId: string }) => {
  const response = await fetch(
    `${process.env.PRODUCTION_SERVER}/reviews/${productId}`,
    {
      cache: "no-store",
    }
  );
  const { data: reviews } = await response.json();
  return (
    <div>
      <h2 className="text-xl md:text-2xl border-l-3 border-primary pl-1 mb-5">
        Reviews
      </h2>
      <div className="w-full md:w-2/3">
        {reviews?.length
          ? reviews?.map((review: TReview) => (
              <div key={review._id} className="border-b-1 pb-1 mb-3">
                <h3 className="font-semibold">{review.userName}</h3>
                <p>{review.review}</p>
              </div>
            ))
          : "There is no review for this product"}
      </div>
      <div>
        <ReviewForm id={productId} />
      </div>
    </div>
  );
};

export default ProductDetails;
