"use client";
import { Tooltip } from "@nextui-org/tooltip";
import AddBtn from "../ui/AddBtn";
import { Button } from "@nextui-org/button";
import { TProduct } from "@/types";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { toast } from "sonner";

const AddToCart = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = async () => {
    dispatch(addToCart(product));
    toast.success(`${product?.name} is added to your bucket`, {
      className: "bg-green-500 text-white",
    });
  };
  return (
    <>
      <Tooltip content="add to cart">
        <Button onClick={handleAddToCart} isIconOnly className="bg-transparent">
          <AddBtn />
        </Button>
      </Tooltip>
    </>
  );
};

export default AddToCart;
