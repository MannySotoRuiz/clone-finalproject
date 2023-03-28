"use client";

import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';
import { buttonVariants } from './ui/Button';
import { Button } from '@/ui/Button';
import { Modal, Text } from '@nextui-org/react';
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn } from 'next-auth/react';
import { toast } from '@/ui/Toast';
import LogOutBttn from '@/ui/LogOutBttn';

export default function Header() {

    const { data: session, status } = useSession();
    console.log(session?.user);

    const [isLoading, setIsLoading] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const handleOpenModal = () => setVisibleModal(true);
    const hanldeCloseModal = () => setVisibleModal(false);

    const handleGoogleAuth = async () => {
        try {
            setIsLoading(true);
            await signIn("google");
        } catch (error) {
            toast({
                title: 'Error signing in',
                message:'Please try again later',
                type: 'error',
            });
        }
    }

    return (
        <>
            <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
                <div className='px-5 tablet:px-10 w-full flex justify-between items-center'>
                    <Link href="/" className={buttonVariants({ variant: "link" })}>
                        MyLocalPro
                    </Link>

                    <div className='tablet:hidden px-5'>
                        <Link className={buttonVariants({ variant: "default" })} href="/login">Login</Link>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden tablet:flex flex-row justify-evenly items-center h-full px-3 gap-4">
                        <ThemeToggle />
                        
                        <Link
                            className={buttonVariants({ variant: "default" })}
                            href="/login"
                        >
                            Join as a pro
                        </Link>

                        {session ? (
                            <LogOutBttn />
                        ) : (
                            <Button onClick={handleOpenModal} className={buttonVariants({ variant: "link" })}>
                                Login
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <Modal 
                closeButton 
                aria-labelledby='modal-title' 
                open={visibleModal} 
                onClose={hanldeCloseModal}
                className="cursor-default"
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to 
                        <Text b size={18}> MyLocalPro</Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <div onClick={handleGoogleAuth} className="flex items-center justify-center py-2 cursor-pointer border border-black rounded">
                        <p className="text-lg font-medium">Continue With Google</p>
                        <FcGoogle className="absolute left-8 top-1/5 text-3xl" />
                    </div>
                    {isLoading && <p className='text-lg font-medium'>Loading...</p>}
                </Modal.Body>
            </Modal>
        </>
    );
}