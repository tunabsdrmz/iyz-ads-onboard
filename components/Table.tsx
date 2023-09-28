"use client";
import { useState } from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "./custom-ag-grid-styles.css";
import { Checkbox } from "./ui/checkbox";
import { MinusCheckbox } from "./ui/minusCheckbox";
import { Switch } from "./ui/switch";
import { useDispatch } from "react-redux";
import { updateCampaignStatus } from "@/redux/slices/campaignSlice";
import { updateAdSetStatus } from "@/redux/slices/adSetSlice";
import { updateAdStatus } from "@/redux/slices/adSlice";

const Table = ({ table, data }: any) => {
  const dispatch = useDispatch();

  const changeStatus = (id: number) => {
    if (table === "campaignTable") dispatch(updateCampaignStatus({ id }));
    if (table === "adsetTable") dispatch(updateAdSetStatus({ id }));
    if (table === "adTable") dispatch(updateAdStatus({ id }));
  };

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "status",
      flex: 1,
      lockPosition: true,
      headerComponent: (p: any) => <MinusCheckbox checked />,
      cellRenderer: (p: any) => (
        <Checkbox
          checked={p.value}
          onClick={(e: any) => changeStatus(p.data.id)}
        />
      ),
      cellStyle: { borderRight: "1px solid #e7e7e8", paddingTop: "3px" },
    },
    {
      field: "id",
      width: 80,

      lockPosition: true,
      headerName: "Yayın",
      cellRenderer: (p: any) => <Switch />,
      cellStyle: { borderRight: "1px solid #e7e7e8", paddingTop: "0px" },
    },
    {
      field: "name",
      resizable: true,
      flex: 4,
      minWidth: 80,
      maxWidth: 350,
      lockPosition: true,
      headerName: "Kampanya",
      cellStyle: { borderRight: "1px solid #e7e7e8", paddingTop: "0px" },
    },
    {
      field: "budget",
      flex: 2,
      sortable: true,

      lockPosition: true,
      headerName: "Bütçe",
      cellStyle: { borderRight: "1px solid #e7e7e8", paddingTop: "0px" },
      cellRendererParams: {
        innerRenderer: "customFooter",
      },
    },
    {
      field: "spend",
      flex: 2,
      sortable: true,

      lockPosition: true,
      headerName: "Harcama",
      cellStyle: { borderRight: "1px solid #e7e7e8", paddingTop: "0px" },
      cellRendererParams: {
        innerRenderer: "customFooter",
      },
    },
    {
      field: "ctr",
      flex: 2,
      sortable: true,

      lockPosition: true,
      headerName: "Purchase",
      cellStyle: { borderRight: "1px solid #e7e7e8", paddingTop: "0px" },
      cellRendererParams: {
        innerRenderer: "customFooter",
      },
    },
    {
      field: "addtoCart",
      flex: 2,
      sortable: true,

      lockPosition: true,
      headerName: "CPA",
      cellStyle: { borderRight: "1px solid #e7e7e8", paddingTop: "0px" },
      cellRendererParams: {
        innerRenderer: "customFooter",
      },
    },
    {
      field: "addtoCartValue",
      flex: 2,
      sortable: true,

      lockPosition: true,
      headerName: "Conversion",
      cellStyle: { borderRight: "1px solid #e7e7e8", paddingTop: "0px" },
      cellRendererParams: {
        innerRenderer: "customFooter",
      },
    },
    {
      field: "impressions",
      flex: 2,
      sortable: true,

      lockPosition: true,
      headerName: "ROAS",
      cellStyle: { borderRight: "1px solid #e7e7e8", paddingTop: "0px" },
      cellRendererParams: {
        innerRenderer: "customFooter",
      },
    },
    {
      field: "reach",
      flex: 2,
      sortable: true,

      lockPosition: true,
      headerName: "Basket",
      cellStyle: { borderRight: "1px solid #e7e7e8", paddingTop: "0px" },
      cellRendererParams: {
        innerRenderer: "customFooter",
      },
    },
  ]);
  const rowClass = "odd-row-bg";
  const getRowClass = (params: any) => {
    if (params.node.rowIndex % 2 === 0) {
      return "even-row-bg";
    }
  };

  return (
    <div
      className="ag-theme-alpine custom-ag-grid-styles "
      style={{ height: 450, width: "95%", paddingTop: 16 }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={data}
        rowClass={rowClass}
        getRowClass={getRowClass}
      />
    </div>
  );
};

export default Table;
