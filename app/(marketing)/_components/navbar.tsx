"use client";

import { useScrollTop } from "@/hooks/scroll";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/modetoggle";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    return(
        <div className={cn(
            "z-50 bg-[#F9F6F2] dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-5",
            scrolled && "border-b shadow-sm"
        )}>
            <div className="px-4">
                <Logo />
            </div>
            <div className="md:ml-auto md:justify-end justify-between w-full
            flex items-center gap-x-4">
                {isLoading && (
                    <p>Loading...</p>
                )}
                {!isAuthenticated && !isLoading &&(
                    <>
                        <SignInButton mode="modal">
                            <Button variant="default" className="bg-green-600 dark:bg-white">
                                Register
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button variant="outline" className="border-black dark:border-white">
                                Log in
                            </Button>
                        </SignInButton>
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}