import React from "react";
import Arrow from '@/Components/Arrow'

const ItemFlow = ({ title, amount, gross }) => {

  const isProfit = () => {
    return gross > 0
  }

  const colorBalance = () => {
    if (title === 'Balance') {
      return 'text-[#15803D]'
    } else if (gross > 0) {
      return 'text-[#DCFCE7]'
    }
    return 'text-[#FECACA]'
  }

  const isBalance = () => {
    return title === 'Balance'
  }

  const currency = () => {
    amount = "Rp" + Math.abs(amount).toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,');

    if(amount.indexOf('.') === -1)
        return amount + ',00';

    var decimals = amount.split('.')[1];

    return decimals.length < 2 ? amount + '0' : amount;
  }

    return (
        <>
            <span className={`text-[${isBalance() ? '#00466C' : '#F9FAFB'}]`}>{ title }</span>
            <span className={`mt-[37px] font-medium text-2xl font-normal text-sm text-[${isBalance() ? '#00466C' : '#F9FAFB'}]`}>{ currency() }</span>
            <span className={`flex items-center gap-[7px] font-normal text-xs ${colorBalance()}`}>{ gross }% <span className={!isProfit() && "rotate-180"}><Arrow fill={`${colorBalance()}`} /></span> </span>
        </>
    );
};

export default ItemFlow;
