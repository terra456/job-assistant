import type { Metadata } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import "./globals.css";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";

const wixDisplay = Wix_Madefor_Display({
  variable: "--wix-display",
  subsets: ["cyrillic-ext"],
});

const wixText = Wix_Madefor_Text({
  variable: "--wix-text",
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
        <Header />
        <main className="main">{children}</main>
        <Footer />
        <div id="modal-root" className="modal-root" />
      </body>
    </html>
  );
}
