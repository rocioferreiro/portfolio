"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <header className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            id="hero-heading"
            className="mt-10 text-4xl font-bold text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient font-title">Rocio Ferreiro</span>
            <br />
            <span className="text-xl mt-2 block text-muted-foreground">Software Engineer & Blockchain Developer</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative Software Engineer specializing in Blockchain Development with full-stack expertise. Building innovative solutions with React, Web3, and modern development technologies.
          </motion.p>
          <motion.nav
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            aria-label="Hero navigation"
          >
            <a
              href="#work"
              className="gradient-button"
              aria-describedby="explore-work-desc"
            >
              Explore My Work
            </a>
            <span id="explore-work-desc" className="sr-only">
              View portfolio projects and development work
            </span>
            
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-foreground"
              aria-describedby="learn-more-desc"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
            <span id="learn-more-desc" className="sr-only">
              Learn more about Rocio Ferreiro's background and experience
            </span>
          </motion.nav>
        </header>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative flex items-center justify-center">
            {/* Gradient pulse background */}
            <span
              className="absolute inset-0 z-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="block w-[440px] h-[320px] rounded-[45%] bg-gradient-to-tr from-[#EC008C] to-[#FC6767] opacity-40 blur-2xl animate-pulse-gradient"></span>
            </span>
            {/* Hero image */}
            <img
              src="hero_image.png"
              alt="Rocio Ferreiro - Software Engineer and Blockchain Developer"
              width={400}
              height={400}
              className="relative z-10 w-[400px] rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
