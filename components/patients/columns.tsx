'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';
import { patientStatuses } from '@/constants/patientStatuses';
import { Patient } from '@/types/patient';

import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<Patient>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'patientID',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Patient ID' />
    ),
    cell: ({ row }) => {
      const id = row.getValue('patientID') as string;
      return <div>{id}</div>;
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
  },
  {
    accessorKey: 'age',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Age' />
    ),
  },
  {
    accessorKey: 'gender',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Gender' />
    ),
  },
  {
    accessorKey: 'diagnosis',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Diagnosis' />
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const status = patientStatuses.find(
        s => s.value === row.getValue('status'),
      );

      if (!status) return null;

      return (
        <div className='flex items-center'>
          {status.icon && (
            <status.icon className='text-muted-foreground mr-2 h-4 w-4' />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'doctor',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Doctor' />
    ),
  },
  {
    accessorKey: 'department',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Department' />
    ),
  },
  {
    accessorKey: 'admissionDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Admission Date' />
    ),
    sortingFn: (rowA, rowB, columnId) => {
      const a = rowA.getValue<string>(columnId);
      const b = rowB.getValue<string>(columnId);

      const parse = (d: string) => {
        const [day, month, year] = d.split('/').map(Number);
        return new Date(year, month - 1, day).getTime();
      };

      return parse(a) - parse(b);
    },
  },
  {
    accessorKey: 'dischargeDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Discharge Date' />
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
