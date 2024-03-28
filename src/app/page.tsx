"use client"

import { Button } from "@/components/ui/button";


export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 className="text-4xl font-bold text-center">
      Welcome to <a href="https://nextjs.org">Plush Alley</a>
    </h1>
    <p
      className="mt-3 text-2xl text-center"
    >
      where you can find the best plushies
    </p>
    {/* div button */}
    <div className="flex flex-col items-center justify-center w-full">
      {/* full width on sm */}
    <Button
      className="mt-8 text-lg lg:w-1/2 w-9/12 shadow-md"
    > Shopee
    </Button>
    <Button
      className="mt-8 text-lg lg:w-1/2 w-9/12 shadow-md"
    > Lazada
    </Button>
    <Button
      className="mt-8 text-lg lg:w-1/2 w-9/12 shadow-md"
    > Facebook
    </Button>
    <Button
      className="mt-8 text-lg lg:w-1/2 w-9/12 shadow-md"
    > Instagram
    </Button>
    </div>
  </div>
  );
}
