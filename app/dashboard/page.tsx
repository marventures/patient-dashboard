'use client';

import { useQuery } from '@apollo/client/react';
import { GET_PATIENTS } from '@/graphql/queries';
import { Patient } from '@/types/patient';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

import { DataTable } from '@/components/patients/data-table';
import { columns } from '@/components/patients/columns';

import { usePatientStore } from '@/stores/patientStore';
import { useEffect } from 'react';
import { LoadingIndicator } from '@/components/loading/loading-indicator';
import { ErrorIndicator } from '@/components/error/error-indicator';

interface GetPatientsData {
  patients: Patient[];
}

const DashboardPage = () => {
  const { data, loading, error } = useQuery<GetPatientsData>(GET_PATIENTS);
  const patients = usePatientStore(state => state.patients);
  const setPatients = usePatientStore(state => state.setPatients);

  useEffect(() => {
    if (data?.patients) {
      setPatients(data.patients);
    }
  }, [data, setPatients]);

  if (loading) return <LoadingIndicator />;

  if (error) return <ErrorIndicator />;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator
              orientation='vertical'
              className='mr-2 data-[orientation=vertical]:h-4'
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='hidden md:block' />
                <BreadcrumbItem>
                  <BreadcrumbPage>Patients</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <DataTable
            columns={columns}
            data={patients}
            tableHeadClassName='bg-purple'
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardPage;
