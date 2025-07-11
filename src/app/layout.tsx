import "../styles/globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anuoluwapo | Developer Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}