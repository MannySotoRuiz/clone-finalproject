"use client";

import Image from "next/image";
import placeholder from "../../public/plumbing.jpg";
import { AiFillStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { useRouter } from 'next/navigation';

export default function PreviewCard() {

    const router = useRouter();

    const handleClick = () => {
        router.push('/localpro/12345');
    }

    return (
        <div onClick={handleClick} className="flex flex-col rounded w-full tablet:w-5/12 laptop:w-72 cursor-pointer">
            {/* image */}
            <div className="w-full h-80 tablet:h-72 laptop:h-64">
                <Image
                    src={placeholder}
                    alt="cover"
                    className="w-full h-full rounded-lg"
                />
            </div>

            {/* card info */}
            <div className="flex flex-col">
                {/* title and rating */}
                <div className="flex justify-center my-1">
                    <p className="font-medium flex-1">Roberto&apos;s Plumbing</p>
                    <div className="flex gap-1 items-center justify-center">
                        <AiFillStar />
                        <p>4.5</p>
                    </div>
                </div>

                {/* location and price*/}
                <div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <p>New York, NY</p>
                        <ImLocation />
                    </div>
                    <div className="flex gap-1 text-sm text-gray-500">
                        <p>Price:</p>
                        <p className="font-medium text-black">$50/hr</p>
                    </div>
                </div>
            </div>
        </div>
    );
}