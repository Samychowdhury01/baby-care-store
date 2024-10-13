/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppSelector } from "@/redux/hook";
import Chart from "./Chart";
import OrderTable from "./OrderTable";
import TopCard from "./TopCard";

const UserOverview = ({ data }: any) => {
  const { selectedItems } = useAppSelector((state) => state.cart);

  return (
    <div className="space-y-10 p-5 md:p-0">
      {/* top cards */}
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className=" w-full">
          <TopCard title="Total Cart Items" text={String(selectedItems)} />
        </div>
        <div className=" w-full">
          <TopCard title="Total Orders" text={data?.orders?.length} />
        </div>
        <div className=" w-full">
          <TopCard title="Pending" text={data?.pendingOrders} />
        </div>
      </div>
      <div className="w-2/3 lg:w-1/3 mx-auto">
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
