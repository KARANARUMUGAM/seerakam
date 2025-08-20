import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              Seerakam
            </Link>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Empowering food entrepreneurs with structured, stress-free operations. Sell everywhere, manage in one
              place.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://www.linkedin.com/company/seerakam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/seerakampos?igsh=eWFxZGc2bWJqYXUw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Book a Demo
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pos"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  POS System
                </Link>
              </li>
              <li>
                <Link
                  href="/access"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Access Anywhere
                </Link>
              </li>
              <li>
                <Link
                  href="/devices"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Device Support
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  All Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/support"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  24/7 Support
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/policy"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2025 Seerakam Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
