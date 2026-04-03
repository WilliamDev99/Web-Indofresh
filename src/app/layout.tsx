import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Indofresh — Distributor Buah Segar Premium Indonesia",
    template: "%s | Indofresh",
  },
  description:
    "Indofresh adalah distributor buah-buahan segar berkualitas premium di Indonesia. Menyediakan Apel, Pir, Anggur, dan Jeruk pilihan terbaik untuk kebutuhan Anda.",
  keywords: [
    "distributor buah segar",
    "buah premium Indonesia",
    "apel segar",
    "pir segar",
    "anggur segar",
    "jeruk segar",
    "Indofresh",
  ],
  authors: [{ name: "Indofresh" }],
  openGraph: {
    title: "Indofresh — Distributor Buah Segar Premium Indonesia",
    description:
      "Distributor buah-buahan segar berkualitas premium. Apel, Pir, Anggur, dan Jeruk pilihan terbaik Indonesia.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
