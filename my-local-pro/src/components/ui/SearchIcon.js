"use client"

import Image from "next/image";

export default function SearchIcon({ service, activeFilter }) {
    const getTitle = service.serviceType.split(" ");
    
    for (let i = 0; i < getTitle.length; i++) {
        getTitle[i] = getTitle[i][0].toUpperCase() + getTitle[i].substring(1);
    }

    const captialTitle = getTitle.join(" ");

    return (
        <div className={`flex flex-col gap-1 items-center justify-center cursor-pointer overflow-hidden whitespace-nowrap ${activeFilter === service.serviceType ? "border-b-2 border-b-black pb-2" : ""}`}>
            <Image
                alt="icon"
                src={service.icon}
                width="25"
                height="25" 
            />
            <p className="text-xs">{captialTitle}</p>
        </div>
    );
}
