"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader, 
} from "../ui/dialog";
import { useCoverImage } from "@/hooks/use-coverimage";
import { Label } from "../ui/label";
import { ModeToggle } from "../modetoggle";

export const CoverImgModal = () => {
    const coverImage = useCoverImage();
    return (
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2 className="text-center text-lg font-semibold">Cover Image</h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Cover Image
                        </Label>
                        <span className="text-[0.8rem] text-muted-foreground">
                            Select an image to use as your cover image
                        </span>
                    </div>
                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    )
}