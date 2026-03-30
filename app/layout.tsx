import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "./globals.css";
import "@/styles/pure-bootstrap.css";
import "@/styles/pure-swiper.css";
import "@/styles/pure-template.css";
import "@/styles/pure-responsive.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pure Ayurveda",
  description: "Pure Ayurveda homepage replica built in Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
