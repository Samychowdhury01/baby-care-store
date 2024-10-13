import SideNav from "@/components/dashboard/SideNav";
import TopNav from "@/components/dashboard/TopNav";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:min-h-screen w-full">
      {/* Make sure this div has full width */}
      <TopNav />
      <div className="grid grid-col-1 lg:grid-cols-5 gap-5 w-full">
        <div>
          <SideNav />
        </div>
        <div className="lg:col-span-4 lg:mt-5 lg:p-5 overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
