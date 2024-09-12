import { TProduct } from "@/types";
import { generateTitle } from "@/utils/generateTitle";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ActionBtn from "@/components/ProductDetails/ActionBtn";
type TParam = {
  dynamicCategories: string;
  productId: string;
};

const ProductDetailsPage = async ({ params }: { params: TParam }) => {
  const { productId, dynamicCategories } = params;

  const res = await fetch(`${process.env.LOCAL_SERVER}/products/${productId}`);

  const { data: productDetails }: { data: TProduct } = await res.json();
  // for error
  if (!Object.keys(productId).length) {
    return (
      <div className="text-center mt-32">
        <h1 className="text-3xl font-bold text-gray-900">
          No products found with this product ID
        </h1>
        <Button
          as={Link}
          href="/categories"
          variant="shadow"
          color="primary"
          className="text-black mt-5"
        >
          Browse product from categories
        </Button>
      </div>
    );
  }
  return (
  <>
    <div className="mt-8 flex items-center gap-16">
      {/* Image container */}

      <div>
        <p className="mb-5">{`${generateTitle(dynamicCategories)} > ${
          productDetails?.name
        }`}</p>
        {/* image */}
        <div className="h-[500px] w-[500px]">
          <Image
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="product_image"
            width={300}
            height={500}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      {/* details Container */}
      <div className="flex-1 space-y-7">
        {/* title and price */}
        <div>
          <h2 className="text-3xl font-semibold mb-3">
            {productDetails?.name}
          </h2>
          <div className="flex items-center gap-3 pb-7 border-b-1">
            <h3 className="text-2xl border-r-1 py-1 pr-1">
              {productDetails?.price}TK
            </h3>
            <div className="flex items-center justify-center gap-1 ">
              <Rating
                style={{ maxWidth: 100 }}
                value={productDetails?.rating as number}
                readOnly
              />
              <p>{productDetails?.rating}</p>
            </div>
          </div>
        </div>
        {/* description */}
        <p>{productDetails?.description}</p>
        {/* features */}
        <ul className="list-disc pl-5">
          {productDetails?.features?.map((feature, index) => (
            <li key={index}>
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      {/* action buttons */}
      <div>
        <ActionBtn product={productDetails}/>
      </div>
      </div>

     
    </div>
    <div className="mt-20">
        <ProductDetails productId={productId} />
      </div>
  </>
  );
};

export default ProductDetailsPage;
