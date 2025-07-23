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
  title: "Rocio Ferreiro | Software Engineer & Blockchain Innovator",
  description: "Portfolio of Rocio Ferreiro, a software engineer specializing in blockchain and full-stack development.",
  openGraph: {
    title: "Rocio Ferreiro | Portfolio",
    description: "Explore projects and expertise in blockchain, web, and mobile development.",
    url: "https://rocioferreiro.com",
    images: [
      {
        url: "https://rocioferreiro.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rocio Ferreiro | Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocio Ferreiro Portfolio",
    description: "Explore projects and expertise in blockchain, web, and mobile development.",
    images: ["https://rocioferreiro.com/og-image.png"],
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
            "sameAs": [
              "https://github.com/rocioferreiro",
              "https://linkedin.com/in/rocio-ferreiro"
            ],
            "jobTitle": "Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "R3AL Blocks"
            }
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
