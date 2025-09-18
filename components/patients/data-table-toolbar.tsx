'use client';

import { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { patientStatuses } from '@/constants/patientStatuses';

import { DataTableFacetedFilter } from './data-table-faceted-filter';
// import { DialogBase } from './dialog-base';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  buttonClassName?: string;
  filterInputPlaceholder?: string;
}

export const DataTableToolbar = <TData,>({
  table,
  filterInputPlaceholder,
}: DataTableToolbarProps<TData>) => {
  const [open, setOpen] = useState(false);

  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='flex flex-col items-center justify-between gap-y-4 md:flex-row md:gap-y-0'>
      <Input
        placeholder={filterInputPlaceholder}
        value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
        onChange={event =>
          table.getColumn('name')?.setFilterValue(event.target.value)
        }
        className='h-8 w-[250px]'
      />
      <div className='flex flex-1 items-center space-x-2 md:ml-2'>
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title='Status'
            options={patientStatuses}
          />
        )}

        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <div className='flex items-center gap-2'>
        {/* DialogBase */}
        {/* <DialogBase
          buttonLabel='Add Idea'
          title='New Idea'
          description='Create new idea'
          buttonClassName={buttonClassName}
          open={open}
          setOpen={setOpen}
        /> */}
      </div>
    </div>
  );
};
