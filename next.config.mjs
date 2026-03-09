// next.config.mjs

import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true, // optional: if you're using .mdx, enable this
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack(config, options) {
    return config;
  },
  // Optional: expose plugins to wherever you're parsing MD (e.g., contentlayer or your markdown loader)
  // This part is needed only if you're not using next-mdx-remote or MDX plugin
};

export default nextConfig;
