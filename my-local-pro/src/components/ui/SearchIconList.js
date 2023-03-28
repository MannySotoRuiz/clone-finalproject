"use client"
import React from "react";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import 'react-horizontal-scrolling-menu/dist/styles.css';
import "../../../node_modules/react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow } from "./Arrows";
import useDrag from "@/hooks/useDrag";
import { allIcons } from "@/lib/iconList";
import SearchIcon from "./SearchIcon";


function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  
    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }
  
    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
}

export default function SearchIconList({ activeFilter }) {
    const { dragStart, dragStop, dragMove, dragging } = useDrag();
    const handleDrag = ({ scrollContainer }) => (ev) => dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
        }
    });

    return (
        <div className="px-5 py-7">
            <div onMouseLeave={dragStop}>
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow}
                    onWheel={onWheel}
                    onMouseDown={() => dragStart}
                    onMouseUp={() => dragStop}
                    onMouseMove={handleDrag}
                    scrollContainerClassName="gap-6"
                >
                    {allIcons.map((service, idx) => (
                        <SearchIcon key={idx} service={service} activeFilter={activeFilter} />
                    ))}
                </ScrollMenu>
            </div>
        </div>
    );
}
