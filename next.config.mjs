// next.config.mjs

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },

  pageExtensions: ["js", "jsx", "md", "mdx"],

  turbopack: {},

  webpack(config, options) {
    return config;
  },
};

export default nextConfig;