import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, WifiOff, Eye, CheckCircle, ArrowRight, BarChart3, Users, Package } from "lucide-react"
import { ContactPopup } from "@/components/contact-popup"

export default function AccessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Remote Access
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Access from <span className="text-primary">Anywhere and Everywhere</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you're in the store, at home, or on the go, our all-in-one platform gives you the freedom to
              manage your business from anywhere. Online or offline, you can oversee sales, track inventory, manage
              suppliers, and engage with customers all from a single, intuitive dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Try Remote Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
              >
                See Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <img
                  src="/access.jpg?height=400&width=500"
                  alt="Remote business management dashboard"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Real-time Visibility</h2>
              <p className="text-lg text-muted-foreground mb-6">
                No matter where you are, you'll always have real-time visibility into your operations, ensuring you
                never miss a detail. Run your business with confidence, knowing you're always in control.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Monitor sales and performance in real-time",
                  "Track inventory levels from anywhere",
                  "Manage staff and schedules remotely",
                  "Engage with customers on the go",
                  "Access detailed reports and analytics",
                  "Works online and offline seamlessly",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Remote Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay connected to every aspect of your business with comprehensive remote access capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Real-time Dashboard",
                description: "Get instant overview of sales, inventory, and performance metrics.",
              },
              {
                icon: Wifi,
                title: "Online Operations",
                description: "Full functionality when connected to the internet with live sync.",
              },
              {
                icon: WifiOff,
                title: "Offline Capability",
                description: "Continue operations even without internet, sync when reconnected.",
              },
              {
                icon: BarChart3,
                title: "Live Analytics",
                description: "Monitor trends and performance with real-time data visualization.",
              },
              {
                icon: Package,
                title: "Inventory Tracking",
                description: "Keep track of stock levels and get alerts for low inventory.",
              },
              {
                icon: Users,
                title: "Team Management",
                description: "Oversee staff performance and manage schedules remotely.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Control from Anywhere</h2>
          <p className="text-xl text-secondary-foreground/80 mb-8">
            Experience the freedom of managing your business remotely with complete visibility and control.
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
            <Button
              size="lg"
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            >
              Book Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
