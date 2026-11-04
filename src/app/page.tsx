import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Facebook, Instagram, Music2, ShoppingBag, Store, BadgeCheck, Truck, PawPrint, Sparkles, Gift, Package } from "lucide-react";

const channels = [
  { name: "Shopee", href: "https://shopee.ph/plush.alley", icon: ShoppingBag, primary: true },
  { name: "Lazada", href: "https://www.lazada.com.ph/shop/plush-alley/", icon: Store, primary: true },
  { name: "Facebook", href: "https://www.facebook.com/plush.alley/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/plush.alley/", icon: Instagram },
  { name: "TikTok", href: "https://www.tiktok.com/@plush.alley", icon: Music2 },
];

const categories = [
  { title: "Anime plushies", body: "Our namesake and best seller — character plush and minis, often in multiple variants.", icon: PawPrint },
  { title: "Figures", body: "Prize, scale and mini figures for your collection shelf.", icon: Sparkles },
  { title: "Accessories", body: "Keychains, charms and bag mascots — perfect add-ons and gifts.", icon: Gift },
  { title: "Japan goods", body: "Curated character goods and collectibles imported from Japan.", icon: Package },
];

const trust = [
  { label: "Japan-based sourcing", icon: BadgeCheck },
  { label: "Authentic merch", icon: Sparkles },
  { label: "Ships nationwide", icon: Truck },
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center gap-16 px-6 pb-12 pt-4">
      <section className="flex flex-col items-center text-center">
        <p className="font-jp text-lg text-primary">こんにちは!</p>
        <h1 className="sr-only">Plush Alley</h1>
        <Image
          src="/brand/main-logo.png"
          alt="Plush Alley"
          width={1200}
          height={450}
          priority
          className="h-auto w-full max-w-xl"
        />
        <p className="mt-4 max-w-2xl font-display text-2xl text-balance sm:text-3xl">
          Japan-based anime plushies, figures & goods — shipped anywhere in the Philippines.
        </p>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Official merch from Japan, from cuddly character plush to collectible figures. Adopt yours today 🐾
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          {channels.filter((c) => c.primary).map(({ name, href, icon: Icon }) => (
            <Button key={name} asChild size="lg" className="flex-1 text-base shadow-md">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                Shop on {name}
              </a>
            </Button>
          ))}
        </div>
      </section>

      <ul className="flex flex-wrap justify-center gap-3">
        {trust.map(({ label, icon: Icon }) => (
          <li key={label} className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-sm">
            <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>

      <section className="w-full" aria-labelledby="what-we-sell">
        <h2 id="what-we-sell" className="mb-6 text-center font-display text-3xl font-semibold">What we sell</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, body, icon: Icon }) => (
            <article key={title} className="rounded-[var(--radius)] bg-card p-6 shadow-sm">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col items-center rounded-[var(--radius)] bg-card p-8 text-center shadow-sm" aria-labelledby="find-us">
        <Image src="/brand/sticker-1.png" alt="" width={600} height={240} className="h-auto w-48" />
        <h2 id="find-us" className="mt-4 font-display text-3xl font-semibold">Find us everywhere</h2>
        <p className="mt-2 max-w-md text-muted-foreground">
          Message us to reserve, or catch us at events around Taguig. Check our pinned post for more details!
        </p>
        <div className="mt-6 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-5">
          {channels.map(({ name, href, icon: Icon }) => (
            <Button key={name} asChild variant="outline" className="h-12">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                {name}
              </a>
            </Button>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">@plush.alley on all socials</p>
      </section>
    </main>
  );
}
