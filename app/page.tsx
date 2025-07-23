import { Metadata } from 'next'
import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"

export const metadata: Metadata = {
  title: "Rocio Ferreiro | Software & Blockchain Engineer Portfolio",
  description: "Welcome to Rocio Ferreiro's portfolio. Discover innovative software engineering projects, blockchain applications, and full-stack development work. Expert in React, Next.js, Solidity, and modern web technologies.",
  openGraph: {
    title: "Rocio Ferreiro | Software & Blockchain Engineer Portfolio",
    description: "Welcome to Rocio Ferreiro's portfolio. Discover innovative software engineering projects, blockchain applications, and full-stack development work.",
    url: "https://rocioferreiro.com",
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <WearYourStory />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <ContactForm />
    </>
  )
}
