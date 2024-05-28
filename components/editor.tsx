"use client";

import { PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";

interface EditorProps {
  initialContent?: string
  onChange: (value: string) => void
  editable?: boolean
}
const Editor = ({initialContent, onChange, editable = true}: EditorProps) => {
  // Creates a new editor instance.
  const {resolvedTheme} = useTheme();
  const editor = useCreateBlockNote({
    initialContent: initialContent? 
      JSON.parse(initialContent) as PartialBlock[]
      : undefined,
  });
 
  // Renders the editor instance.
  return (
    <BlockNoteView editor={editor} formattingToolbar={false} theme= {resolvedTheme === "dark" ? "dark" : "light"}/>
      
  );
}

export default Editor