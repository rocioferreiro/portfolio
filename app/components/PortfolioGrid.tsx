"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type ShowcaseItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  details: string;
  categories: string[];
  url: string;
};

const projects: ShowcaseItem[] = [
  {
    id: 1,
    name: "R3AL Blocks – CTO",
    description: "Leading technology strategy and development at R3AL Blocks, a platform leveraging blockchain for real estate.",
    image: "/projects/r3al.png?height=600&width=600",
    details: "Overseeing tech team and product architecture for a blockchain-based real estate solution.",
    categories: ["Leadership", "Blockchain", "RWA", "Innovation"],
    url: "https://r3al.io"
  },
  {
    id: 2,
    name: "Avalanche LATAM Summit 2024 – Hackathon Winner",
    description: "1st place Chainlink bounty and 2nd overall for an educational subsidies system on Avalanche.",
    image: "/projects/vouch4edu.png?height=600&width=600",
    details: "Built with Solidity, ERC-1155, Chainlink Functions, Teleporter, and Next.js.",
    categories: ["Hackathon", "Blockchain", "Innovation"],
    url: "https://www.canva.com/design/DAGSELH2eP8/LfqSA_WBk0HwRpADdm9v9g/edit?utm_content=DAGSELH2eP8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 3,
    name: "Tourismo – Thesis Project",
    description: "A mobile app that generates optimized travel plans based on user-selected attractions.",
    image: "/projects/thesis.png?height=600&width=600",
    details: "Tourismo helps travelers explore cities by creating efficient multi-day itineraries starting and ending at a custom point, like a hotel. Users can personalize, share, edit, and download their plans.",
    categories: ["Mobile", "Automation", "Thesis", "University"],
    url: "https://docs.google.com/presentation/d/1LHwhqucWRrkMSXUSczFg3o3dddurXwizj1mbH_1Lwyk/edit?usp=sharing"
  },
  {
    id: 4,
    name: "Nerdathon 2024 – Polkadot Hackathon",
    description: "2nd place overall for a decentralized loyalty platform built on Polkadot.",
    image: "/projects/loybits.png?height=600&width=600",
    details: "Stack: Next.js, Tailwind, ink! smart contracts, Pinecone.",
    categories: ["Hackathon", "Blockchain", "Innovation"],
    url: "https://loybits.vercel.app"
  },
  {
    id: 5,
    name: "Get Sein – Technical Leader",
    description: "Leading blockchain innovation projects and worked in an EdTech platform called MundosE",
    image: "/projects/mundose.png?height=600&width=600",
    details: "Technologies: React, Next.js, Node.js, MongoDB, Solidity, Remix. MundosE offers university-level diplomas designed by top experts to maximize skill growth.",
    categories: ["Leadership", "Blockchain", "EdTech"],
    url: "https://getsein.com"
  },
  {
    id: 6,
    name: "IBM – Cloud Developer",
    description: "Worked on 'Emma', a 3D-printed cognitive assistant robot and developed institutional pages.",
    image: "/projects/emma.png?height=600&width=600",
    details: "Emma, built at IBM’s IoT lab, showcases Watson's capabilities through facial recognition, natural language, and guidance. Also contributed to IBM Cloud pages using Node.js and React.",
    categories: ["Cloud", "Frontend", "IoT", "AI", "Innovation"],
    url: "https://www.infobae.com/tecno/2018/06/08/5-proyectos-innovadores-que-muestran-la-evolucion-de-la-plataforma-de-inteligencia-artificial-watson/"
  },
  
  // {
  //   id: 7,
  //   name: "R3AL Level Up – Game Marketing Campaign",
  //   description: "A mini-game created for a R3AL Blocks marketing campaign to gamify real estate investing concepts.",
  //   image: "/projects/levelup.png?height=600&width=600",
  //   details: "Developed a browser-based interactive game to engage users with R3AL Blocks. Combined blockchain themes with fun mechanics to attract a broader audience.",
  //   categories: ["Game", "Marketing", "Creative Tech"],
  //   url: "https://levelup.r3al.io"
  // },
  {
    id: 8,
    name: "Window Progress Bar – React Component Library",
    description: "A customizable progress bar for React with color-coded sections and tooltip support.",
    image: "/projects/progressbar.png?height=600&width=600",
    details: "Published on npm as 'color-coded-progress-bar'. Built with usability and customization in mind.",
    categories: ["Open Source", "Frontend"],
    url: "https://www.npmjs.com/package/color-coded-progress-bar"
  },
  {
    id: 9,
    name: "Connect the Dots – University Project",
    description: "Connect the Dots is a mobile application to make World building NOW. It connects people globally around shared values and interests.",
    image: "/projects/connect.png?height=600&width=600",
    details: "The goal is to raise awareness of the importance of taking action locally and amplifying your message globally.",
    categories: ["Mobile", "Social Impact", "University"],
    url: "https://www.austral.edu.ar/comunicacion/austral-world-building-lab/"
  }
];



const categories = ["All", ...Array.from(new Set(projects.flatMap((project) => project.categories)))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All"
  ? projects
  : projects.filter((project) => project.categories.includes(filter))

  return (
    <section className="py-20 bg-background" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my projects and solutions.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 mb-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.id}>
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 15 }}
                  >
                    <div>
                      <p className="text-white text-center px-4 pb-6">{project.description}</p>
                      <p className="text-white text-center px-4">{project.details}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((category, index) => (
                    <div key={`${index}-${category}`} className="text-sm font-medium text-black dark:text-white mb-1">{category}</div>
                  ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-2">{project.name}</h3>
                </div>
              </motion.div>
              </a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
