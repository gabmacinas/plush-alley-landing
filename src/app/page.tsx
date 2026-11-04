import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  FacebookLogo, InstagramLogo, TiktokLogo, ShoppingBag, Storefront, SealCheck, Truck, PawPrint,
  Sparkle, Gift, Package, Star, ChatCircleDots, Plus,
} from "@phosphor-icons/react/dist/ssr";
import TaglineReveal from "@/components/tagline-reveal";
import reviews from "@/lib/reviews.json";

const shopee = { name: "Shopee", href: "https://shopee.ph/plush.alley", icon: ShoppingBag };

const channels = [
  shopee,
  { name: "Lazada", href: "https://www.lazada.com.ph/shop/plush-alley/", icon: Storefront },
  { name: "Facebook", href: "https://www.facebook.com/plush.alley/", icon: FacebookLogo },
  { name: "Instagram", href: "https://www.instagram.com/plush.alley/", icon: InstagramLogo },
  { name: "TikTok", href: "https://www.tiktok.com/@plush.alley", icon: TiktokLogo },
];

const categories = [
  { title: "Anime plushies", body: "Our namesake and best seller. Character plush and minis, often in several variants.", icon: PawPrint },
  { title: "Figures", body: "Prize, scale and mini figures for your collection shelf.", icon: Sparkle },
  { title: "Accessories", body: "Keychains, charms and bag mascots. Easy add ons and gifts.", icon: Gift },
  { title: "Japan goods", body: "Curated character goods and collectibles imported from Japan.", icon: Package },
];

const trust = [
  { label: "Japan based sourcing", icon: SealCheck },
  { label: "100% authentic", icon: Sparkle },
  { label: "Ships nationwide", icon: Truck },
];

const steps = [
  { title: "Find your character", body: "Browse our Shopee or Lazada shop, or message us on Facebook to ask what's in stock." },
  { title: "Check out or message us", body: "Pay through marketplace checkout, or reserve and pay by private message." },
  { title: "We ship it to you", body: "Delivered nationwide by LBC or J&T Express, Lalamove within Metro Manila, or pick up at our events." },
];

const faqs = [
  { q: "Are your items authentic?", a: "Yes. Every item is official merchandise sourced from Japan. Our product photos are real and carry our watermark." },
  { q: "Where do you ship?", a: "Anywhere in the Philippines. We ship nationwide." },
  { q: "Which couriers do you use?", a: "LBC and J&T Express for nationwide delivery, and Lalamove for same day delivery within Metro Manila." },
  { q: "Can I pick up my order?", a: "Yes, at our events. We announce dates and venues on our Facebook page." },
  { q: "How can I pay?", a: "Through checkout on Shopee or Lazada, or by private message on Facebook when you order directly." },
  { q: "Can I reserve an item?", a: "Yes. Message us on Facebook and we'll hold it for you. Check our pinned post for details." },
  { q: "What if I'm not happy with my item?", a: "Message us and we'll make it right with a return within 30 days." },
];

