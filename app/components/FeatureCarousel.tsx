"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const features = [
  {
    title: "Full-Stack Expertise",
    description: "From frontend polish to backend architecture, I deliver end-to-end solutions using modern tools like Next.js, Node.js, and Solidity.",
    icon: "value_icons/stack.png",
  },
  {
    title: "Product-Minded Development",
    description: "I focus on building scalable, user-centric products—not just writing code. I think like a founder and build like an engineer.",
    icon: "value_icons/keyboard.png",
  },
  {
    title: "Team Leadership & Communication",
    description: "I’ve led cross-functional teams and know how to balance technical execution with clear, empathetic communication.",
    icon: "value_icons/clock.png",
  },
  {
    title: "Specialized in Blockchain",
    description: "I build secure, decentralized applications using smart contracts and tokenization protocols, with hands-on experience in Solidity and Web3.",
    icon: "value_icons/blockchain.png",
  },
  {
    title: "Fast Learning & Adaptability",
    description: " I thrive in fast-paced environments and pick up new stacks and frameworks quickly to meet evolving project needs.",
    icon: "value_icons/lightning.png",
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  // Recalculate width on resize and after images load
  useEffect(() => {
    function updateWidth() {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    // Listen for images loading
    const imgs = carousel.current?.querySelectorAll("img") || []
    imgs.forEach(img => {
      if (!img.complete) img.addEventListener("load", updateWidth)
    })
    return () => {
      window.removeEventListener("resize", updateWidth)
      imgs.forEach(img => img.removeEventListener("load", updateWidth))
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div id="value" className="py-20 bg-gradient-to-b from-background to-secondary/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">The Value I Bring</h2>
        <motion.div ref={carousel} className="cursor-grab overflow-x-auto overflow-y-visible">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={`${index}-${feature.title}`}
                className="min-w-[85vw] max-w-[95vw] sm:min-w-[300px] sm:max-w-[340px] h-[400px] p-6 sm:p-8 m-2 sm:m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div>
                  <div className="mb-4 h-[90px] sm:h-[110px] items-center flex justify-center w-full">
                    <img src={feature.icon} alt={feature.title} className="h-[70px] sm:h-[85px]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}