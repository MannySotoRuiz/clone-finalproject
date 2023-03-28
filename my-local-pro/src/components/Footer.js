// "use client"
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center border-t border-t-gray-300">
            
            <div className="h-full flex flex-col tablet:flex-row gap-28 py-7">
                {/* App info */}
                <div className="h-full gap-3 flex flex-col">
                    <p className="font-medium">MyLocalPro</p>
                    <p className="text-sm">App slogan</p>
                    <p className="text-sm">About</p>

                    {/* socials */}
                    <div className="flex gap-1">
                        <FcGoogle className="text-xl"/>
                        <AiFillTwitterCircle className="text-xl text-[#1DA1F2]"/>
                        <AiFillLinkedin className="text-xl text-[#0072b1]"/>
                    </div>
                </div>

                {/* Customers */}
                <div className="h-full gap-3 flex flex-col">
                    <p className="font-medium">Customers</p>
                    <p className="text-sm">Sign up</p>
                    <p className="text-sm">Services near me</p>
                </div>

                {/* Service Providers */}
                <div className="h-full gap-3 flex flex-col">
                    <p className="font-medium">Service Providers</p>
                    <p className="text-sm">Sign up as a provider</p>
                    <p className="text-sm">Manage my services</p>
                </div>

                {/* Suport */}
                <div className="h-full gap-3 flex flex-col">
                    <p className="font-medium">Support</p>
                    <p className="text-sm">Submit feedback</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="pb-3">
                <p className="text-sm">Copyright 2023, MyLocalPro. All Rights Reserved</p>
            </div>

        </footer>
    );
}