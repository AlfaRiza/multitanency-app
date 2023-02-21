import Card from "@/Components/Card";
import CardBank from "@/Components/CardBank";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Sidebar from "@/Layouts/Sidebar";
import { Head } from "@inertiajs/react";
import ItemGoal from "@/Components/ItemGoal";
import Chevron from "@/Components/Chevron";
import GoalCard from "@/Components/GoalCard";
import TransactionCard from "@/Components/TransactionCard";
import ItemFlow from "@/Components/ItemFlow";

export default function Dashboard(props) {
    const data1 = [
        {
            icon: "laptop",
            title: "Buy Macbook Pro M2",
            saldo: "7000000",
            total: "10000000",
        },
        {
            icon: "home",
            title: "House Down Payment",
            saldo: "7000000",
            total: "10000000",
        },
    ];

    const data2 = [
        {
            icon: "food",
            title: "Food and Drinks",
            saldo: "7000000",
            total: "10000000",
        },
        {
            icon: "invest",
            title: "Investment",
            saldo: "7000000",
            total: "10000000",
        },
    ];
    const recentTransaction = [
        {
            date: "June 5",
            item: [
                {
                    title: "Sent to Vaa",
                    desc: "E-Money Top Up",
                    amount: 10000000,
                },
                {
                    title: "Sent to Vaa",
                    desc: "E-Money Top Up",
                    amount: -10000000,
                },
            ],
        },
        {
            date: "June 15",
            item: [
                {
                    title: "Sent to Vaa",
                    desc: "E-Money Top Up",
                    amount: 10000000,
                },
                {
                    title: "Sent to Vaa",
                    desc: "E-Money Top Up",
                    amount: -10000000,
                },
            ],
        },
    ];
    return (
        <>
            <Sidebar auth={props.auth} errors={props.errors}>
                <div className="flex justify-between gap-[24px]">
                    <div className="basis-2/3 flex flex-col gap-[24px]">
                        <div>
                            <Card background="bg-[#F9FAFB]">
                                <div className="flex justify-between mb-[24px]">
                                    <h3 className=" font-medium text-base">
                                        Cash Flow
                                    </h3>
                                    <div className="flex gap-[8px]">
                                        <div className="rounded-[5px] flex items-center justify-center p-[8px] border w-[70px] bg-[#F9FAFB] text-[#9CA3AF] text-xs font-medium">
                                            <span>Daily</span>
                                        </div>
                                        <div className="rounded-[5px] flex items-center justify-center py-[8px] border w-[70px] bg-[#0088D4] text-white text-xs font-medium">
                                            Weekly
                                        </div>
                                        <div className="rounded-[5px] flex items-center justify-center py-[8px] border w-[70px] bg-[#F9FAFB] text-[#9CA3AF] text-xs font-medium">
                                            Monthly
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-[16px]">
                                    <Card background="bg-[#0068A3]">
                                        <div className="flex flex-col">
                                            <ItemFlow
                                                title="Total Income"
                                                amount={178242100}
                                                gross={20}
                                            />
                                        </div>
                                    </Card>
                                    <Card background="bg-[#EF4444]">
                                        <div className="flex flex-col">
                                            <ItemFlow
                                                title="Total Expense"
                                                amount={112242100}
                                                gross={-30}
                                            />
                                        </div>
                                    </Card>
                                    <Card background="bg-[#F1FAFF]">
                                        <div className="flex flex-col">
                                            <ItemFlow
                                                title="Balance"
                                                amount={456723400}
                                                gross={50}
                                            />
                                        </div>
                                    </Card>
                                </div>
                            </Card>
                        </div>
                        <div className="flex gap-[24px]">
                            <Card background="bg-[#F3F4F6]">
                                <GoalCard item={data1} title="My Goals" />
                            </Card>
                            <Card background="bg-[#F3F4F6]">
                                <GoalCard item={data2} title="Budgets" />
                            </Card>
                        </div>
                        <div className="flex gap-[24px]">
                            <Card background="bg-[#F3F4F6]">
                                <TransactionCard
                                    transaction={recentTransaction}
                                    title="Recent Transactions"
                                />
                            </Card>
                            <Card background="bg-[#F3F4F6]">
                                <TransactionCard
                                    transaction={recentTransaction}
                                    title="Upcoming Transactions"
                                />
                            </Card>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <Card background="bg-[#F9FAFB]">
                            <div className="flex justify-between items-center mb-[50px]">
                                <span className="text-[#1F2937] font-medium text-base">Main Account</span>
                                <button className="bg-[#0088D4] p-[8px] rounded-[8px] text-white">
                                    <span className="flex gap-[10px] items-center text-[#F9FAFB] font-bold">
                                        {" "}
                                        <i class="fa-solid fa-circle-plus"></i>{" "}
                                        Add Account
                                    </span>
                                </button>
                            </div>
                            <div
                                background="bg-[#FFFFFF]"
                                className="flex flex-col justify-center items-center"
                            >
                                <CardBank></CardBank>
                                <div className="flex justify-center gap-[30px] w-full font-medium text-xs">
                                    <div>Luthfi Dzul</div>
                                    <div>0018 8982 9899</div>
                                </div>
                            </div>
                            <div className="mt-[40px]">
                                <span className="text-base text-[#1F2937] font-medium">Quick Records</span>
                                <div className="flex w-full justify-between mt-[32px] text-xs font-medium">
                                    <div className="border border-[#D1D5DB] w-full py-[10px] flex justify-center items-center">
                                        Income
                                    </div>
                                    <div className="bg-[#E5E7EB] w-full py-[10px] flex justify-center items-center">
                                        Expense
                                    </div>
                                    <div className="border border-[#D1D5DB] w-full py-[10px] flex justify-center items-center">
                                        Transfer
                                    </div>
                                </div>
                                <div className="mt-[24px] flex gap-[17px] text-xs font-medium">
                                    <div className="w-full">
                                        <span>Category</span>
                                        <div className="bg-[#E5E7EB] py-[12.5px] flex justify-start px-[10px] gap-[4px] items-center rounded-[8px]">
                                            <i class="fa-solid fa-stroopwafel"></i>
                                            Food & Drinks
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span>Account</span>
                                        <div className="bg-[#E5E7EB] py-[12.5px] flex justify-between px-[10px] items-center rounded-[8px]">
                                            <div className="flex gap-[4px]">
                                            <i class="fa-solid fa-stroopwafel"></i>
                                            Cash
                                            </div>
                                            <Chevron/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[24px] flex gap-[17px] text-xs font-medium">
                                    <div className="w-full">
                                        <span>Category</span>
                                        <div className="bg-[#E5E7EB] py-[12.5px] flex justify-start px-[10px] gap-[4px] items-center rounded-[8px]">
                                            Rp100.000.00
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span>Account</span>
                                        <div className="bg-[#E5E7EB] py-[12.5px] flex justify-between px-[10px] items-center rounded-[8px]">
                                            <div className="flex gap-[4px]">
                                            IDR
                                            </div>
                                            <Chevron/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[24px] flex gap-[17px] text-xs font-medium">
                                    <div className="w-full">
                                        <span>Date</span>
                                        <div className="bg-[#E5E7EB] py-[12.5px] flex justify-center items-center rounded-[8px]">
                                            Aug 10, 2022
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <span>Time</span>
                                        <div className="bg-[#E5E7EB] py-[12.5px] flex justify-center items-center rounded-[8px]">
                                            10:30 AM
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-[36px]">
                                    <button className="bg-[#0068A3] w-full rounded-[8px] py-[12px] text-white font-bold text-xs">
                                        Add Record
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Sidebar>
        </>
    );
}
