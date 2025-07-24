"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { timelineEvents } from "@/lib/data"

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl" aria-label="Rocio Ferreiro Professional Journey" aria-describedby="Software Engineer & Blockchain Developer Experience">My Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">A look at the experiences and learning that brought me here.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1 w-0.5 h-full bg-primary/20"
            style={{ scaleY: scaleX, originY: 0 }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={`${event.year}-${index}`}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  readonly event: (typeof timelineEvents)[0]
  readonly index: number
  readonly isExpanded: boolean
  readonly onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`
        mb-8 flex w-full items-start sm:items-center sm:justify-between
        ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}
        flex-row
      `}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Spacer - hidden on mobile, shown on desktop for layout */}
      <div className="hidden sm:block sm:w-5/12" />

      {/* Timeline dot */}
      <div className="z-20 mr-4 sm:mx-0">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>

      {/* Content container */}
      <motion.div
          className="w-full sm:w-5/12 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onToggle}
        >
          <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
            <span className="font-bold text-primary">{event.year}</span>
            <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
            <p className="text-muted-foreground text-sm">{event.description}</p>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-2"
            >
              <p className="text-sm text-muted-foreground">{event.details}</p>
            </motion.div>
          </div>
        </motion.div>
    </motion.div>
  )
}


