"use client";
import { useAuth } from "@/lib/AuthProviders";
import { clearCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TProduct } from "@/types";
import { Button, Checkbox, Divider } from "@nextui-org/react";
import { toast } from "sonner";

const PaymentDetails = () => {
  const dispatch = useAppDispatch();
  const { user, token } = useAuth();
  const { deliveryCharge, products, selectedItems, total } = useAppSelector(
    (state) => state.cart
  );
  const totalAmount = Number(total.toFixed(2));
  const productsId = products.map((product: TProduct) => product._id);
  console.log(productsId);
  const handleCheckout = async () => {
    try {
      console.log('clicked');
      const order = {
        userId: user?.userId,
        username: user?.username,
        totalAmount,
        products: productsId,
        quantity: Number(selectedItems),
      };
      const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTION_SERVER}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add the token here
        },
        body: JSON.stringify(order),
      });
      const data = await res.json();
      console.log(data);
      if (data?.success) {
        
        toast.success("order  placed successfully", {
          className: "bg-green-500 text-white",
        });
        dispatch(clearCart());
      } else {
        console.log(data);
        toast.error(data?.message, {
          className: "bg-red-500 text-white",
        });
      }
    } catch (err) {
      toast.error("Something went wrong try Again!", {
        className: "bg-green-500 text-white",
      });
    }
  };
  return (
    <div className="space-y-5">
      <p className="text-foreground">
        By placing your order, you agree to our company Privacy policy and
        Conditions of use.
      </p>
      <Divider />

      <h3 className="text-2xl">Order Summary</h3>
      <div className="grid grid-cols-2 justify-between gap-2">
        <p>Total Product Quantity</p>
        <p>{selectedItems}</p>
        <p>Delivery Charge</p>
        <p>{deliveryCharge}TK</p>
      </div>
      <Divider />
      <div className="grid grid-cols-2 justify-between text-xl">
        <h3>Order Total</h3>
        <p>{totalAmount} TK</p>
      </div>
      <Checkbox isDisabled defaultSelected color="primary">
        Cash On Delivery
      </Checkbox>
      <Button
        onClick={handleCheckout}
        isDisabled={!user || !selectedItems}
        color="primary"
        variant="shadow"
        className="w-full text-black"
      >
        place an order
      </Button>
      {!user && (
        <p className="text-sm text-red-500">
          You need to Login to proceed the checkout process
        </p>
      )}
      {!selectedItems && (
        <p className="text-sm text-red-500">No products in your cart!!</p>
      )}
    </div>
  );
};

export default PaymentDetails;
