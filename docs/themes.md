# Plush Alley — Themes & Brand Colors

> Business/product info lives in [marketing.md](./marketing.md). The app-side token audit lives in [theme.md](./theme.md); this file is the brand-asset view and theme presets.

Asset root: `src/assets/branding/` (paths below are relative to the repo root).

## 1. Brand assets reference

| Asset | Path | Use on |
|-------|------|--------|
| Concept board (master reference) | `src/assets/branding/Plush Alley Concept Board.jpg` | Source of truth for palette and layouts |
| Main logo (cat + wordmark + tail) | `src/assets/branding/Logo/Plush Alley Main Logo.png` | Hero, website header, banners |
| Logo A | `src/assets/branding/Logo/Plush Alley Logo A.png` | Alternate lockup |
| Logo B (stacked, with paw) | `src/assets/branding/Logo/Plush Alley Logo B.png` | Square spaces, merch print |
| Wordmark only | `src/assets/branding/Logo/Plush Alley Wordmark.png` | Narrow headers, footers |
| Icon (cat face) | `src/assets/branding/Logo/Plush Alley Icon.png` | Favicon, app icon, avatars |
| FB profile picture | `src/assets/branding/Facebook Pubmats/Plush Alley FB DP.jpg` | Social avatars |
| FB banner | `src/assets/branding/Facebook Pubmats/FB Banner.jpg` | Social covers |
| Business card | `src/assets/branding/Business Card/Business Card Front.jpg`, `Business Card Back.jpg` (+ `.psd`) | Print, 85 × 55 mm |
| Email footer | `src/assets/branding/Email Footer/Plush Alley Email Footer.jpg` (+ `.psd`) | Email signatures |
| Paw pattern | `src/assets/branding/Pattern & Watermark/Plush Alley Pattern.png`, `Plush Alley Pattern Scaled.png` | Backgrounds, packaging, card backs |
| Watermark | `src/assets/branding/Pattern & Watermark/Plush Alley Watermark.png`, `Plush Alley Watermark Scaled.png` | Product photos (see `Plush Alley Watermark Sample.jpg`) |
| Stickers | `src/assets/branding/Stickers/PA Sticker 1.png` … `PA Sticker 7.png` | Packaging, social posts, freebies |

![Concept board](../src/assets/branding/Plush%20Alley%20Concept%20Board.jpg)

## 2. Official palette (from the concept board paws)

The concept board shows five paw swatches. Values marked * were read from the logo file; the others are eyeballed from the board — confirm against the PSDs before print.

| # | Name | Hex | Role |
|---|------|-----|------|
| 1 | Dusty Rose | `#D07A98` | Strong accent, merch background |
| 2 | Blush Pink | `#F5C1D6`* | Logo wordmark, cat outline |
| 3 | Sakura Pink | `#F2A7C3` | Paw beans, stickers, highlights |
| 4 | Mist Lavender | `#DCDBEA`* | Cat stripes, tail swoosh, grid backgrounds |
| 5 | Mauve Grey | `#9A8FA3` | Business-card background, muted text on light |

Supporting neutrals: White `#FFFFFF` (cat face, sticker borders), Grid Blue-White `#E9ECF5` (banner/grid background), Plum Ink `#2E2A3D` (text).

## 3. Theme presets

Each theme follows **60 / 30 / 10** (base / secondary / accent).

### 3.1 Sakura Soft (default — website & shop)
Matches the FB banner and concept-board hero.
| Token | Hex |
|-------|-----|
| Background | `#E9ECF5` with faint white grid |
| Surface / cards | `#FFFFFF` |
| Primary (CTA) | `#B83E73` (deep rose; white text passes AA) |
| Brand accent | `#F5C1D6` |
| Secondary | `#DCDBEA` |
| Text | `#2E2A3D` / muted `#6B6680` |
Logo: `Plush Alley Main Logo.png` (pastel; add white sticker outline as on the FB banner if contrast is low).

### 3.2 Mauve Night (premium / limited editions / dark mode)
| Token | Hex |
|-------|-----|
| Background | `#2E2A3D` |
| Surface | `#3D3750` |
| Primary | `#F2A7C3` (dark text `#2E2A3D` on buttons) |
| Secondary | `#9A8FA3` |
| Text | `#F5F3FA` / muted `#C9C4D6` |
Logo: pastel `Plush Alley Main Logo.png` — glows on dark.

### 3.3 Rose Promo (sales, 11.11 / 12.12, flash deals)
| Token | Hex |
|-------|-----|
| Background | `#D07A98` |
| Surface | `#F5C1D6` |
| Primary | `#FFFFFF` buttons with `#B83E73` text |
| Accent | `#DCDBEA` |
| Text | `#FFFFFF` on rose, `#2E2A3D` on blush |
Logo: white-filled wordmark (like the business-card front).

### 3.4 Lavender Calm (inventory app / admin UI)
| Token | Hex |
|-------|-----|
| Background | `#F7F6FB` |
| Sidebar | `#F0EFF7` |
| Primary | `#5B5794` |
| Brand accent | `#B83E73` (one CTA per screen) |
| Borders | `#ECE7F0` |
| Text | `#2E2A3D` |
Logo: `Plush Alley Icon.png` in the sidebar header.

### 3.5 Paw Print (packaging, stickers, card backs)
| Token | Hex |
|-------|-----|
| Background | `#FFFFFF` + `Plush Alley Pattern.png` at ~20% |
| Accent | `#F2A7C3` / `#DCDBEA` paws |
| Text | `#D07A98` |
Logo: any sticker from `Stickers/`.

### Drop-in CSS
```css
:root {
  --pa-dusty-rose: #d07a98;
  --pa-blush: #f5c1d6;
  --pa-sakura: #f2a7c3;
  --pa-mist: #dcdbea;
  --pa-mauve: #9a8fa3;
  --pa-grid: #e9ecf5;
  --pa-ink: #2e2a3d;
  --pa-cta: #b83e73;
}
[data-theme="mauve-night"] { --bg: #2e2a3d; --surface: #3d3750; --primary: #f2a7c3; --text: #f5f3fa; }
[data-theme="sakura-soft"] { --bg: #e9ecf5; --surface: #ffffff; --primary: #b83e73; --text: #2e2a3d; }
[data-theme="rose-promo"]  { --bg: #d07a98; --surface: #f5c1d6; --primary: #ffffff; --text: #ffffff; }
[data-theme="lavender-calm"] { --bg: #f7f6fb; --surface: #f0eff7; --primary: #5b5794; --text: #2e2a3d; }
```

## 4. Logo usage rules

- **Clear space:** at least the height of the cat's ear around the logo.
- **Minimum size:** main logo 120 px wide on screen / 30 mm in print; below that use `Plush Alley Icon.png`.
- **Pastel logo on white washes out** — use the grid background `#E9ECF5`, a dark theme, or the white sticker outline.
- Don't recolor, stretch, rotate, add shadows, or separate the tail swoosh from the wordmark.
- Always watermark product photos with `Plush Alley Watermark.png` at low opacity, tiled like the sample.

## 5. Typography

- **Headings:** rounded, chunky display — Fredoka, Baloo 2, or Nunito Black (echoes the wordmark).
- **Body:** Nunito Sans or Inter.
- **Accent:** small Japanese greeting (こんにちは) in Noto Sans JP.

## 6. Photography

- Backdrops: `#F5C1D6` blush or `#DCDBEA` lavender seamless; `#2E2A3D` for premium shots.
- Soft, diffused light; plush centered, slightly from above.
- Watermark every marketplace photo.
