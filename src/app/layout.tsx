import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/Components/ThemeProvider/ThemeProvider";
import CountProvider from "@/Components/CounterProvider/CounterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next JS Reference Project",
  description: "Reference pages of the features provided by Next JS 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <CountProvider>
          <body className={inter.className}>{children}</body>
        </CountProvider>
      </ThemeProvider>
    </html>
  );
}
