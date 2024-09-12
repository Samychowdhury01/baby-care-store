/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  addToCart,
  selectProductQuantityById,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TProduct } from "@/types";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import QuantityBtn from "../ui/QuantityBtn";

const ActionBtn = ({ product }: { product: TProduct }) => {
  const quantity = useAppSelector((state) =>
    selectProductQuantityById(state, product._id)
  );

  
  const dispatch = useAppDispatch();
  // handle add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product?.name} is added to your bucket`, {
      className: "bg-green-500 text-white",
    });
  };

 

  return (
    <div className="flex items-center gap-5">
     <QuantityBtn productId={product._id}/>
      <Button
        isDisabled={quantity !== 0}
        onClick={handleAddToCart}
        variant="shadow"
        color="primary"
        radius="lg"
        className="text-black"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ActionBtn;