function ChannelButtons() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-5">
      {channels.map(({ name, href, icon: Icon }) => (
        <Button key={name} asChild variant="outline" className="button-md h-12">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            {name}
          </a>
        </Button>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main id="main" className="mx-auto flex max-w-5xl flex-col items-center gap-24 px-6 pb-12 pt-4">
      <section className="flex flex-col items-center text-center">
        <p className="mb-6 font-jp text-lg text-primary">こんにちは!</p>
        <Image
          src="/brand/sticker-1.png"
          alt="Plush Alley"
          width={1200}
          height={480}
          priority
          className="h-auto w-full max-w-md"
        />
        <h1 className="heading-1 mt-6 max-w-[680px] text-balance">
          Anime plushies from Japan,<br className="hidden sm:block" /> shipped anywhere in the Philippines
        </h1>
        <p className="body-3 mt-4 max-w-[680px] text-pretty text-muted-foreground">
          Official plush, figures and character goods sourced in Japan by a small shop. Adopt yours today 🐾
        </p>
        <Button asChild size="lg" className="button-md mt-8 shadow-md">
          <a href={shopee.href} target="_blank" rel="noopener noreferrer">
            <ShoppingBag className="mr-2 h-5 w-5" aria-hidden="true" />
            Shop on Shopee
          </a>
        </Button>
        <a href="#reviews" className="title-4 mt-4 inline-flex items-center gap-1 rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Star weight="fill" className="h-4 w-4 text-primary" aria-hidden="true" />
          Loved by Shopee buyers
        </a>
      </section>

      <ul className="-mt-12 flex flex-wrap justify-center gap-3">
        {trust.map(({ label, icon: Icon }) => (
          <li key={label} className="caption-3 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm">
            <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>

      <section className="w-full" aria-labelledby="what-we-sell">
        <h2 id="what-we-sell" className="heading-3 mb-8 text-center">What we sell</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, body, icon: Icon }) => (
            <article key={title} className="rounded-2xl bg-card p-6 shadow-sm">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="heading-6">{title}</h3>
              <p className="body-6 mt-2 text-pretty text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full py-16" aria-label="Our promise">
        <TaglineReveal lines={["Real merch from Japan,", "picked with care,", "hugged all the way home."]} />
      </section>

      <section className="w-full" aria-labelledby="how-to-order">
        <h2 id="how-to-order" className="heading-3 mb-8 text-center">How to order</h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          {steps.map(({ title, body }, i) => (
            <li key={title} className="rounded-2xl bg-card p-6 shadow-sm">
              <span className="caption-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">{i + 1}</span>
              <h3 className="heading-6 mt-4">{title}</h3>
              <p className="body-6 mt-2 text-pretty text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="reviews" className="w-full scroll-mt-8" aria-labelledby="reviews-title">
        <h2 id="reviews-title" className="heading-3 mb-2 text-center">What buyers say</h2>
        <p className="body-6 mb-8 text-center text-muted-foreground">Verified reviews from our Shopee shop</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.id} className="flex flex-col rounded-2xl bg-card p-2 shadow-sm">
              <Image src={r.image} alt={`Photo from ${r.author} of their ${r.product}`} width={600} height={600} className="aspect-square w-full rounded-lg object-cover" />
              <div className="flex flex-1 flex-col p-4">
                <div className="flex gap-1 text-primary" aria-label={`${r.stars} out of 5 stars`}>
                  {Array.from({ length: r.stars }, (_, i) => <Star key={i} weight="fill" className="h-4 w-4" aria-hidden="true" />)}
                </div>
                <p className="body-6 mt-3 flex-1 whitespace-pre-line">{r.comment}</p>
                <p className="title-4 mt-4">{r.author}</p>
                <p className="caption-5 text-muted-foreground">{r.product}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full max-w-2xl" aria-labelledby="faq">
        <h2 id="faq" className="heading-3 mb-8 text-center">Questions</h2>
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-2xl bg-card px-6 py-4 shadow-sm">
              <summary className="title-4 flex cursor-pointer list-none items-center justify-between gap-4 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {q}
                <Plus className="h-4 w-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="body-6 mt-3 text-pretty text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col items-center rounded-2xl bg-card p-8 text-center shadow-sm" aria-labelledby="find-us">
        <Image src="/brand/sticker-1.png" alt="" width={600} height={240} className="h-auto w-48" />
        <h2 id="find-us" className="heading-3 mt-4 text-balance">Your next plush is waiting</h2>
        <p className="body-3 mt-2 max-w-md text-pretty text-muted-foreground">
          Authentic from Japan, shipped nationwide, and easy to return if it's not right.
        </p>
        <Button asChild size="lg" className="button-md mt-6 shadow-md">
          <a href={shopee.href} target="_blank" rel="noopener noreferrer">
            <ShoppingBag className="mr-2 h-5 w-5" aria-hidden="true" />
            Shop on Shopee
          </a>
        </Button>
        <p className="body-6 mt-8 mb-3 inline-flex items-center gap-2 text-muted-foreground">
          <ChatCircleDots className="h-4 w-4" aria-hidden="true" />
          Or message us to reserve. @plush.alley everywhere
        </p>
        <ChannelButtons />
      </section>
    </main>
  );
}
