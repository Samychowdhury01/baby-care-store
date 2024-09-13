import CheckoutProductTable from "@/components/checkout/CheckoutProductTable";
import PaymentDetails from "@/components/checkout/PaymentDetails";
import React from "react";
const CheckoutPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 p-5 md:p-0">
      <CheckoutProductTable />
      <PaymentDetails />
    </div>
  );
};

export default CheckoutPage;
