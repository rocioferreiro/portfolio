"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: 2024,
    title: "Professor at Universidad Austral",
    description: "Teaching Coding courses.",
    details:
      "Joined as a professor in the Computer Engineering department, teaching Coding courses to undergraduate students. Focused on practical coding skills and software development best practices.",
  },
  {
    year: 2024,
    title: "Dirigiendo Personas Program at IAE Business School",
    description: "Completed executive education in leadership and people management.",
    details:
      "Participated in the 'Dirigiendo Personas' program at IAE Business School, focusing on developing leadership skills, decision-making, and self-awareness to effectively manage teams and drive organizational success.",
  },
  {
    year: 2023,
    title: "CTO at R3AL Blocks",
    description: "Leading technical strategy for blockchain startup.",
    details:
      "Began in March 2023, overseeing architecture, security, scalability, and innovation for a platform focused on real-world asset tokenization.",
  },
  {
    year: 2023,
    title: "Implementation Manager & Engineer at Mastercard",
    description: "Led payment integration projects for clients.",
    details:
      "Oversaw implementation of systems for payment, card onboarding, and API integration starting January 2023 and ongoing.",
  },
  {
    year: 2022,
    title: "Technical Leader at Get Sein",
    description: "Led blockchain projects for innovation lab.",
    details:
      "Managed a team of 4 and developed blockchain applications using React, Next.js, Node, MongoDB, and Solidity from August 2022 to October 2023.",
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
    title: "Cybersecurity Analyst at BTR Consulting",
    description: "Implemented monitoring tools for cybersecurity.",
    details:
      "Supported Wazuh implementation and conducted monitoring and analysis with Wazuh and Datadog from March to May 2022.",
  },
  {
    year: 2022,
    title: "Exchange Program at University of Ottawa",
    description: "Participated in a semester-long exchange.",
    details:
      "Joined a Computer Science exchange program organized by Universidad Austral in Canada.",
  },
  {
    year: 2021,
    title: "Cloud Developer at IBM",
    description: "Worked on cloud solutions and client demos.",
    details:
      "Employed IBM Cloud tools, developed and maintained a corporate webpage using Node.js and React, and created MVPs from April to December 2021.",
  },
  {
    year: 2021,
    title: "Technology Assistant at Ternium (Techint Group)",
    description: "Joined an international IT team at Ternium.",
    details:
      "Supported Teams telephony integration and helped with internal presentations between January and March 2021.",
  },
  {
    year: 2019,
    title: "Teaching Assistant at Universidad Austral",
    description: "Assisted in Robotics and Mathematics classes.",
    details:
      "Provided support for Robotics classes (Teseo competition) in the first semester and Mathematics prep course in the second semester.",
  },
  {
    year: 2018,
    title: "Started Computer Engineering",
    description: "Began undergraduate studies in Computer Engineering.",
    details:
      "Enrolled at Universidad Austral in Argentina, starting a 4-year degree program in Computer Engineering.",
  },
];

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


