"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: 2018,
    title: "Started Computer Engineering",
    description: "Began undergraduate studies in Computer Engineering.",
    details:
      "Enrolled at Universidad Austral in Argentina, starting a 4-year degree program in Computer Engineering.",
  },
  {
    year: 2019,
    title: "Teaching Assistant at Universidad Austral",
    description: "Assisted in Robotics and Mathematics classes.",
    details:
      "Provided support for Robotics classes (Teseo competition) in the first semester and Mathematics prep course in the second semester.",
  },
  {
    year: 2021,
    title: "Technology Assistant at Ternium (Techint Group)",
    description: "Joined an international IT team at Ternium.",
    details:
      "Supported Teams telephony integration and helped with internal presentations between January and March 2021.",
  },
  {
    year: 2021,
    title: "Cloud Developer at IBM",
    description: "Worked on cloud solutions and client demos.",
    details:
      "Employed IBM Cloud tools, developed and maintained a corporate webpage using Node.js and React, and created MVPs from April to December 2021.",
  },
  {
    year: 2022,
    title: "Exchange Program at University of Ottawa",
    description: "Participated in a semester-long exchange.",
    details:
      "Joined a Computer Science exchange program organized by Universidad Austral in Canada.",
  },
  {
    year: 2022,
    title: "Cybersecurity Analyst at BTR Consulting",
    description: "Implemented monitoring tools for cybersecurity.",
    details:
      "Supported Wazuh implementation and conducted monitoring and analysis with Wazuh and Datadog from March to May 2022.",
  },
  {
    year: 2022,
    title: "Software Developer at Canada Pass",
    description: "Frontend and client project development.",
    details:
      "Designed and developed frontend solutions and multiple projects using technologies like Angular, React, Node, and Spring Boot from May to August 2022.",
  },
  {
    year: 2022,
    title: "Technical Leader at Get Sein",
    description: "Led blockchain projects for innovation lab.",
    details:
      "Managed a team of 4 and developed blockchain applications using React, Next.js, Node, MongoDB, and Solidity from August 2022 to October 2023.",
  },
  {
    year: 2023,
    title: "Implementation Manager & Engineer at Mastercard",
    description: "Led payment integration projects for clients.",
    details:
      "Oversaw implementation of systems for payment, card onboarding, and API integration starting January 2023 and ongoing.",
  },
  {
    year: 2023,
    title: "CTO at R3AL Blocks",
    description: "Leading technical strategy for blockchain startup.",
    details:
      "Began in October 2023, overseeing architecture, security, scalability, and innovation for a platform focused on real-world asset tokenization.",
  },
  {
    year: 2024,
    title: "Dirigiendo Personas Program at IAE Business School",
    description: "Completed executive education in leadership and people management.",
    details:
      "Participated in the 'Dirigiendo Personas' program at IAE Business School, focusing on developing leadership skills, decision-making, and self-awareness to effectively manage teams and drive organizational success.",
  },
];


const FlowerIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

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
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">A look at the experiences and learning that brought me here.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1 w-0.5 h-full bg-primary/20"
            style={{ scaleY: scaleX }}
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
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
