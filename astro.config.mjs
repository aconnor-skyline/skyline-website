// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * Astro config. The `site` URL is required for the sitemap integration to
 * generate fully-qualified URLs (Google needs absolute URLs in sitemap.xml).
 *
 * The sitemap is auto-generated at /sitemap-index.xml on every build,
 * picking up every page in src/pages/. After deploy, submit this to
 * Google Search Console to speed up re-indexing.
 */
export default defineConfig({
  site: "https://theskylineventures.com",
  integrations: [sitemap()],
});
