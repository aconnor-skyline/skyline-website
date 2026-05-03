# Images

Drop your custom photos in this folder, then reference them in
`src/pages/index.astro` like:

```js
const IMAGES = {
  hero: "/images/your-hero-photo.jpg",
  about: "/images/your-about-photo.jpg",
  service: "/images/your-service-photo.jpg",
  footer: "/images/your-footer-photo.jpg",
};
```

(The leading `/` is the public root — anything in `public/` is served from
the site root in production.)

## Recommended specs

- **Format:** JPG (smaller) or WebP (smallest + modern browsers)
- **Width:** 2400px wide for full-bleed sections (covers retina + ultra-wide)
- **Quality:** ~80% — balances file size vs visual quality
- **Subject:** dark, dramatic — text is overlaid in white on top, so
  busy/light photos hurt readability
- **File size target:** under 500 KB per photo (use https://squoosh.app to
  compress before uploading)

## After dropping a photo here

1. Edit `src/pages/index.astro` → swap the URL in `IMAGES`
2. `git add public/images/your-photo.jpg src/pages/index.astro`
3. `git commit -m "Use custom hero photo"`
4. `git push`
5. Cloudflare auto-deploys in ~60 sec
