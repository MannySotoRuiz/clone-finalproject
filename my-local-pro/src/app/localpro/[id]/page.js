"use client";

import Image from "next/image";
import placeholder from "../../../../public/plumbing.jpg";
import { AiFillStar, AiOutlineMessage } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function BusinessPage({ params }) {

    const ifMobileScreen = useMediaQuery('(max-width:640px)');

    const [showMoreAbt, setShowMoreAbt] = useState(false);
    // const [showMoreReview, setShowMoreReview] = useState(false);

    const aboutMeTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    useEffect(() => {
        function checkLimits() {
            if (aboutMeTxt.length > 10) {
                setShowMoreAbt(true);
            }
        }
        checkLimits();
    },[aboutMeTxt]);

    return (
        <>
            {ifMobileScreen ? (
                <div className="min-h-min w-full mt-20 bg-white">
                    {/* mobile look */}
                    <div className="flex tablet:hidden flex-col">
                        
                        {/* sliding images */}
                        <div className="relative w-full h-auto">
                            <Image src={placeholder} alt="pic" className="w-full" />
                            <div className="absolute bottom-3 right-3 text-white px-4 py-1 rounded bg-black/60 text-lg">
                                1/5
                            </div>
                        </div>
                        {/* end of sliding images */}
        
                        {/* body */}
                        <div className="flex flex-col gap-2 p-4 mb-5">
                            {/* Title and bookmark */}
                            <div className="flex items-center text-3xl font-medium">Name of business</div>
        
                            {/* User's Name and Profil Pic */}
                            <div className="flex items-center space-x-2">
                                <div className="border border-red-500 p-6 inline-block" style={{ borderRadius: "50%" }}></div>
                                <div>
                                    <p className="font-medium text-lg">Manny Soto Ruiz</p>
                                    <p className="text-base text-slate-500">Owner</p>
                                </div>
                            </div>
        
                            {/* location and text icon */}
                            <div className="flex items-center">
                                <div className="flex items-center flex-1">
                                    <ImLocation fontSize={20}/>
                                    <p className="text-lg text-slate-500 font-medium">New York, NY</p>
                                </div>
                                <div className="bg-white p-3 border border-slate-300 rounded-lg">
                                    <AiOutlineMessage fontSize={25} />
                                </div>
                            </div>
        
                            {/* Price, Rating, Jobs Completed */}
                            <div className="flex w-full space-x-1">
                                <div className="flex flex-col items-center justify-center w-1/4 rounded border border-slate-300 py-2 px-1">
                                    <p className="text-slate-500 font-medium">Rating</p>
                                    <div className="flex items-center space-x-1">
                                        <AiFillStar size={28} color={"#FED049"}/>
                                        <p className="font-bold text-lg">5</p>
                                        <p className="text-slate-500 font-medium">(20)</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center w-1/2 rounded border border-slate-300 py-2 px-1">
                                    <p className="text-slate-500 font-medium">Jobs Completed</p>
                                    <p className="font-bold text-lg">2</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-1/4 rounded border border-slate-300 py-2 px-1">
                                    <p className="text-slate-500 font-medium">Price</p>
                                    <p className="font-bold text-lg">Contact</p>
                                </div>
                            </div>
        
                            {/* horizontal line */}
                            <div className="border-b border-slate-300 my-6 mx-2"></div>
        
                            {/* About Me */}
                            <p className="font-bold text-xl">About Me</p>
                            <p className="text-slate-600 text-lg">{aboutMeTxt}</p>
                            {showMoreAbt && <p className="font-bold mt-3 underline">Show more</p>}
        
                            {/* horizontal line */}
                            <div className="border-b border-slate-300 my-6 mx-2"></div>
        
                            {/* Reviews */}
                            <div className="flex items-center space-x-1">
                                <AiFillStar size={28} color={"#FED049"}/>
                                <p className="font-bold text-xl">5</p>
                                <p className="font-bold text-xl"> · </p>
                                <p className="font-bold text-xl">20 Reviews</p>
                            </div>
        
                            {/* Review Cards */}
                            <div className="border border-slate-300 rounded-xl p-3 ml-3" style={{ height: "300px", width: "300px" }}>
                                
                                {/* header */}
                                <div className="flex items-center space-x-2">
                                    <div className="border border-red-500 p-5" style={{ borderRadius: "50%" }}></div>
        
                                    {/* name, rating, and date posted */}
                                    <div className="flex-1">
                                        {/* name and rating */}
                                        <div className="flex items-center w-full">
                                            <div className="flex items-center space-x-1">
                                                <p className="font-semibold flex-1">Manny</p>
                                                <AiFillStar size={20} />
                                                <p>5</p>
                                            </div>
                                        </div>
        
                                        {/* date posted */}
                                        <p className="text-slate-500">Mar 27, 2023</p>
                                    </div>
                                </div>
        
                                {/* body/review message */}
                                <div className="my-4">
                                    <p >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
        
                            </div>
        
                            {/* display add review & all reviews button */}
                            <div className="flex space-x-1">
                                <div className="flex border border-slate-300 rounded w-1/2 py-4 mt-7 items-center justify-center">
                                    <p style={{ fontSize: 16, fontWeight: "500" }}>Add a review</p>
                                </div>
                                <div className="flex border border-slate-300 rounded w-1/2 py-4 mt-7 items-center justify-center">
                                    <p style={{ fontSize: 16, fontWeight: "500" }}>Show all 5 reviews</p>
                                </div>
                            </div>
        
                            {/* horizontal line */}
                            <div className="border-b border-slate-300 mt-6 mb-2 mx-2"></div>
        
                        </div>
                    </div>            
                </div>
            ) : (
                // tablet, laptop, desktop look
                <div className="hidden tablet:flex min-h-min w-10/12 laptop:w-9/12 border-2 flex-col mt-20 pb-20 bg-white m-auto">
                    
                    {/* name */}
                    <h1 className="text-3xl font-semibold">This is a business name</h1>
                    
                    {/* # of reviews, locaiton, share btn */}
                    <div className="flex items-center space-x-2">
                        <ImLocation fontSize={13}/>
                        <p className="text-base underline font-nornaml">New York, NY</p>
                        <p className="font-normal" style={{ fontSize: "20px" }}> · </p>
                        <p className="text-base underline font-normal flex-1">2 Reviews</p>
                        <FiShare fontSize={17}/>
                        <p className="text-base font-normal underline">Share</p>
                    </div>

                    {/* images */}
                    <div className="w-full h-[350px] laptop:h-[400px] flex my-5">
                        {/* big picture */}
                        <div className="w-1/2 h-full">
                            <Image src={placeholder} alt="pic1" width="300" height="300" className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"/>
                        </div>
                        {/* 4 smaller pictures */}
                        <div className="w-1/2 h-full grid grid-cols-2 gap-2 pl-2">
                            <div className="w-full h-full">
                                <Image src={placeholder} alt="pic1" width="200" height="200" className="w-full h-full object-cover rounded-br-lg"/>
                            </div>
                            <div className="w-full h-full rounded-tr-lg">
                                <Image src={placeholder} alt="pic1" width="200" height="200" className="w-full h-full object-cover rounded-br-lg"/>
                            </div>
                            <div className="w-full h-full">
                                <Image src={placeholder} alt="pic1" width="200" height="200" className="w-full h-full object-cover rounded-br-lg"/>
                            </div>
                            <div className="w-full h-full rounded-br-lg">
                                <Image src={placeholder} alt="pic1" width="200" height="200" className="w-full h-full object-cover rounded-br-lg"/>
                            </div>
                        </div>
                    </div>

                    
                    <div className="w-full h-96 border border-y-black flex">
                        <div className="flex flex-col border border-blue-500 w-2/3">
                            <div className="flex items-center space-x-2">
                                <div className="p-7 border border-red-500" style={{ borderRadius: "50%" }}></div>
                                <div>
                                    <p className="text-xl font-medium">Manny Soto Ruiz</p>
                                    <p className="text-slate-500 font-medium">Owner</p>
                                </div>
                            </div>

                            <div className="border-b border-slate-300 my-6 mx-2"></div>

                            <div className="w-1/3">
                                <p className="text-xl font-bold">About Me</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}