import React from "react";
import ItemGoal from '@/Components/ItemGoal'
import Chevron from '@/Components/Chevron'

const GoalCard = ({ title, item }) => {
    return (
        <>
            <div className="mb-[32px] text-[#1F2937] font-medium text-base">{ title }</div>
            <div className="flex flex-col gap-[32px]">
            {
              item.map(el => {
                return (
                  <ItemGoal
                    icon={el.icon}
                    title={el.title}
                    saldo={el.saldo}
                    total={el.total}
                ></ItemGoal>
                )
              })
            }
                
            </div>
            <div className="flex justify-between items-center mt-[27px] text-xs text-[#111827] cursor-pointer">
                <span>See more</span>
                <Chevron />
            </div>
        </>
    );
};

export default GoalCard;
