import type { Metadata } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import "./globals.css";

const wixDisplay = Wix_Madefor_Display({
  variable: "--font-wix-display",
  subsets: ["cyrillic-ext"],
});

const wixText = Wix_Madefor_Text({
  variable: "--font-wix-text",
  subsets: ["cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Ассистент по поиску работы",
  description: "все в одном месте, чтобы быстро найти работу",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${wixDisplay.variable} ${wixText.variable}`}>
        {children}
      </body>
    </html>
  );
}
