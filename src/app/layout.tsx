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
        <AmplitudeContextProvider>
          <div className="flex min-h-screen flex-col p-8">
            {children}
            <div className="flex-1" />
            <footer className="mt-8 text-center">
              <div className="text-sm text-gray-500">
                If you like this or have ideas for other features/tools I should
                build,{" "}
                <a
                  className="text-blue-800 underline"
                  href="mailto:uaul@d10g.co"
                >
                  send me an email.
                </a>{" "}
                Or better yet,{" "}
                <a
                  className="text-blue-800 underline"
                  href="mailto:lena+uaul@d10g.co"
                >
                  send my wife an email
                </a>{" "}
                to tell her to let me keep working on this.
              </div>
            </footer>
          </div>
        </AmplitudeContextProvider>
      </body>
    </html>
  );
}
