"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X } from "lucide-react"

const navItems = {
  en: [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/benefits", label: "Benefits" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  ka: [
    { href: "/", label: "მთავარი" },
    { href: "/how-it-works", label: "როგორ მუშაობს" },
    { href: "/benefits", label: "უპირატესობები" },
    { href: "/about", label: "ჩვენ შესახებ" },
    { href: "/contact", label: "კონტაქტი" },
  ],
}

export function Navigation() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/smartskin-logo.jpeg" alt="SmartSkin Logo" width={40} height={40} className="rounded-lg" />
          <span className="text-2xl font-bold text-white">SmartSkin</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems[language].map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? "active" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher onLanguageChange={setLanguage} currentLanguage={language} />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col p-4">
            {navItems[language].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link py-3 ${pathname === item.href ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navigation
