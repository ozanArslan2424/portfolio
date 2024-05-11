import { Blobs } from "@/components/blobs";
import { ThemeProvider } from "@/components/theme-provider";
import { Locale, i18n } from "@/i18n.config";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ozan Arslan",
  description: "Ozan Arslan'ın projelerini bulabileceğiniz portfolyo.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html suppressHydrationWarning lang={params.lang}>
      <body className={notoSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen w-full">
            <Blobs />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
