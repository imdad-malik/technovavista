import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://technovavista.vercel.app"),

  title: {
    default: "AI SEO & Technical SEO Strategies | TechNovaVista",
    template: "%s | TechNovaVista",
  },

  description:
    "Discover AI SEO strategies, advanced technical SEO insights, SaaS and ecommerce SEO optimization techniques to improve rankings, organic traffic, and modern search visibility.",

  keywords: [
    "AI SEO",
    "AI SEO services",
    "AI search optimization",
    "technical SEO expert",
    "technical SEO services",
    "SEO strategy guide",
    "advanced SEO techniques",
    "ecommerce SEO optimization",
    "SaaS SEO strategy",
    "international SEO services",
    "enterprise SEO solutions",
    "SEO automation",
    "search engine optimization expert",
    "modern SEO strategies",
    "SEO insights and tutorials",
    "TechNovaVista SEO",
    "SEO learning hub",
    "SEO growth strategies",
    "AI powered SEO tools",
    "organic search ranking strategies"
  ],

  authors: [{ name: "Imdad Malik" }],
  creator: "Imdad Malik",
  publisher: "TechNovaVista",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "TechNovaVista | AI SEO & Technical SEO Knowledge Hub",
    description:
      "Learn AI-powered SEO strategies, technical SEO optimization, and modern digital marketing insights from TechNovaVista.",
    url: "https://technovavista.vercel.app",
    siteName: "TechNovaVista",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechNovaVista AI SEO Insights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TechNovaVista | AI SEO Insights",
    description:
      "Explore AI SEO strategies, technical SEO techniques, and search optimization insights.",
    images: ["/og-image.png"],
  },

  other: {
    "google-site-verification": "Kl-V36IL6MscZSW1NAP4xpYaCSMgY2oRs4X6qGLC-7U",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TechNovaVista",
              url: "https://technovavista.vercel.app",
              description:
                "AI SEO and Technical SEO insights, strategies, and tutorials to improve organic search rankings.",
              publisher: {
                "@type": "Organization",
                name: "TechNovaVista",
                url: "https://technovavista.vercel.app",
                logo: {
                  "@type": "ImageObject",
                  url: "https://technovavista.vercel.app/favicon.png"
                }
              }
            }),
          }}
        />

        {/* Person / Author Schema */}
        <Script
          id="author-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Imdad Malik",
              url: "https://technovavista.vercel.app",
              jobTitle: "SEO Expert",
              sameAs: [
                "https://www.linkedin.com/in/imdad-malik/",
                "https://www.instagram.com/imdadmalikseoexpert/",
                "https://web.facebook.com/imdadmalikseoexpert",
                "https://x.com/imdadmalikseo",
                "https://www.pinterest.com/imdadmalikseoexpert/"
              ]
            }),
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechNovaVista",
              url: "https://technovavista.vercel.app",
              logo: "https://technovavista.vercel.app/favicon.png",
              founder: {
                "@type": "Person",
                name: "Imdad Malik"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-300-3985807",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: ["English"]
              },
              sameAs: [
                "https://www.linkedin.com/in/imdad-malik/",
                "https://www.instagram.com/imdadmalikseoexpert/",
                "https://web.facebook.com/imdadmalikseoexpert",
                "https://x.com/imdadmalikseo",
                "https://www.pinterest.com/imdadmalikseoexpert/"
              ]
            }),
          }}
        />

        {/* WhatsApp Contact Schema */}
        <Script
          id="contact-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact TechNovaVista",
              url: "https://wa.me/03003985807"
            }),
          }}
        />

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-240L7V6V1B"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-240L7V6V1B', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}