"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "./Button";
import { toast } from "./Toast";

const LogOutBttn = () => {
    const [isLoading, setIsLoading] = useState(false);

    const logOutUser = async () => {
        try {
            setIsLoading(true);
            await signOut();
        } catch (error) {
            toast({
                title: 'Error signing out',
                message: 'Please try again later.',
                type: 'error',
            });
        }
    };

    return (
        <Button onClick={logOutUser} isLoading={isLoading}>
            Sign out
        </Button>
    );
}

export default LogOutBttn;