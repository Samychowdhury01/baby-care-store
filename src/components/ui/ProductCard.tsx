import { TProduct } from "@/types";
import { Button, Image, Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import RightArrow from "./RightArrow";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <>
      <Card shadow="sm" className="">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            src={product?.image}
            alt="product_image"
            className="w-full object-cover h-[360px]"
          />
          <h3 className="my-3 px-3">{product.name}</h3>
        </CardBody>

        <CardFooter className="text-small justify-between">
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
