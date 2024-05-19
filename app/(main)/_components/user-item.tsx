"use client";

import {
    Avatar,
    AvatarImage
} from "@/components/ui/avatar";

import{
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuDestructiveItem,
} from "@/components/ui/dropdown-menu";

import { SignOutButton, useUser } from "@clerk/clerk-react";
import { ChevronsLeftRight } from "lucide-react";
const UserItem = () => {
    const {user} = useUser();

    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div role="button" className="flex items-center p-2 rounded-md w-full 
                hover:bg-primary/10">
                    <div className="gap-x-2 flex items-center max-w-[170px]">
                        <Avatar className="w-6 h-6">
                            <AvatarImage src={user?.imageUrl}/>
                        </Avatar>
                        <span className="text-sm truncate font-semibold">
                            {user?.fullName}
                        </span>
                    </div>
                    <ChevronsLeftRight className="rotate-90 ml-2 w-4 h-4 text-muted-foreground"/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
            className="w-80"
            align="start"
            forceMount
            >
                <div className="flex flex-col space-y-4 p-2">
                    <p className="text-xs font-medium text-muted-foreground">
                        {user?.emailAddresses[0]?.emailAddress}
                    </p>
                    <div className="flex items-center gap-x-2 rounded-md bg-secondary p-1">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={user?.imageUrl}/>
                        </Avatar>
                        <div className="space y-1 text-sm font-semibold">
                            {user?.fullName}
                        </div>
                    </div>
                </div>
                <DropdownMenuSeparator/>
                <DropdownMenuItem className="text-muted-foreground">
                    Add new account
                </DropdownMenuItem>
                <DropdownMenuItem className="text-muted-foreground">
                    Settings
                </DropdownMenuItem>
                <DropdownMenuDestructiveItem className="text-muted-foreground ">
                    <SignOutButton>
                        Sign out
                    </SignOutButton>
                </DropdownMenuDestructiveItem>
            </DropdownMenuContent>        
        </DropdownMenu>
     );
}
 
export default UserItem;