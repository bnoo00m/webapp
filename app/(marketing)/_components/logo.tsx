import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400","600"]
});

export const Logo = () =>{
    return (
        <div className="hidden md:flex">
            <Image
                src="/fav.svg"
                height = "100"
                width="100"
                alt="Logo"  
                className="dark:hidden"         
            />
            <Image
                src="/favblack.svg"
                height = "100"
                width="100"
                alt="Logo"  
                className="hidden dark:block"         
            />
        </div>
    )
}