import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarketHub",
  description: "MarketHub frontend em Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#EBEBEB] min-h-screen w-full">{children}</body>
    </html>
  );
}
