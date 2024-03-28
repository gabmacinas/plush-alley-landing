import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Plush Alley",
  description: "Discover delightful plush toys and accessories at Plush Alley! From cuddly companions to unique collectibles, explore our curated selection. Start your plush adventure today! 🧸🛒",
  keywords: "plush, plushies, stuffed toys, stuffed animals, plush toys, plushie, plushy, stuffed toy, stuffed animal, soft toy, soft toys, soft toy, soft toys, cuddly toy, cuddly toys, cuddly plush, cuddly plushies, cuddly stuffed toy, cuddly stuffed toys, cuddly stuffed animal, cuddly stuffed animals, cute plush, cute plushies, cute stuffed toy, cute stuffed toys, cute stuffed animal, cute stuffed animals, adorable plush, adorable plushies, adorable stuffed toy, adorable stuffed toys, adorable stuffed animal, adorable stuffed animals, kawaii plush, kawaii plushies, kawaii stuffed toy, kawaii stuffed toys, kawaii stuffed animal, kawaii stuffed animals, collectible plush, collectible plushies, collectible stuffed toy, collectible stuffed toys, collectible stuffed animal, collectible stuffed animals, limited edition plush, limited edition plushies, limited edition stuffed toy, limited edition stuffed toys, limited edition stuffed animal, limited edition stuffed animals, rare plush, rare plushies, rare stuffed toy, rare stuffed toys, rare stuffed animal, rare stuffed animals, unique plush, unique plushies, unique stuffed toy, unique stuffed toys, unique stuffed animal, unique stuffed animals, custom plush, custom plushies, custom stuffed toy, custom stuffed toys, custom stuffed animal, custom stuffed animals, personalized plush, personalized plushies, personalized stuffed toy, personalized stuffed toys, personalized stuffed animal, personalized stuffed animals, bespoke plush, bespoke plushies, bespoke stuffed toy, bespoke stuffed toys, bespoke stuffed animal, bespoke stuffed animals, handmade plush, handmade plushies, handmade stuffed toy, handmade stuffed toys, handmade stuffed animal, handmade stuffed animals, artisan plush, artisan plushies, artisan stuffed toy, artisan stuffed toys, artisan stuffed animal, artisan stuffed animals, designer plush, designer plushies, designer stuffed toy, designer stuffed toys, designer stuffed animal, designer stuffed animals, luxury plush, luxury plushies, luxury stuffed toy, luxury stuffed toys, luxury stuffed animal, luxury stuffed animals, premium plush, premium plushies, premium stuffed toy, premium stuffed toys, premium stuffed animal, premium stuffed animals, high-quality plush, high-quality plushies, high-quality stuffed toy, high-quality stuffed toys, high-quality stuffed animal, high-quality stuffed animals, top-notch plush, top-notch plushies, top-notch stuffed toy, top-notch stuffed toys, top-notch stuffed animal, top-notch stuffed animals",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://plush-alley.com",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
