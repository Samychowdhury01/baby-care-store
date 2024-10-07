import SideNav from '@/components/dashboard/SideNav';
import TopNav from '@/components/dashboard/TopNav';
import React, { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen">
            {/* Make sure this div has full width */}
            <TopNav />
            <div className="grid grid-cols-5 gap-5 w-full">
                <div>
                    <SideNav />
                </div>
                <div className="col-span-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
