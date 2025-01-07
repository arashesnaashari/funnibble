import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Funnibble",
  description: "Microlearning Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/logo.png" sizes="any" className="rounded-lg" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-r from-white to-gray-100 antialiased overflow-auto`}
      >
        {children}
      </body>
    </html>
  );
}
