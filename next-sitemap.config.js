// next-sitemap.config.js

module.exports = {
  siteUrl: 'https://technovavista.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
