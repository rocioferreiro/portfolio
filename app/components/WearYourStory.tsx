"use client"

import { motion } from "framer-motion"

export default function WearYourStory() {
  return (
    <section className="bg-background py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-title sm:text-5xl md:text-6xl font-bold text-foreground mb-6">About me</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            I’m a Computer Engineer with hands-on experience in full-stack development, blockchain solutions, and automation. 
            Currently serving as CTO at R3AL Blocks, I focus on shaping the technical direction and architecture of our asset tokenization platform with an emphasis on scalability and security. 
            My background includes roles at IBM and several startups in Argentina and Canada, where I’ve worked across teams to build and deliver meaningful digital products.
          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#work"
              className="gradient-button inline-flex items-center"
            >
              Explore Projects
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
