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
  Table,
} from "lucide-react"
import { ContactPopup } from "@/components/contact-popup"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/banner-home.png"
            alt="Restaurant POS System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-primary">
            Best Restaurant management software - POS
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sell everywhere, <span className="text-white">manage in one place</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Seerakam is a modern, cloud-based Restaurant management POS system that brings clarity and ease to the chaos of running a food business — from billing and kitchen coordination to inventory and customer management. Built for all kinds of food entrepreneurs, it offers grounded, practical solutions that solve real-world challenges in day-to-day restaurant operations.
            Budget friendly 
Get full access to every Seerakam feature with no hidden fees, no surprise charges, and no extra costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ContactPopup
                triggerText="Get Started"
                triggerVariant="default"
                triggerSize="lg"
                title="Get Started"
                description="Ready to start your journey with Seerakam? Fill out the form below and we'll get you set up."
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
              />
              <ContactPopup
                triggerText="Book a Demo"
                triggerVariant="default"
                triggerSize="lg"
                title="Book a Demo"
                description="Schedule a personalized demo to see how Seerakam can transform your restaurant operations."
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why Choose Seerakam?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto ">
            From small cafe in chennai to restaurant in dubai, it adapts to any kitchen without forcing you to change your workflow. It scales effortlessly from your first bill to multiple branches, offering flexible, human-centered technology that’s easy for staff to use. Seerakam brings enterprise-level tools within reach of small and mid-sized businesses. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Simple & User-Friendly POS */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Simple & User-Friendly POS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-semibold">
                  Fast, intuitive, and built for retail. Our POS makes sales, discounts, and inventory management easy. With quick billing and a clean interface, staff can start instantly—no training needed. Serve customers faster, reduce errors, and keep queues moving in any store size.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Access Anywhere */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Access Anywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-semibold">
                  Manage your business anytime, anywhere. Track sales, inventory, suppliers, and customers from one dashboard—whether online or offline. Always stay updated with real-time visibility and full control.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Works on Any Device */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Budget friendly </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-semibold">
                Get full access to every Seerakam feature with no hidden fees, no surprise charges, and no extra cost.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Restaurant management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Run smarter and scale faster with every tool your food business needs together in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Billing",
                description: "User-friendly POS billing for faster checkouts, fewer errors, and improved customer satisfaction. Real-time updates keep every transaction accurate.",
              },
              {
                icon: Table,
                title: "Table Management",
                description: "Efficiently manage restaurant tables, track occupancy, and optimize seating arrangements for better customer flow and increased revenue.",
              },
              {
                icon: Shield,
                title: "Inventory Management",
                description: "Track ingredients and stock in real time. Reduce waste, automate reordering, and maintain consistent supply for efficient operations and profitability.",
              },
              {
                icon: Users,
                title: "Customer Management",
                description:
                  "Build stronger relationships with a built-in CRM. Capture customer profiles, segment groups, and create targeted promotions to improve loyalty and repeat business.",
              },
              {
                icon: CreditCard,
                title: "Payments",
                description: "Accept payments across all channels—store, online, and mobile. Secure, fast, and flexible with simplified reconciliation for error-free financial management.",
              },
              {
                icon: Smartphone,
                title: "Loyalty Management",
                description: "Centralized rewards system to encourage repeat visits. Track points, manage redemptions, and deliver personalized offers that strengthen customer retention.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-semibold">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button
                variant="default"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Works Seamlessly Across Multiple Devices
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
              Our cloud-based software works effortlessly across Android, iOS, tablets, and desktops, giving restaurant owners the ease to operate on any device from anywhere. By minimizing the need for expensive hardware, It works seamlessly across any device you use.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time data sync across all devices",
                  "Seamless operations from anywhere",
                  "Always up-to-date information",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <img
                  src="/home-2.jpg?height=300&width=400"
                  alt="Multiple devices showing Seerakam POS interface"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-primary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">24/7 Expert Support</h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-3xl mx-auto">
            Get round-the-clock help from retail and tech experts. From setup to troubleshooting, we're always here to keep your business running and growing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support">
              <Button size="lg" className="bg-secondary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Get Support Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="default"
              className="bg-secondary text-primary-foreground hover:bg-primary/90 px-8 py-3"
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
            Join thousands of successful restaurants and owners who trust Seerakam to power their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactPopup
              triggerText="Start Free Trial"
              triggerVariant="default"
              triggerSize="lg"
              title="Start Free Trial"
              description="Try Seerakam risk-free for 14 days. No credit card required. Experience the full power of our platform."
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            />
            <ContactPopup
              triggerText="Schedule Demo"
              triggerVariant="default"
              triggerSize="lg"
              title="Schedule Demo"
              description="Book a personalized demo with our team to see how Seerakam can transform your restaurant operations."
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
