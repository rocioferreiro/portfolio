"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { projects } from "@/lib/data"

const categories = ["All", ...Array.from(new Set(projects.flatMap((project) => project.categories)))]

export default function PortfolioGrid() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"])

  const filteredProjects = selectedFilters.includes("All") || selectedFilters.length === 0
    ? projects
    : projects.filter((project) => 
        project.categories.some(category => selectedFilters.includes(category))
      )

  return (
    <section className="py-20 bg-background" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl" aria-label="Rocio Ferreiro Software Engineering Projects">My work</h2>
          <h3 className="text-xl font-semibold text-foreground mt-2" aria-label="Blockchain Development & Innovation Solutions">Innovative Solutions</h3>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my software engineering projects, blockchain development solutions, and innovation development work.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {categories.map((category) => {
            const isSelected = selectedFilters.includes(category);
            
            const handleFilterClick = () => {
              if (category === "All") {
                setSelectedFilters(["All"]);
              } else {
                setSelectedFilters(prev => {
                  const withoutAll = prev.filter(f => f !== "All");
                  
                  if (prev.includes(category)) {
                    // Remove the category
                    const newFilters = withoutAll.filter(f => f !== category);
                    return newFilters.length === 0 ? ["All"] : newFilters;
                  } else {
                    // Add the category
                    return [...withoutAll, category];
                  }
                });
              }
            };

            return (
              <button
                key={category}
                onClick={handleFilterClick}
                className={`px-4 py-2 mb-2 rounded-full text-sm font-medium transition-colors ${
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            );
          })}
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
