import ReviewForm from "./ReviewForm";

type TReview = {
  _id: string,
  userName: string,
  review : string;
}
const ProductDetails = async ({ productId } : {productId : string}) => {
  const response = await fetch(
    `${process.env.LOCAL_SERVER}/reviews/${productId}`
  );
  const { data: reviews } = await response.json();
  return (
    <div>
      <h2 className="text-2xl border-l-3 border-primary pl-1 mb-5">Reviews</h2>
      <div>
        {reviews?.map((review : TReview) => (
          <div key={review._id} className="border-b-1 pb-1 mb-3">
            <h3 className="font-semibold">{review.userName}</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
      <div>
        <ReviewForm/>
      </div>
    </div>
  );
};

export default ProductDetails;
