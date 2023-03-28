"use client"

import { AiFillFormatPainter, AiFillTool } from "react-icons/ai";
import { MdHandyman, MdPlumbing, MdElectricalServices } from "react-icons/md";

export default function ServicesDisplay({ title }) {

    return (
        <div className="flex flex-col justify-center items-center">
            {title === "Painters" ? (
                <AiFillFormatPainter className="text-3xl" />
            ) : (title === "Handyman") ? (
                <MdHandyman className="text-3xl" />
            ) : (title === "Plumber") ? (
                <MdPlumbing className="text-3xl" />
            ) : (
                <MdElectricalServices className="text-3xl" />
            )}
            <p>{title}</p>
        </div>
    );
}