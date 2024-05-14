import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        url:"/fav-black.svg",
        href:"/fav-black.svg",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
