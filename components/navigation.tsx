"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { ContactPopup } from "@/components/contact-popup"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resource", href: "/resource" },
  { name: "Contact Us", href: "/support" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-secondary/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg w-full sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
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
            <div className="ml-10 flex items-baseline space-x-1">
               {navigationItems.map((item) => {
                 const isActive = pathname === item.href
                 return (
                   <Link
                     key={item.name}
                     href={item.href}
                     className={`relative px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out group ${
                       isActive
                         ? "text-white bg-gradient-to-r from-primary to-primary/80 shadow-lg border-2 border-primary/30"
                         : "text-gray-700 hover:text-primary hover:bg-primary/5"
                     }`}
                   >
                     <span className="relative z-10">{item.name}</span>
                     {isActive && (
                       <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 rounded-lg shadow-inner"></div>
                     )}
                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 group-hover:w-full"></div>
                   </Link>
                 )
               })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <ContactPopup
              triggerText="Book a Demo"
              triggerVariant="outline"
              triggerSize="default"
              title="Book a Demo"
              description="Schedule a personalized demo to see how Seerakam can transform your restaurant operations."
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            />
            <ContactPopup
              triggerText="Get Started"
              triggerVariant="default"
              triggerSize="default"
              title="Get Started"
              description="Ready to start your journey with Seerakam? Fill out the form below and we'll get you set up."
              className="bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
               {navigationItems.map((item) => {
                 const isActive = pathname === item.href
                 return (
                   <Link
                     key={item.name}
                     href={item.href}
                     className={`block px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-300 relative group ${
                       isActive
                         ? "text-white bg-gradient-to-r from-primary to-primary/80 border-l-4 border-white/50 shadow-lg"
                         : "text-gray-700 hover:text-primary hover:bg-primary/5"
                     }`}
                     onClick={() => setIsOpen(false)}
                   >
                     <span className="relative z-10">{item.name}</span>
                     {isActive && (
                       <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 rounded-xl shadow-inner"></div>
                     )}
                     <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 group-hover:w-full"></div>
                   </Link>
                 )
               })}
              <div className="pt-6 space-y-3 border-t border-gray-200/50 mt-4">
                <ContactPopup
                  triggerText="Book a Demo"
                  triggerVariant="outline"
                  triggerSize="default"
                  title="Book a Demo"
                  description="Schedule a personalized demo to see how Seerakam can transform your restaurant operations."
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                />
                <ContactPopup
                  triggerText="Get Started"
                  triggerVariant="default"
                  triggerSize="default"
                  title="Get Started"
                  description="Ready to start your journey with Seerakam? Fill out the form below and we'll get you set up."
                  className="w-full bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
