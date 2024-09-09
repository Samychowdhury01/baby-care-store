import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Tooltip,
} from "@nextui-org/react";
import AddBtn from "../ui/AddBtn";

const ProductCard = () => {
  return (
    <>
      <Card shadow="sm" className="">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            src="https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="baby"
            className="w-full object-cover h-[360px]"
          />
          <h3 className="my-3 px-3">tem.price</h3>
        </CardBody>

        <CardFooter className="text-small justify-between">
          <b>tem.price</b>
          <Tooltip content="add to cart">
            <Button isIconOnly className="bg-transparent">
              <AddBtn />
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
