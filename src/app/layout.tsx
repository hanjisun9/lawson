import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

// Pakai Poppins, bisa tentukan weight dan subset
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // opsional, pilih yang dipakai
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "LAWSON Indonesia",
  description: "Lawson | Indonesia",
  icons:{
    icon: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} font-rubik antialiased`}>
        {children}
      </body>
    </html>
  );
}
