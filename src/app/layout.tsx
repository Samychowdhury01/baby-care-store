import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/Provider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: '400'
});

export const metadata: Metadata = {
  title: "BabyBliss",
  description: "A baby care product store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
