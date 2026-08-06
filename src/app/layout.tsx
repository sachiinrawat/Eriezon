import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.scss";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Eriezon Crop Science India Pvt. Ltd.",
  description: "ISO 9001:2015 certified agrochemical company committed to empowering farmers. Apply for distributorship today.",
  keywords: ["agrochemical company India", "distributorship agrochemical India", "crop protection solutions", "pesticides", "herbicides", "fungicides"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
