/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  selectProductQuantityById,
  updateQuantity,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";

const QuantityBtn = ({ productId }: { productId: string }) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);
  const quantity = useAppSelector((state) =>
    selectProductQuantityById(state, productId)
  );

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
    } else {
      toast.error(`first add the product to your bucket!`, {
        className: "bg-red-500 text-white",
      });
    }
  };
  return (
    <div className="flex items-center  p-1 border rounded-full">
      <Button
        onClick={() => handleUpdateQuantity("decrement", productId)}
        className="bg-transparent  text-xl"
      >
        -
      </Button>
      <p>{quantity}</p>
      <Button
        onClick={() => handleUpdateQuantity("increment", productId)}
        className="bg-transparent text-xl"
      >
        +
      </Button>
    </div>
  );
};

export default QuantityBtn;
