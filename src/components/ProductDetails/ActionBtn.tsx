/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  addToCart,
  selectProductQuantityById,
  updateQuantity,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TProduct } from "@/types";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";

const ActionBtn = ({ product }: { product: TProduct }) => {
  const quantity = useAppSelector((state) =>
    selectProductQuantityById(state, product._id)
  );

  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  // handle add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product?.name} is added to your bucket`, {
      className: "bg-green-500 text-white",
    });
  };

  // handle product update quantity
  const handleUpdateQuantity = (type: string, productId: string) => {
    const isProductExistInList = products.find(
      (product: any) => product._id === productId
    );
    const payload = { type, productId };
    if (isProductExistInList) {
      dispatch(updateQuantity(payload));
      toast.success(`quantity updated of your selected product`, {
        className: "bg-green-500 text-white",
      });
    }
    else{
      toast.error(`first add the product to your bucket!`, {
        className: "bg-red-500 text-white",
      });
    }
  };

  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center  p-1 border rounded-full">
        <Button
          onClick={() => handleUpdateQuantity("decrement", product._id)}
          className="bg-transparent  text-xl"
        >
          -
        </Button>
        <p>{quantity}</p>
        <Button
          onClick={() => handleUpdateQuantity("increment", product._id)}
          className="bg-transparent text-xl"
        >
          +
        </Button>
      </div>
      <Button
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
