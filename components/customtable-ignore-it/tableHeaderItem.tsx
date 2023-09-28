"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  label?: string | any;
  icon: boolean;
  column?: any;
};
const TableHeaderItem = ({ label, icon, column }: Props) => {
  const [ascending, setAscending] = useState(true);
  const handleSort = () => {
    setAscending((prev) => !prev);
    //column.toggleSorting(column.getIsSorted() === "asc");
  };
  return (
    <span
      onClick={handleSort}
      className="cursor-pointer gap-3 flex-shrink flex flex-row items-center justify-between"
    >
      {label}{" "}
      {icon ? (
        <Image
          className={!ascending ? "transform rotate-180" : ""}
          src={"/icons/arrowDownIcon.png"}
          alt="icon"
          width={12}
          height={6.86}
        />
      ) : null}
    </span>
  );
};
export default TableHeaderItem;
