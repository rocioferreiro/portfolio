// Global meta configuration for the portfolio
export const siteConfig = {
  name: "Rocio Ferreiro",
  title: "Rocio Ferreiro | Software & Blockchain Engineer",
  description: "Software Engineer specializing in blockchain development, full-stack web applications, and mobile development. Expert in React, Next.js, Solidity, and Web3.",
  url: "https://rocioferreiro.com",
  ogImage: "https://www.rocioferreiro.com/hero_image.png",
  creator: "@rocioferreiro",
  
  // Contact information
  email: "rocio.m.ferreiro@gmail.com",
  github: "https://github.com/rocioferreiro",
  linkedin: "https://linkedin.com/in/rocio-ferreiro",
  twitter: "https://twitter.com/rocioferre40871",
  
  // Professional details
  jobTitle: "Software Engineer",
  company: "R3AL Blocks",
  location: "Argentina",
  
  skills: [
    "Software Engineering",
    "Blockchain Development", 
    "Full Stack Development",
    "React",
    "Next.js",
    "Node.js",
    "Solidity",
    "Web3",
    "TypeScript",
    "JavaScript",
    "Mobile Development"
  ],
  
  // Target keywords
  keywords: [
    "Rocio Ferreiro",
    "Software Engineer",
    "Blockchain Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Expert",
    "Solidity Developer",
    "Web3 Development",
    "TypeScript Development",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Software Engineer Portfolio",
    "Blockchain Portfolio"
  ]
} as const

// Navigation structure for breadcrumbs
export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" }
] as const
