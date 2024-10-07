import { TProduct } from "@/types";
import { Button, Image, Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import RightArrow from "./RightArrow";
import AddToCart from "./AddToCart";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ProductCard = ({ product }: { product: TProduct }) => {
  console.log(product, "line 9");
  return (
    <>
      <Card shadow="sm" className="">
        <CardBody className="overflow-visible p-0">
          <Image
            radius="none"
            width="100%"
            src={product?.image}
            alt="product_image"
            className="w-full object-contain h-[200px]"
          />
          <div className="flex items-center justify-between">
            <h3 className="my-3 px-3">{product.name}</h3>
            <div className=" px-3 flex items-center gap-1 ">
              <Rating
                style={{ maxWidth: 80 }}
                value={product?.rating as number}
                readOnly
              />
              <p className="text-sm">{product?.rating}</p>
            </div>
          </div>
        </CardBody>

        <CardFooter className="text-small justify-between px-3 py-0">
          <b>{product.price}TK</b>
          <AddToCart product={product} />
        </CardFooter>
        <Button
          as={Link}
          radius="none"
          href={`${product?.categoryId?.url}/${product._id}`}
          color="secondary"
          className="text-black"
          endContent={<RightArrow />}
        >
          View Details
        </Button>
      </Card>
    </>
  );
};

export default ProductCard;
