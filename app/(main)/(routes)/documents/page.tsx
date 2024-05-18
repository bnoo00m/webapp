"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
const DocumentsPage = () => {
    const {user} = useUser();
    return ( 
        <div className="h-full flex flex-col items-center justify-center
            space-y-4">
            <Image
                src="/empty.png"
                alt="empty"
                width="300"
                height="300"
            />
            <h2 className="text-lg font-bold">Shoot... {user?.firstName }, it's empty here.</h2>
            <p className="text-sm">Create a document to get started.</p>
            <Button size="default" className="w-28 h-9">
                <PlusCircle className="h-4 w-4 mr-2"/>
                Create
            </Button>
        </div>
     );
}
 
export default DocumentsPage;