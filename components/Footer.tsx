import React, { useCallback, useEffect, useMemo, useState } from "react";

const Footer = ({ footerData }: any) => {
  const findTotal = (data: any, propertyName: any) => {
    const total = data.reduce((accumulator: any, currentValue: any) => {
      return accumulator + currentValue[propertyName];
    }, 0);
    return total;
  };

  const budgetVal: any = useMemo(
    () => findTotal(footerData, "budget"),
    [footerData]
  );
  const trimmedBudgetVal: any = budgetVal.toString().split(".")[0];
  const spendVal: any = useMemo(
    () => findTotal(footerData, "spend"),
    [footerData]
  );
  const trimmedSpendVal: any = spendVal.toString().split(".")[0];
  const ctr: any = useMemo(() => findTotal(footerData, "ctr"), [footerData]);
  const trimmedctr: any = ctr.toString().split(".")[0];
  const addToCart: any = useMemo(
    () => findTotal(footerData, "addtoCart"),
    [footerData]
  );
  const addToCartVal: any = useMemo(
    () => findTotal(footerData, "addtoCartValue"),
    [footerData]
  );
  const trimmedcaddToCartVal: any = addToCartVal.toString().split(".")[0];
  const impressionsVal: any = useMemo(
    () => findTotal(footerData, "impressions"),
    [footerData]
  );
  const reachVal: any = useMemo(
    () => findTotal(footerData, "reach"),
    [footerData]
  );

  return (
    <div className="flex flex-row items-center justify-end border-2 border-[#e7e7e8] w-[95%] ">
      <span className="border-r border-[#e7e7e8] pr-16 ml-auto h-[85px] flex items-center justify-center">
        {footerData.length} Kampanyadan sonuçlar
      </span>
      <span className="border-r border-[#e7e7e8] flex flex-col items-center justify-center pl-8 h-[85px]  pr-10">
        <span>{trimmedBudgetVal}$</span>
        <span className="text-[#8C8E90] font-normal text-[14px]">Bütçe</span>
      </span>
      <span className="border-r border-[#e7e7e8] flex flex-col items-center justify-center pl-8 h-[85px] pr-10">
        <span>{trimmedSpendVal}$</span>
        <span className="text-[#8C8E90] font-normal text-[14px]">Harcama</span>
      </span>
      <span className="border-r border-[#e7e7e8] pl-8 h-[85px] flex items-center justify-around pr-10">
        {trimmedctr}
      </span>
      <span className="border-r border-[#e7e7e8] pl-8 h-[85px] flex items-center justify-around pr-10">
        {addToCart}
      </span>
      <span className="border-r border-[#e7e7e8] pl-8 h-[85px] flex items-center justify-around pr-10">
        {trimmedcaddToCartVal}
      </span>
      <span className="border-r border-[#e7e7e8] pl-8 h-[85px] flex items-center justify-around pr-10">
        {impressionsVal}
      </span>
      <span className="border-r border-[#e7e7e8] pl-8 h-[85px] flex items-center justify-around pr-10">
        {reachVal}
      </span>
    </div>
  );
};

export default Footer;
