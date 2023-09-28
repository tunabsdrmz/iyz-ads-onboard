import { ColumnDef } from "@tanstack/react-table";
import { Campaign } from "../../interfaces/types";
import { Checkbox } from "@/components/ui/checkbox";
import { MinusCheckbox } from "@/components/ui/minusCheckbox";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import TableHeaderItem from "@/components/customtable-ignore-it/tableHeaderItem";

export const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: "status",
    header: (props: any) => (
      <span>
        <MinusCheckbox checked />
      </span>
    ),

    enableResizing: false,
    cell: (props: any) => (
      <Checkbox
        checked={props.row.original.status}
        onCheckedChange={(value) => {
          const id = props.row.original.id;
          const status = !!value;
        }}
      />
    ),
  },
  {
    accessorKey: "id",
    header: () => "Yayın",
    enableResizing: false,
    cell: (props: any) => (
      <span>
        <Switch />
      </span>
    ),
  },
  {
    accessorKey: "name",
    header: (props: any) => (
      <span className=" relative inline-flex flex-row items-center justify-between">
        Kampanya{" "}
        <Image src="/icons/resizeIcon.png" alt="icon" width={16} height={16} />
      </span>
    ),
    size: 250,

    enableResizing: true,

    cell: (props: any) => (
      <span className="overflow-x-hidden">{props.getValue()}</span>
    ),
    footer: (props: any) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "budget",
    header: ({ column }) => (
      <TableHeaderItem icon={true} label={"Bütçe"} column={column} />
    ),
    enableResizing: false,
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "spend",
    header: ({ column }) => (
      <TableHeaderItem icon={true} label={"Harcama"} column={column} />
    ),
    enableResizing: false,
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "ctr",
    header: ({ column }) => (
      <TableHeaderItem icon={true} label={"Purchase"} column={column} />
    ),
    enableResizing: false,
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "addtoCart",
    header: ({ column }) => (
      <TableHeaderItem icon={true} label={"CPA"} column={column} />
    ),
    enableResizing: false,
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "addtoCartValue",
    header: ({ column }) => (
      <TableHeaderItem icon={true} label={"Conversion"} column={column} />
    ),
    enableResizing: false,
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "impressions",
    header: ({ column }) => (
      <TableHeaderItem icon={true} label={"ROAS"} column={column} />
    ),
    enableResizing: false,
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "reach",
    header: ({ column }) => (
      <TableHeaderItem icon={true} label={"Basket"} column={column} />
    ),
    enableResizing: false,
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
];
