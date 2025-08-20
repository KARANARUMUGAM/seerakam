import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Store,
  Smartphone,
  Globe,
  Users,
  CreditCard,
  BarChart3,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Omni-Channel Sales Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Sell everywhere, <span className="text-primary">manage in one place</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our unified platform makes it effortless to expand your business across every sales channel whether it's
              in-store, online e-commerce, food delivery aggregators, or social commerce. With everything seamlessly
              connected, you can manage products, inventory, pricing, promotions, and customer data from a single,
              integrated system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Seerakam?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No more juggling multiple dashboards or reconciling scattered reports. Our platform gives you one powerful
              hub to streamline operations, reduce complexity, and unlock more revenue opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Unified Platform */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Unified Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Manage all your sales channels from one integrated system. Connect in-store, online, and delivery
                  platforms seamlessly.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Simple POS */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Simple POS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Fast, intuitive, and built for retail success. Your staff can get started instantly with no
                  complicated training required.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Access Anywhere */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Access Anywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Stay connected to your business anytime, anywhere. Online or offline, you'll always have real-time
                  visibility into your operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Business Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run and grow your food business, all in one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Customer Management",
                description:
                  "Build stronger relationships with detailed customer profiles and intelligent segmentation.",
              },
              {
                icon: CreditCard,
                title: "Advanced Payments",
                description: "Accept payments across multiple channels with seamless reconciliation and security.",
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Gain insights with instant alerts and comprehensive performance monitoring.",
              },
              {
                icon: Shield,
                title: "Complete Traceability",
                description: "Track every ingredient and material with barcode and QR code scanning.",
              },
              {
                icon: Smartphone,
                title: "Multi-Device Support",
                description: "Works seamlessly across Android, iOS, tablets, and desktops.",
              },
              {
                icon: Zap,
                title: "Smart Automation",
                description: "Eliminate repetitive tasks with intelligent workflow automation.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                Device Agnostic
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Works Seamlessly Across Multiple Devices
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our cloud-based software works effortlessly across Android, iOS, tablets, and desktops, giving retailers
                the flexibility to operate on any device. By minimizing the need for expensive hardware, it offers a
                truly device-agnostic solution.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time data sync across all devices",
                  "No expensive hardware requirements",
                  "Seamless operations from anywhere",
                  "Always up-to-date information",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link href="/devices">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn More About Device Support
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <img
                  src="/4403.jpg?height=300&width=400"
                  alt="Multiple devices showing Seerakam POS interface"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Support Round the Clock</h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-3xl mx-auto">
            Our team of retail specialists and technical experts is available 24/7, every day of the year, to provide
            guidance and resolve issues quickly. Whether it's troubleshooting, setup assistance, or strategic advice,
            we're always here to support your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Get Support Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent px-8 py-3"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of successful restaurants and retailers who trust Seerakam to power their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
