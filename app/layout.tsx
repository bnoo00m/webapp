import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flowi",
  description: "The perfect workspace, where all your desires and needs are met",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme:light)",
        url:"/fav.svg",
        href:"/fav.svg",
      },
      {
        media:"(prefers-color-scheme:dark)",
        url:"/favblack.svg",
        href:"/favblack.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="flowi-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
