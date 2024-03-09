import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ozan Arslan",
  description: "Ozan Arslan'ın portfolyosu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="tr">
      <body className={notoSans.className}>
        <div className="min-h-screen w-full">{children}</div>
      </body>
    </html>
  );
}
