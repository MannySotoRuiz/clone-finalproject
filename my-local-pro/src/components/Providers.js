"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextUIProvider>
                <SessionProvider>
                    {/* <NextUIProvider> */}
                        {children}
                    {/* </NextUIProvider> */}
                </SessionProvider>
            </NextUIProvider>
        </ThemeProvider>
    );
}

export default Providers