/* eslint-disable @typescript-eslint/no-explicit-any */
import Chart from "./Chart";
import OrderTable from "./OrderTable";
import TopCard from "./TopCard";

const AdminOverview = ({ data }: any) => {
  return (
    <div className="space-y-10">
      {/* top cards */}
      <div className=" flex items-center justify-between gap-5">
        <TopCard title="Total Categories" text={data?.categoriesCount} />
        <TopCard title="Total Products" text={data?.productsCount} />
        <TopCard title="Total Orders" text={data?.ordersCount} />
      </div>
      <div className="w-1/3 mx-auto">
        <h3 className="mb-5 text-2xl text-foreground font-semibold text-center">
          Total paid Users
        </h3>
        <Chart deliveredAmount={data?.deliveredOrders} PendingAmount={data?.pendingOrders} />
      </div>
      <div>
        <h3 className="mb-5 text-2xl text-foreground font-semibold text-center">
          Recent orders
        </h3>
       <OrderTable orders={data?.orders}/>
      </div>
    </div>
  );
};

export default AdminOverview;
