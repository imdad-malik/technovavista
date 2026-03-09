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
    default: "AI SEO & Technical SEO Insights | TechNovaVista",
    template: "%s | TechNovaVista",
  },

  description:
    "Explore AI SEO strategies, technical SEO insights, SaaS and ecommerce SEO optimization tips to improve rankings, traffic, and modern search visibility.",

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
    canonical: "https://technovavista.vercel.app",
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
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* ✅ GA4 Script for Google Analytics */}
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