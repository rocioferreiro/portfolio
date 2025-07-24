import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    name: "R3AL Blocks – CTO",
    description: "Leading technology strategy and development at R3AL Blocks, a platform leveraging blockchain for real world assets.",
    image: "/projects/r3al.png?height=600&width=600",
    details: "Overseeing tech team and product architecture for a blockchain-based financial solution.",
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
    name: "Nerdathon 2025 – SubText Wallet",
    description: "1st place for a conversational wallet for Polkadot to simplify blockchain interactions using natural language.",
    image: "/projects/subtext_wallet.png?height=600&width=600",
    details: "Built with Next.js, Discord API, polkadot.js, LangChain, Supabase, and OpenAI. Supports wallet creation, balance checking, on-chain transfers, and XCM bridging with a natural language interface.",
    categories: ["Hackathon", "Blockchain", "AI", "Innovation"],
    url: "https://subtext-wallet.vercel.app/"
  },
  {
    id: 4,
    name: "Tourismo – Thesis Project",
    description: "A mobile app that generates optimized travel plans based on user-selected attractions.",
    image: "/projects/thesis.png?height=600&width=600",
    details: "Tourismo helps travelers explore cities by creating efficient multi-day itineraries starting and ending at a custom point, like a hotel. Users can personalize, share, edit, and download their plans.",
    categories: ["Mobile", "Automation", "Thesis", "University"],
    url: "https://docs.google.com/presentation/d/1LHwhqucWRrkMSXUSczFg3o3dddurXwizj1mbH_1Lwyk/edit?usp=sharing"
  },
  {
    id: 5,
    name: "Nerdathon 2024 – Polkadot Hackathon",
    description: "2nd place overall for a decentralized loyalty platform built on Polkadot.",
    image: "/projects/loybits.png?height=600&width=600",
    details: "Stack: Next.js, Tailwind, ink! smart contracts, Pinecone.",
    categories: ["Hackathon", "Blockchain", "Innovation"],
    url: "https://loybits.vercel.app"
  },
  {
    id: 6,
    name: "Get Sein – Technical Leader",
    description: "Leading blockchain innovation projects and worked in an EdTech platform called MundosE",
    image: "/projects/mundose.png?height=600&width=600",
    details: "Technologies: React, Next.js, Node.js, MongoDB, Solidity, Remix. MundosE offers university-level diplomas designed by top experts to maximize skill growth.",
    categories: ["Leadership", "Blockchain", "EdTech"],
    url: "https://getsein.com"
  },
  {
    id: 7,
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

export const timelineEvents = [
  {
    year: 2025,
    title: "Professor at Universidad Austral - Current",
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
    title: "CTO at R3AL Blocks - Current",
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