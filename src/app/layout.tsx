import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kader Duct Cleaning | Professional Air Duct & Dryer Vent Cleaning",
  description:
    "Professional air duct and dryer vent cleaning services. Breathe cleaner air and protect your home with our expert technicians. Serving the local area with fast, reliable service.",
  keywords: "duct cleaning, air duct cleaning, dryer vent cleaning, HVAC cleaning, indoor air quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
