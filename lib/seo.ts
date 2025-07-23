import { Metadata } from 'next'

interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateSEOMetadata({
  title = "Rocio Ferreiro | Software & Blockchain Engineer",
  description = "Experienced Software Engineer specializing in blockchain development, full-stack web applications, and mobile development.",
  keywords = [],
  canonical,
  ogImage = "https://www.rocioferreiro.com/hero_image.png",
  noIndex = false,
}: SEOConfig = {}): Metadata {
  const baseUrl = "https://rocioferreiro.com"
  
  const defaultKeywords = [
    "Rocio Ferreiro",
    "Software Engineer",
    "Blockchain Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Web3",
    "Portfolio"
  ]

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    metadataBase: new URL(baseUrl),
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: "Rocio Ferreiro Portfolio",
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${ogImage}`],
      creator: "@rocioferreiro",
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
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
}

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rocioferreiro.com/#person",
        name: "Rocio Ferreiro",
        url: "https://rocioferreiro.com",
        image: "https://rocioferreiro.com/og-image.png",
        sameAs: [
          "https://github.com/rocioferreiro",
          "https://linkedin.com/in/rocio-ferreiro",
          "https://twitter.com/rocioferreiro"
        ],
        jobTitle: "Software Engineer",
        description: "Experienced Software Engineer specializing in blockchain development, full-stack web applications, and mobile development.",
        worksFor: {
          "@type": "Organization",
          name: "R3AL Blocks"
        },
        knowsAbout: [
          "Software Engineering",
          "Blockchain Development",
          "Full Stack Development",
          "React",
          "Next.js",
          "Node.js",
          "Solidity",
          "Web3",
          "TypeScript",
          "JavaScript"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://rocioferreiro.com/#website",
        url: "https://rocioferreiro.com",
        name: "Rocio Ferreiro Portfolio",
        description: "Portfolio showcasing software engineering projects, blockchain development, and full-stack applications.",
        publisher: {
          "@id": "https://rocioferreiro.com/#person"
        },
        inLanguage: "en-US"
      }
    ]
  }
}
