"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import { Divide } from "lucide-react";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";

interface DocumentIdPageProps {
    params: {
        documentId: Id<"documents">;
    };
};

const DocumentIdPage = ({
    params
}: DocumentIdPageProps) => {
    const document = useQuery(api.documents.getById, {
        documentId: params.documentId
    });

    if(document === undefined) {
        return (
           <div>Loading...</div> 
        )
    }

    if(document === null) {
        <div>Document not found</div>
    }

    return ( 
        <div className="pb-40">
            <Cover url={document.coverImage}/>
            <div className="md:max-w-3xl lg:max-w-4xl ">
                <Toolbar initialData={document}/>
            </div>  
        </div>
    );
}
 
export default DocumentIdPage;