/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppSelector } from "@/redux/hook";
import Chart from "./Chart";
import OrderTable from "./OrderTable";
import TopCard from "./TopCard";

const UserOverview = ({ data }: any) => {
  const { selectedItems } = useAppSelector((state) => state.cart);

  return (
    <div className="space-y-10">
      {/* top cards */}
      <div className=" flex items-center justify-between gap-5">
        <TopCard title="Total Cart Items" text={String(selectedItems)} />
        <TopCard title="Total Orders" text={data?.orders?.length} />
        <TopCard title="Pending" text={data?.pendingOrders} />
      </div>
      <div className="w-1/3 mx-auto">
        <h3 className="mb-5 text-2xl text-foreground font-semibold text-center">
          Total paid Users
        </h3>
        <Chart
          deliveredAmount={data?.orders?.length - data?.pendingOrders}
          PendingAmount={data?.pendingOrders}
        />
      </div>
      <div>
        <h3 className="mb-5 text-2xl text-foreground font-semibold text-center">
          Recent orders
        </h3>
        <OrderTable orders={data?.orders} />
      </div>
    </div>
  );
};

export default UserOverview;
