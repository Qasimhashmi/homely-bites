import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/layout/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homely Bites | Ghar Jaisa Khana",
  description: "Healthy, Hygienic Tiffin & Catering Services in Lahore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap children in the SmoothScroll component */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
