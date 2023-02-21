import { Link } from "@inertiajs/react";
import React from "react";
// import { useRouter } from 'next/router'

const ItemMenu = ({ title, icon, url }) => {
    // const router = useRouter()
    return (
        <Link href={url}>
            <div
                className={`bg-[${route().current(url) ? '#0088D4' : '#FFFFF'}] w-full h-[85px] flex justify-start items-center gap-4 px-[42px] text-[${route().current(url) ? '#F9FAFB' : '#6B7280' }]`}
                key={title}
            >
                <i className={icon}></i>
                <i class="fa-regular fa-file-chart-column"></i>
                {title}
            </div>
        </Link>
    );
};

export default ItemMenu;
