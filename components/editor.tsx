"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { SideMenu, SideMenuController, useCreateBlockNote, DragHandleButton } from "@blocknote/react";
import { RemoveBlockButton } from "./ui/removebutton";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  initialContent?: string
  onChange: (value: string) => void
}
const Editor = ({initialContent, onChange}: EditorProps) => {
  const {resolvedTheme} = useTheme();
  const {edgestore} = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({file});

    return response.url;
  }

  const editor = useCreateBlockNote({
    initialContent: initialContent?JSON.parse(initialContent) as PartialBlock[]: undefined,
    
    /*onEditorContentChange: (editor: BlockNoteEditor) => {
      onChange (JSON.stringify(editor.document, null, 2));
    },*/
    uploadFile: handleUpload
  });

 
  // Renders the editor instance.
  return (
    <BlockNoteView editor={editor} formattingToolbar={false} theme= {resolvedTheme === "dark" ? "dark" : "light"} sideMenu={false}>
      <SideMenuController
        sideMenu={(props) => (
          <SideMenu {...props}>
            {/* Button which removes the hovered block. */}
            <RemoveBlockButton {...props} />
            <DragHandleButton {...props} />
          </SideMenu>
        )}
      />
    </BlockNoteView>
      
  );
}

export default Editor