"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { ContactPopup } from "@/components/contact-popup"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { 
    name: "Resources", 
    href: "/resource",
    hasDropdown: true,
    dropdownItems: [
      { name: "Blog", href: "/blog" },
      { name: "Videos", href: "/videos" }
    ]
  },
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
                 const isActive = pathname === item.href || (item.dropdownItems && item.dropdownItems.some(dropItem => pathname === dropItem.href))
                 
                 if (item.hasDropdown) {
                   return (
                     <DropdownMenu key={item.name}>
                       <DropdownMenuTrigger asChild>
                         <button
                           className={`relative px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out group flex items-center gap-1 ${
                             isActive
                               ? "text-white bg-gradient-to-r from-primary to-primary/80 shadow-lg border-2 border-primary/30"
                               : "text-gray-700 hover:text-primary hover:bg-primary/5"
                           }`}
                         >
                           <span className="relative z-10">{item.name}</span>
                           <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                           {isActive && (
                             <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 rounded-lg shadow-inner"></div>
                           )}
                           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 group-hover:w-full"></div>
                         </button>
                       </DropdownMenuTrigger>
                       <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                         {item.dropdownItems?.map((dropdownItem) => (
                           <DropdownMenuItem key={dropdownItem.name} asChild>
                             <Link
                               href={dropdownItem.href}
                               className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                             >
                               {dropdownItem.name}
                             </Link>
                           </DropdownMenuItem>
                         ))}
                       </DropdownMenuContent>
                     </DropdownMenu>
                   )
                 }
                 
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
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            />
            <ContactPopup
              triggerText="Get Started"
              triggerVariant="default"
              triggerSize="default"
              title="Get Started"
              description="Ready to start your journey with Seerakam? Fill out the form below and we'll get you set up."
              className="bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
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
                 const isActive = pathname === item.href || (item.dropdownItems && item.dropdownItems.some(dropItem => pathname === dropItem.href))
                 
                 if (item.hasDropdown) {
                   return (
                     <div key={item.name} className="space-y-1">
                       <div className={`px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-300 relative group ${
                         isActive
                           ? "text-white bg-gradient-to-r from-primary to-primary/80 border-l-4 border-white/50 shadow-lg"
                           : "text-gray-700"
                       }`}>
                         <span className="relative z-10">{item.name}</span>
                         {isActive && (
                           <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 rounded-xl shadow-inner"></div>
                         )}
                       </div>
                       <div className="ml-4 space-y-1">
                         {item.dropdownItems?.map((dropdownItem) => (
                           <Link
                             key={dropdownItem.name}
                             href={dropdownItem.href}
                             className={`block px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 relative group ${
                               pathname === dropdownItem.href
                                 ? "text-primary bg-primary/10 border-l-2 border-primary"
                                 : "text-gray-600 hover:text-primary hover:bg-primary/5"
                             }`}
                             onClick={() => setIsOpen(false)}
                           >
                             {dropdownItem.name}
                           </Link>
                         ))}
                       </div>
                     </div>
                   )
                 }
                 
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
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                />
                <ContactPopup
                  triggerText="Get Started"
                  triggerVariant="default"
                  triggerSize="default"
                  title="Get Started"
                  description="Ready to start your journey with Seerakam? Fill out the form below and we'll get you set up."
                  className="w-full bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
