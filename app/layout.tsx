import type { Metadata } from "next";
import { Instrument_Sans, Inter_Tight } from "next/font/google";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "./globals.css";
import { siteMeta } from "@/lib/site-data";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://stevewattsportfolio.framer.website"
  ),
  title: siteMeta.title,
  description: siteMeta.description,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    images: [
      {
        url: "/images/og/og.png",
        width: 1200,
        height: 630,
        alt: siteMeta.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/images/og/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${interTight.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <Providers>
          <div className="flex min-h-full flex-1 flex-col">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
