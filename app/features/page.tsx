import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  CreditCard,
  Receipt,
  Package,
  Heart,
  QrCode,
  BarChart3,
  FileText,
  Zap,
  ArrowRight,
  CheckCircle,
  Target,
  Shield,
  TrendingUp,
  Smartphone,
  Globe,
  Clock,
} from "lucide-react"

export default function FeaturesPage() {
  const featureCategories = [
    {
      id: "customer",
      name: "Customer Management",
      icon: Users,
      color: "bg-blue-500",
      features: [
        {
          title: "Built-in CRM Module",
          description: "Capture detailed customer profiles and insights to build stronger relationships.",
        },
        {
          title: "Intelligent Grouping",
          description: "Segment customers based on buying patterns, preferences, and behaviors.",
        },
        {
          title: "Personalized Engagement",
          description: "Create targeted promotions and tailored communication for each customer segment.",
        },
        {
          title: "Loyalty Building",
          description: "Strengthen customer relationships and encourage repeat business with data-driven insights.",
        },
      ],
    },
    {
      id: "payments",
      name: "Payments",
      icon: CreditCard,
      color: "bg-green-500",
      features: [
        {
          title: "Multi-Channel Payments",
          description: "Accept payments across in-store, e-commerce, and mobile channels seamlessly.",
        },
        {
          title: "Multiple Payment Methods",
          description: "Support for various payment options giving customers flexibility in how they pay.",
        },
        {
          title: "Effortless Reconciliation",
          description: "Automated reconciliation ensures error-free financial management.",
        },
        {
          title: "Enhanced Security",
          description: "Every transaction is safe and secure with advanced payment protection.",
        },
      ],
    },
    {
      id: "billing",
      name: "Billing",
      icon: Receipt,
      color: "bg-purple-500",
      features: [
        {
          title: "User-Friendly Interface",
          description: "Clean, intuitive design that requires minimal training for your staff.",
        },
        {
          title: "Quick Processing",
          description: "Process transactions quickly and access essential functions with ease.",
        },
        {
          title: "Error Reduction",
          description: "Streamlined design reduces errors during peak hours and busy periods.",
        },
        {
          title: "Real-time Updates",
          description: "Keep every sale accurate and consistent with instant synchronization.",
        },
      ],
    },
    {
      id: "inventory",
      name: "Inventory Management",
      icon: Package,
      color: "bg-orange-500",
      features: [
        {
          title: "Real-time Tracking",
          description: "Track ingredients and products in real time with complete visibility.",
        },
        {
          title: "Usage Monitoring",
          description: "Monitor usage patterns and gain insights into what's selling and what's not.",
        },
        {
          title: "Waste Reduction",
          description: "Reduce wastage and ensure supplies never run out with smart alerts.",
        },
        {
          title: "Automated Reordering",
          description: "Maintain optimal stock levels with intelligent automated reordering.",
        },
      ],
    },
    {
      id: "loyalty",
      name: "Loyalty Management",
      icon: Heart,
      color: "bg-pink-500",
      features: [
        {
          title: "Centralized Program",
          description: "Manage all loyalty and rewards from one integrated system.",
        },
        {
          title: "Points Tracking",
          description: "Seamlessly track reward points and manage customer redemptions.",
        },
        {
          title: "Personalized Offers",
          description: "Deliver targeted deals and incentives based on individual preferences.",
        },
        {
          title: "Retention Insights",
          description: "Gain valuable insights into customer habits and engagement trends.",
        },
      ],
    },
    {
      id: "traceability",
      name: "Traceability",
      icon: QrCode,
      color: "bg-indigo-500",
      features: [
        {
          title: "Barcode & QR Scanning",
          description: "Advanced traceability with barcode and QR code scanning capabilities.",
        },
        {
          title: "Real-time Tracking",
          description: "Track every ingredient and material from purchase to usage in real time.",
        },
        {
          title: "Audit Efficiency",
          description: "Make audits faster, more accurate, and less labor-intensive.",
        },
        {
          title: "Food Safety Standards",
          description: "Enhance transparency and strengthen food safety compliance.",
        },
      ],
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: BarChart3,
      color: "bg-cyan-500",
      features: [
        {
          title: "Real-time Insights",
          description: "Monitor sales trends, inventory usage, and staff performance instantly.",
        },
        {
          title: "Instant Alerts",
          description: "Stay informed with real-time alerts and notifications.",
        },
        {
          title: "Smart Decisions",
          description: "Make faster and smarter decisions with accurate data at your fingertips.",
        },
        {
          title: "Performance Optimization",
          description: "Identify opportunities and optimize daily operations for maximum efficiency.",
        },
      ],
    },
    {
      id: "content",
      name: "Content Management",
      icon: FileText,
      color: "bg-teal-500",
      features: [
        {
          title: "Dynamic Catalog",
          description: "Create and maintain rich, dynamic product catalogs with ease.",
        },
        {
          title: "Easy Updates",
          description: "Add and update images, descriptions, prices, and categories effortlessly.",
        },
        {
          title: "Multi-Channel Consistency",
          description: "Keep offerings consistent across website, mobile app, and digital platforms.",
        },
        {
          title: "Faster Promotions",
          description: "Launch promotions quickly and highlight bestsellers effectively.",
        },
      ],
    },
    {
      id: "automation",
      name: "Automation",
      icon: Zap,
      color: "bg-yellow-500",
      features: [
        {
          title: "Intelligent Workflows",
          description: "Automate order processing, billing, inventory updates, and staff scheduling.",
        },
        {
          title: "Error Reduction",
          description: "Eliminate repetitive manual work and reduce human errors significantly.",
        },
        {
          title: "Time Savings",
          description: "Allow your team to focus on customer service instead of routine tasks.",
        },
        {
          title: "Seamless Operations",
          description: "Real-time synchronization keeps every aspect of your business connected.",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Complete Feature Set
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Everything You Need to <span className="text-primary">Run Your Business</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From customer management to automation, Seerakam provides a comprehensive suite of features designed to
              streamline operations, reduce complexity, and drive growth for restaurants and retail businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Business Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete feature set designed to handle every aspect of your restaurant or retail business.
            </p>
          </div>

          <Tabs defaultValue="customer" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-8">
              {featureCategories.slice(0, 5).map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {featureCategories.slice(5).map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {featureCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex w-16 h-16 ${category.color} rounded-2xl items-center justify-center mb-4`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{category.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.features.map((feature, index) => (
                    <Card key={index} className="border-border hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Businesses Choose Seerakam</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our integrated approach delivers measurable results and transforms how food businesses operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Increased Efficiency",
                description: "Streamline operations and reduce manual work with intelligent automation.",
              },
              {
                icon: TrendingUp,
                title: "Revenue Growth",
                description: "Unlock new revenue opportunities across multiple sales channels.",
              },
              {
                icon: Shield,
                title: "Reduced Errors",
                description: "Minimize mistakes with automated processes and real-time validation.",
              },
              {
                icon: Clock,
                title: "Time Savings",
                description: "Save valuable time with integrated workflows and smart automation.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                One Platform, Endless Possibilities
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Instead of juggling multiple systems, Seerakam brings everything together in one powerful platform that
                grows with your business.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Unified dashboard for all business operations",
                  "Seamless integration between all features",
                  "Real-time data synchronization across channels",
                  "Scalable solution that grows with your business",
                  "Reduced complexity and operational overhead",
                  "Single source of truth for all business data",
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
                  src="/feature.jpg?height=400&width=500"
                  alt="Seerakam unified platform dashboard"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device & Access */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Access Anywhere, Anytime</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Work from any device, anywhere in the world, with full access to your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Multi-Device Support",
                description: "Works seamlessly across Android, iOS, tablets, and desktops with real-time sync.",
              },
              {
                icon: Globe,
                title: "Cloud-Based Platform",
                description: "Access your business from anywhere with internet connectivity and offline capability.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security ensures your business data is always protected and secure.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience All Features?</h2>
          <p className="text-xl text-secondary-foreground/80 mb-8">
            See how Seerakam's comprehensive feature set can transform your business operations and drive growth.
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
              Book Personalized Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
