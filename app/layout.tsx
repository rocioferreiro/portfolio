import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import { Toaster } from "react-hot-toast"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Rocio Ferreiro | Software & Blockchain Engineer",
    template: "%s | Rocio Ferreiro"
  },
  description: "Experienced Software Engineer specializing in blockchain development, full-stack web applications, and mobile development. Expert in React, Next.js, Node.js, Solidity, and modern web technologies.",
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
    description: "Experienced Software Engineer specializing in blockchain development, full-stack web applications, and mobile development. View my portfolio and projects.",
    url: "https://rocioferreiro.com",
    siteName: "Rocio Ferreiro Portfolio",
    images: [
      {
        url: "https://rocioferreiro.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rocio Ferreiro - Software & Blockchain Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocio Ferreiro | Software & Blockchain Engineer",
    description: "Experienced Software Engineer specializing in blockchain development, full-stack web applications, and mobile development.",
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
