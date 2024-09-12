"use client";
import { useAuth } from "@/lib/AuthProviders";
import { useAppSelector } from "@/redux/hook";
import { Button, Checkbox, Divider } from "@nextui-org/react";

const PaymentDetails = () => {
  const {user} = useAuth()
  console.log(user);
  const { deliveryCharge, selectedItems, total } = useAppSelector(
    (state) => state.cart
  );
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
        <p>{total}TK</p>
      </div>
      <Checkbox isDisabled defaultSelected color="primary">
        Cash On Delivery
      </Checkbox>
      <Button isDisabled={!user} color="primary" variant="shadow" className="w-full text-black">place an order</Button>
      {!user && <p className="text-sm text-red-500">You need to Login to proceed the checkout process</p>}
    </div>
  );
};

export default PaymentDetails;
