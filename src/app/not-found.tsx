import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <Image src="/brand/sticker-1.png" alt="" width={600} height={240} className="h-auto w-48" />
      <h1 className="heading-3 mt-6 text-balance">This page wandered off</h1>
      <p className="body-3 mt-2 text-muted-foreground">We couldn't find that page. Our plushies are still where you left them.</p>
      <Button asChild size="lg" className="button-md mt-8">
        <Link href="/">Back to Plush Alley</Link>
      </Button>
    </main>
  );
}
