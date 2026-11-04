import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-display" });
const notoJp = Noto_Sans_JP({ weight: ["500"], preload: false, variable: "--font-jp" });

const description = "Authentic anime plushies, figures and goods from Japan, shipped anywhere in the Philippines. 🧸🐾";

export const metadata: Metadata = {
  title: "Plush Alley · Japan Based Anime Merchandise",
  description,
  keywords: "anime plush, anime plushies Philippines, anime figures PH, anime merch PH, Japan anime goods, anime shop, PlushAlley, AnimePlushPH, AnimeMerchPH, Shop",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://plush-alley.com",
    title: "Plush Alley",
    description,
    images: [
      {
        url: "https://plush-alley.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plush Alley",
      },
    ],
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#B83E73" },
    { media: "(prefers-color-scheme: dark)", color: "#2E2A3D" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${nunitoSans.variable} ${fredoka.variable} ${notoJp.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2">Skip to content</a>
          <Header />
          {children}
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
