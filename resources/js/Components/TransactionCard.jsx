import React from "react";
import Chevron from "./Chevron";
import ItemTransaction from "./ItemTransaction";

const TransactionCard = ({ title, transaction}) => {
    return (
        <>
            <h3 className="mb-[24px]">{ title }</h3>
            <div className="flex flex-col gap-[16px]">
            {
              transaction.map(el => {
                return (
                  <div className="flex flex-col gap-[16px]">
                    <p className="font-medium text-xs">{ el.date } </p>
                    {
                      el.item.map(tran => {
                        return (
                          <ItemTransaction title={tran.title} desc={tran.desc} amount={tran.amount} />
                        )
                      })
                    }
                </div>
                )
              })
            }
            </div>
            <div className="flex justify-between items-center mt-[27px] text-xs font-normal cursor-pointer">
                <span>See more</span>
                <Chevron />
            </div>
        </>
    );
};

export default TransactionCard;
