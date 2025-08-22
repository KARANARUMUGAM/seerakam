"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/support" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-secondary text-secondary-foreground shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/seerakam_logo-removebg-preview.png"
                alt="Seerakam Logo"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                      isActive
                        ? " border-b-2 border-primary"
                        : "hover:bg-secondary/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Book a Demo
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-secondary-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                        : "hover:bg-secondary/80"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Book a Demo
                </Button>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
