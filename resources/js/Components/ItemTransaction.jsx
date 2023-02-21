import React from "react";
import Minus from "./Minus";
import Plus from "./Plus";

const ItemTransaction = ({ title, desc, amount }) => {
  const getIcon = () => {
    if (amount < 0) {
      return <Minus/>
    }
    return <Plus/>
  }

  const currency = () => {
    amount = "Rp" + Math.abs(amount).toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,');

    if(amount.indexOf('.') === -1)
        return amount + ',00';

    var decimals = amount.split('.')[1];

    return decimals.length < 2 ? amount + '0' : amount;
  }
    return (
        <div className="flex content-start justify-between">
          <div className="flex gap-[8px]">
            { getIcon() }
            <div className="block">
            <p className="text-xs font-medium">{ title }</p>
            <p className="text-[8px] font-light">{ desc }</p>
          </div>
          </div>
          <div className="text-base font-medium">
          {currency()}
          </div>
        </div>
    );
};

export default ItemTransaction;
