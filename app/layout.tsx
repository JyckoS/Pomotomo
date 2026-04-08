import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional: use CSS variable if needed
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pomotomo",
  description: "A warm, focused Pomodoro timer inspired by Notion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[rgba(0,0,0,0.95)]">
        {children}
      </body>
    </html>
  );
}