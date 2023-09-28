"use client";
import React, { useMemo, useState, Suspense } from "react";
import {
  TableBody,
  Table,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  Row,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { Campaign } from "@/interfaces/types";

import { useVirtualizer } from "@tanstack/react-virtual";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });
  const parentRef = React.useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 70,
    overscan: 5,
  });
  return (
    <div
      ref={parentRef}
      className=" overflow-x-scroll overflow-y--scroll  bg-white mt-4 border-x-[1px] border-y-2 border-line-border-gray  rounded-lg"
    >
      <Table className={`w-[${table.getTotalSize()}px]`}>
        <TableHead
          className={` overflow-x-auto border-b border-line-border-gray `}
        >
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id} className={` h-20 `}>
                {headerGroup.headers.map((header) => (
                  <TableHeader
                    key={header.id}
                    className={`relative border-r  border-line-border-gray px-4`}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`absolute right-0 top-0 h-full w-1 bg-slate-600 cursor-col-resize select-none touch-none ${
                          header.column.getIsResizing()
                            ? `bg-blue-500 opacity-100 translate-x-[${
                                table.getState().columnSizingInfo.deltaOffset
                              }px] `
                            : "opacity-0"
                        }`}
                      />
                    )}
                  </TableHeader>
                ))}
              </TableRow>
            );
          })}
        </TableHead>
        <TableBody>
          <Suspense fallback={<p>Loading Data...</p>}>
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = rows[virtualRow.index] as unknown as Row<Campaign>;
              return (
                <TableRow key={row.id} className={`h-[70px]  relative `}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`w-[${cell.column.getSize()}px]`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </Suspense>
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
