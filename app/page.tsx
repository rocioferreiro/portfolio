import { Metadata } from 'next'
import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"

export const metadata: Metadata = {
  title: "Rocio Ferreiro | Software & Blockchain Engineer",
  description: "Software Engineer specializing in blockchain development. Expert in React, Next.js, Solidity, and Web3. View my portfolio and projects.",
  openGraph: {
    title: "Rocio Ferreiro | Software & Blockchain Engineer",
    description: "Software Engineer specializing in blockchain development. Expert in React, Next.js, Solidity, and Web3. View my portfolio and projects.",
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
