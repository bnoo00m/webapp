import { Button } from "@/components/ui/button"


export const Footer = () =>{
    return (
        <div className="flex items-center w-full p-6 pg-background bg-[#f7f2ec] dark:bg-[#1F1F1F]">
            <div className="md:ml-auto w-full justify-between
            md:justify-end flex items-center gap-x-6 text-muted-foreground">
                <Button variant="link">
                    Privacy Policy
                </Button>
                <Button variant="link">
                    Terms & Conditions
                </Button>
            </div>
        </div>
    )
}