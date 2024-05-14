import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { AppbarClient } from "../components/appbarClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wallet app",
  description: "store the money in your wallet",
};

export default function RootLayout({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
   
        <AppbarClient/>
             {children}
          
        </body>
      </Providers>
    
    </html>
  );
}
