[Plush Alley Landing Page](https://plush-alley.com/)

## Dependencies used

built with [Next.js](https://nextjs.org/)
styled with [Tailwind CSS](https://tailwindcss.com/)

## Cloudflare Pages

This is a static Next.js export. Set the Pages framework preset to **Next.js (Static HTML Export)**, the build command to `pnpm build`, and the build output directory to `out`. `package.json` pins pnpm to `10.34.9`, and `.node-version` pins Node.js to `24.15.0`.

Do not use `npx @cloudflare/next-on-pages`: it is deprecated and does not support this project's Next.js 16 version.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
