import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

interface Build {
  status: string;
  name: string;
}

const columnHelper = createColumnHelper<Build>();

const columns = [
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.accessor('name', {
    header: 'Name',
  }),
];

export interface WatchingBuildsTableProps {
  defaultData: Array<Build>;
}

export const BuildsTable = ({ defaultData }: WatchingBuildsTableProps) => {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="flex flex-col w-full my-8">
      <thead className="border-b">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="w-full flex">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="flex-1">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="flex w-full">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="flex-1 text-center">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
