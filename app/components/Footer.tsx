import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <Link href="/" aria-label="Home" className="mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={160}
                height={160}
                priority
                className="select-none"
                draggable={false}
              />
            </Link>
            <p className="text-muted-foreground text-center md:text-left text-base max-w-xs">
              Rocio Ferreiro — Creative Software Engineer & Blockchain Innovator.
            </p>
          </div>

          {/* Navigation and social */}
          <div className="flex-1 flex flex-col items-center md:items-end gap-6">
            {/* Navigation links */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-8" aria-label="Footer">
              {["About", "Work", "Value", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition"
                >
                  {item}
                </Link>
              ))}
            </nav>
            {/* Social icons */}
            <div className="flex gap-6 mt-2">
              <Link
                href="https://github.com/rocioferreiro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <svg width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.853 0 1.337-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/rocio-ferreiro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <svg width="22" height="22" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            {/* Email or extra info */}
            <div className="mt-4">
              
            </div>
            {/* Copyright */}
            <p className="text-xs text-muted-foreground mt-4">
              &copy; {new Date().getFullYear()} Rocio Ferreiro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}