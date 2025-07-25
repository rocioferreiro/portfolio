"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Rocio Ferreiro</span>
            <img
              className="h-8 w-auto"
              src="/logo.png"
              alt="Rocios Logo"
            />
          </Link>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-x-12">
          <Link
            href="#portfolio"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
        {/* Theme toggle and mobile menu button */}
        <div className="flex flex-1 justify-end items-center gap-2">
          {mounted && (
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted transition"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-blue-600" />
              )}
            </button>
          )}
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-muted transition"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </nav>
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-70"
              onClick={() => setMenuOpen(false)}
            />
            {/* Menu content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm z-100 flex flex-col"
            >
              <div className="flex justify-end p-4">
                <button
                  className="p-2 rounded-full hover:bg-muted transition"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6 text-foreground" />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 gap-8 bg-background/80 backdrop-blur-sm">
                <Link
                  href="#work"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Work
                </Link>
                <Link
                  href="#about"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors pb-6"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}