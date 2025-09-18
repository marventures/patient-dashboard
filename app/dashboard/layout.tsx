'use client';

import { ReactNode } from 'react';

// import { AppHeader } from '@/components/dashboard/app-header.tsx';
// import { AppSidebar } from '@/components/dashboard/app-sidebar/index';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

type Props = { children: ReactNode };

const DashboardLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}
      <SidebarInset>
        {/* <AppHeader /> */}
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
