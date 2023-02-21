import React from "react";
import Laptop from "./Laptop";
import Home from "./Home"
import Food from "./Food"
import Invest from "./Invest"

const ItemGoal = ({ icon, title, saldo, total,  }) => {
  const percentage = () => {
    return (saldo / total) * 100
  }
  const currency = (amount) => {
    amount = "Rp" + amount.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,');

    if(amount.indexOf('.') === -1)
        return amount + ',00';

    var decimals = amount.split('.')[1];

    return decimals.length < 2 ? amount + '0' : amount;
  }
  const getIcon = () => {
    switch (icon) {
      case 'laptop':
        return <Laptop/>
        break;
      case 'home':
        return <Home/>
        break;
      case 'food':
        return <Food/>
        break;
      case 'invest':
        return <Invest/>
        break;
      default:
        break;
    }
    
  }
  return (
    <div className="flex items-center w-full gap-[16px]">
      <div>
        { getIcon() }
      </div>
      <div className="flex flex-col gap-[8px] w-full">
        <div className="font-normal text-[#111827] text-xs">{title}</div>
        <div className="font-medium text-[#111827] text-xs">{currency(saldo)}/{currency(total)}</div>
        <div className="relative">
          <div className="absolute text-[#1F2937] w-full rounded-full h-[5px] bg-[#D1D5DB] "></div>
          <div className={`absolute text-[#1F2937] w-[${percentage()}%] rounded-full h-[5px] bg-[#1F2937] `}></div>
        </div>
      </div>
    </div>
  )
}

export default ItemGoal;
