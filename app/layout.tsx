import { Blobs } from "@/components/blobs";
import Footer from "@/components/sections/footer";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ozan Arslan",
  description: "Ozan Arslan'ın projelerini bulabileceğiniz portfolyo.",
  // icons: [
  //   {
  //     rel: "icon",
  //     url: "./favicons/favicon-36.png",
  //     sizes: "36x36",
  //     type: "image/png",
  //   },
  //   {
  //     rel: "icon",
  //     url: "./favicons/favicon-48.png",
  //     sizes: "48x48",
  //     type: "image/png",
  //   },
  //   {
  //     rel: "icon",
  //     url: "./favicons/favicon-72.png",
  //     sizes: "72x72",
  //     type: "image/png",
  //   },
  //   {
  //     rel: "icon",
  //     url: "./favicons/favicon-96.png",
  //     sizes: "96x96",
  //     type: "image/png",
  //   },
  //   {
  //     rel: "icon",
  //     url: "./favicons/favicon-144.png",
  //     sizes: "144x144",
  //     type: "image/png",
  //   },
  //   {
  //     rel: "icon",
  //     url: "./favicons/favicon-192.png",
  //     sizes: "192x192",
  //     type: "image/png",
  //   },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="tr">
      <body className={notoSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen w-full">
            <Blobs />
            <div className="container px-4 md:px-6">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
