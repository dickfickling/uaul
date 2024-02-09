import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import AmplitudeContextProvider from "./amplitude-context-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "United Airlines Upgrade List",
  description:
    "Check the upgrade list for a United Airlines flight, on any date",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AmplitudeContextProvider>{children}</AmplitudeContextProvider>
      </body>
    </html>
  );
}
