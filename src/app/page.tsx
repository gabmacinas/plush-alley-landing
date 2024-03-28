"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {

  const openLinkInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Image
      src="/logo.png"
      alt="Plush Alley"
      width={300}
      height={300}
      className="rounded-full"
    />
    <h1 className="text-4xl font-bold text-center">
      Welcome to <a href="https://nextjs.org">Plush Alley</a>
    </h1>
    <p
      className="mt-3 text-2xl text-center lg:w-1/8 w-9/12"
    >
      Welcome to Plush Alley! Discover a world of delightful plush toys and accessories. From cuddly companions to unique collectibles, our curated selection awaits you. Start your plush adventure today! 🧸🛒
    </p>
    <div className="flex flex-col items-center justify-center w-full">
    <Button
      className="mt-8 text-lg lg:w-1/2 w-9/12 shadow-md"
      onClick={() => openLinkInNewTab("https://shopee.ph/plush.alley")}
    > Shopee
    </Button>
    <Button
      className="mt-8 text-lg lg:w-1/2 w-9/12 shadow-md"
      onClick={() => openLinkInNewTab("https://www.lazada.com.ph/shop/plush-alley/")}
    > Lazada
    </Button>
    <Button
      className="mt-8 text-lg lg:w-1/2 w-9/12 shadow-md"
      onClick={() => openLinkInNewTab("https://www.facebook.com/plush.alley/")}
    > Facebook
    </Button>
    <Button
      className="mt-8 text-lg lg:w-1/2 w-9/12 shadow-md"
      onClick={() => openLinkInNewTab("https://www.instagram.com/plush.alley/")}
    > Instagram
    </Button>
    </div>
  </div>
  );
}
