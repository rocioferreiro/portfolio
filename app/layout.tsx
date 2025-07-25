import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PerformanceMonitor from "./components/PerformanceMonitor"
import type React from "react"
import { Toaster } from "react-hot-toast"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata = {
  title: {
    default: "Rocio Ferreiro | Software & Blockchain Engineer",
    template: "%s | Rocio Ferreiro"
  },
  description: "Software Engineer specializing in blockchain development, full-stack web applications, and mobile development. Expert in React, Next.js, Solidity, and Web3.",
  keywords: [
    "Rocio Ferreiro",
    "Software Engineer",
    "Blockchain Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Solidity",
    "Web3",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Development",
    "TypeScript",
    "JavaScript",
    "Portfolio"
  ],
  authors: [{ name: "Rocio Ferreiro" }],
  creator: "Rocio Ferreiro",
  metadataBase: new URL("https://rocioferreiro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rocio Ferreiro | Software & Blockchain Engineer",
    description: "Software Engineer specializing in blockchain development, full-stack web applications, and mobile development. Expert in React, Next.js, Solidity, and Web3.",
    url: "https://rocioferreiro.com",
    siteName: "Rocio Ferreiro Portfolio",
    images: [
      {
        url: "/og-image.png", // Use relative URL for better compatibility
        width: 1200,
        height: 630,
        alt: "Rocio Ferreiro - Software & Blockchain Engineer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocio Ferreiro | Software & Blockchain Engineer",
    description: "Software Engineer specializing in blockchain development, full-stack web applications, and mobile development. Expert in React, Next.js, Solidity, and Web3.",
    images: ["https://rocioferreiro.com/og-image.png"],
    creator: "@rocioferreiro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/hero_image.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Essential Open Graph meta tags for WhatsApp and social sharing */}
        <meta property="og:title" content="Rocio Ferreiro | Software & Blockchain Engineer" />
        <meta property="og:description" content="Software Engineer specializing in blockchain development, full-stack web applications, and mobile development. Expert in React, Next.js, Solidity, and Web3." />
        <meta property="og:image" content="https://rocioferreiro.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rocio Ferreiro - Software & Blockchain Engineer" />
        <meta property="og:url" content="https://rocioferreiro.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rocio Ferreiro Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rocio Ferreiro | Software & Blockchain Engineer" />
        <meta name="twitter:description" content="Software Engineer specializing in blockchain development, full-stack web applications, and mobile development. Expert in React, Next.js, Solidity, and Web3." />
        <meta name="twitter:image" content="https://rocioferreiro.com/og-image.png" />
        <meta name="twitter:creator" content="@rocioferreiro" />
        
        {/* WhatsApp specific optimization */}
        <meta property="og:image:secure_url" content="https://rocioferreiro.com/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Performance optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rocio Ferreiro",
            "url": "https://rocioferreiro.com",
            "image": "https://rocioferreiro.com/og-image.png",
            "sameAs": [
              "https://github.com/rocioferreiro",
              "https://linkedin.com/in/rocio-ferreiro",
              "https://twitter.com/rocioferre40871"
            ],
            "jobTitle": "Software Engineer",
            "description": "Experienced Software Engineer specializing in blockchain development, full-stack web applications, and mobile development.",
            "worksFor": {
              "@type": "Organization",
              "name": "R3AL Blocks"
            },
            "knowsAbout": [
              "Software Engineering",
              "Blockchain Development",
              "Full Stack Development",
              "React",
              "Next.js",
              "Node.js",
              "Solidity",
              "Web3",
              "TypeScript",
              "JavaScript",
              "Mobile Development"
            ],
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Universidad de Santiago de Compostela"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "ES"
            }
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Rocio Ferreiro Portfolio",
            "url": "https://rocioferreiro.com",
            "description": "Portfolio showcasing software engineering projects, blockchain development, and full-stack applications by Rocio Ferreiro.",
            "author": {
              "@type": "Person",
              "name": "Rocio Ferreiro"
            },
            "inLanguage": "en-US"
          })
        }} />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PerformanceMonitor />
          <Toaster position="bottom-right" />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
