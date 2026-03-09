// next-sitemap.config.js

module.exports = {
  siteUrl: 'https://article.technovavista.com',
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
