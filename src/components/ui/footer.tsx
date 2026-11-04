export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-1 py-8 px-8 text-center text-sm text-muted-foreground">
      <p className="font-display text-base text-foreground">Plush Alley & Co. · Japan Based Anime Merchandise</p>
      <p>Metro Manila · #PlushAlley #AnimePlushPH #AnimeMerchPH</p>
      <p>© {new Date().getFullYear()} Plush Alley · arigatou for visiting 💗</p>
    </footer>
  )
}
