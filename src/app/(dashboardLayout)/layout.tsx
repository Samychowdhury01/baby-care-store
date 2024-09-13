import SideNav from '@/components/dashboard/SideNav';
import TopNav from '@/components/dashboard/TopNav';
import React, { ReactNode } from 'react';

const DashboardLayout = ({children}: {children : ReactNode}) => {
    return (
        <>
           <TopNav/>
            <div className='grid grid-cols-5 gap-5'>
                <div>
                   <SideNav/>
                </div>
                <div className='col-span-4'>
                    {children}
                    
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;