import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, CheckCircle, ArrowRight, CreditCard, BarChart3, ShoppingCart, UserCheck } from "lucide-react"

export default function POSPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              POS System
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Simple and <span className="text-primary">User-Friendly POS</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Fast, intuitive, and built for retail success. Our versatile POS system is designed to simplify everyday
              operations with a clean, user-friendly interface. Whether it's processing sales, managing discounts, or
              tracking inventory, your staff can get started instantly no complicated training required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Try POS Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
              >
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Quick Billing & Easy Navigation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With quick billing and easy navigation, retail businesses can serve customers faster, reduce errors, and
                keep queues moving smoothly. From small shops to large outlets, our POS adapts to your business needs
                while keeping everything efficient and hassle-free.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Instant transaction processing",
                  "Intuitive interface requires no training",
                  "Reduce checkout errors and delays",
                  "Seamless discount and promotion management",
                  "Real-time inventory updates",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <img
                  src="/poc.jpg?height=400&width=500"
                  alt="Seerakam POS interface showing quick billing"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete POS Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for efficient point-of-sale operations, designed for speed and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast Checkout",
                description: "Process transactions in seconds with our optimized checkout flow.",
              },
              {
                icon: CreditCard,
                title: "Multiple Payment Methods",
                description: "Accept cash, cards, digital wallets, and mobile payments seamlessly.",
              },
              {
                icon: BarChart3,
                title: "Real-time Reporting",
                description: "Get instant insights into sales performance and trends.",
              },
              {
                icon: ShoppingCart,
                title: "Inventory Integration",
                description: "Automatic stock updates with every sale to prevent overselling.",
              },
              {
                icon: Users,
                title: "Staff Management",
                description: "Track employee performance and manage access permissions.",
              },
              {
                icon: UserCheck,
                title: "Customer Profiles",
                description: "Build customer relationships with integrated CRM features.",
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Sales?</h2>
          <p className="text-xl text-secondary-foreground/80 mb-8">
            Experience the power of our user-friendly POS system and see how it can transform your business operations.
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
              triggerVariant="outline"
              triggerSize="lg"
              title="Schedule Demo"
              description="Book a personalized demo with our team to see how Seerakam can transform your restaurant operations."
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
