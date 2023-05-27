import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"
import compress from "astro-compress";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  site: process.env.SITE_URL,
  markdown: {
    remarkPlugins: [
      remarkMath
    ],
    rehypePlugins: [
      rehypeMathjax
    ]
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    compress(),
  ],
});
