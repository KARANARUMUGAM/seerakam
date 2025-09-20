import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactPopup } from "@/components/contact-popup"
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
  Smartphone as Mobile,
  QrCode as QRCode,
  ShoppingCart,
  Truck,
  Calculator,
  ChefHat,
  Monitor,
  Printer,
  BookOpen,
  PieChart,
  Building,
  Calendar,
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
          description: "Build stronger relationships with a built-in CRM. Capture customer profiles, segment groups, and create targeted promotions to improve loyalty and repeat business.",
        },
        {
          title: "Intelligent Grouping",
          description: "Segment customers based on buying patterns, preferences, and behaviors for targeted marketing.",
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
          description: "Accept payments across all channels—store, online, and mobile. Secure, fast, and flexible with simplified reconciliation for error-free financial management.",
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
          description: "User-friendly POS billing for faster checkouts, fewer errors, and improved customer satisfaction. Real-time updates keep every transaction accurate.",
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
          description: "Track ingredients and stock in real time. Reduce waste, automate reordering, and maintain consistent supply for efficient operations and profitability.",
        },
        {
          title: "Usage Monitoring",
          description: "Monitor usage patterns and gain insights into what's selling and what's not.",
        },
        {
          title: "Batch Management",
          description: "From purchase to point-of-sale, track every batch and expiry date effortlessly.",
        },
        {
          title: "Stock adjustment",
          description: "Correct errors, manage returns, and update stock counts instantly with smart adjustment",
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
          description: "Centralized rewards system to encourage repeat visits. Track points, manage redemptions, and deliver personalized offers that strengthen customer retention.",
        },
        {
          title: "Points Tracking",
          description: "Seamlessly track reward points and manage customer redemptions.",
        },
        {
          title: "Personalized Offers",
          description: "Deliver targeted deals and incentives based on individual preferences.",
        },
      ],
    },
    {
      id: "table-management",
      name: "Table Management",
      icon: QrCode,
      color: "bg-indigo-500",
      features: [
        {
          title: "Table availability",
          description: "Instantly view and manage table occupancy for faster turnarounds.",
        },
        {
          title: "Reservations",
          description: "Accept, track, and organize reservations with ease—no missed bookings",
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
          description: "Monitor sales, inventory, and performance in real time. Identify trends, optimize menus, and make data-driven decisions with instant insights.",
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
      name: "Menu Management",
      icon: FileText,
      color: "bg-teal-500",
      features: [
        {
          title: "Centralized Menu",
          description: "Easily manage menus, pricing, and offers across all outlets with centralized control",
        },
        {
          title: "Item customization",
          description: "Manage add-ons, combos, and item variations with ease and precision.",
        },
        {
          title: "Tax Management",
          description: "Automatically apply region-specific taxes to your menu pricing.",
        },
        {
          title: "Pricing group",
          description: "Set different pricing groups for dine-in, takeaway, and delivery with ease.",
        },
      ],
    },
    {
      id: "automation",
      name: "Aggregrators",
      icon: Zap,
      color: "bg-yellow-500",
      features: [
        {
          title: "Aggregators",
          description: "Order acceptance to fulfillment, aggregator integration ensures every online transaction is synchronized with your POS, reducing manual errors",
        },
        {
          title: "Payments",
          description: "UPI and credit cards to digital wallets and net banking, Seerakam connects with multiple payment providers in one system.",
        },
      ],
    },
  ]

  const mobileApps = [
    {
      icon: Receipt,
      title: "Point of Sale",
      description: "Fast and intuitive point-of-sale billing system for quick transactions.",
      logo: "/Asset 26xxxhdpi.png",
    },
    {
      icon: Users,
      title: "Captain App",
      description: "Mobile app for staff to manage orders and customer interactions efficiently.",
      logo: "/Asset 27xxxhdpi.png",
    },
    {
      icon: Monitor,
      title: "Kitchen Display System",
      description: "Streamline kitchen operations with real-time order display and status updates",
      logo: "/Asset 29xxxhdpi.png",
    },
    {
      icon: Monitor,
      title: "Order Display System",
      description: "Enhance guest experience with live order status on digital screens",
      logo: "/Asset 28xxxhdpi.png",
    },
    {
      icon: BarChart3,
      title: "Owner Analytics",
      description: "Get powerful insights and real-time reports to track sales, costs, and growth",
      logo: "/Asset 30xxxhdpi.png",
    },
  ]

  const additionalFeatures = [
    {
      icon: CreditCard,
      title: "Payment Device Integration",
      description: "Connect with various payment devices and methods.",
    },
    {
      icon: Building,
      title: "Multi Store Management",
      description: "Manage multiple locations from a single dashboard.",
    },
    {
      icon: Shield,
      title: "Multi Brand Management",
      description: "Handle multiple brands under one system.",
    },
    {
      icon: ChefHat,
      title: "Kitchen Management",
      description: "Streamlined kitchen operations and order management.",
    },
    {
      icon: Monitor,
      title: "Kitchen Display System (KDS)",
      description: "Digital display system for kitchen staff.",
    },
    {
      icon: Monitor,
      title: "Order Display System",
      description: "Real-time order tracking and display system.",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Comprehensive inventory tracking and management.",
    },
    {
      icon: BookOpen,
      title: "Recipe Management",
      description: "Manage recipes and ingredient requirements.",
    },
    {
      icon: Heart,
      title: "Loyalty Management",
      description: "Customer loyalty and rewards program management.",
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Complete customer relationship management system.",
    },
    {
      icon: Truck,
      title: "Vendor Management",
      description: "Manage suppliers and purchase orders efficiently.",
    },
    {
      icon: Printer,
      title: "Food Label Printing",
      description: "Print food labels and nutritional information.",
    },
    {
      icon: Calculator,
      title: "Accounting Books",
      description: "Integrated accounting and financial management.",
    },
    {
      icon: PieChart,
      title: "Analytics App",
      description: "Comprehensive business analytics and reporting.",
    },
    {
      icon: Calendar,
      title: "EVENTS",
      description: "Manage catering and events with custom menus, advance bookings, bulk billing",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/banner-feature.png"
            alt="Hotel Management Features"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center">
            {/* <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Complete Feature Set
            </Badge> */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Everything You Need to <span className="text-primary">Run Your Hotel Business</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            From Order billing to automation, Seerakam provides a comprehensive suite of features designed to streamline operations, reduce complexity, and drive growth for restaurants and cafe businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </div>
      </section>

      {/* Mobile Applications */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Five Mobile Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our suite of mobile applications designed to enhance your restaurant operations and customer experience.
            </p>
          </div>

          <div className="space-y-8">
            {/* First row - 3 applications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mobileApps.slice(0, 3).map((app, index) => (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-[75px] h-[75px] mb-4">
                      <img 
                        src={app.logo} 
                        alt={`${app.title} logo`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <CardTitle className="text-lg">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center font-semibold">{app.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Second row - 2 applications centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {mobileApps.slice(3, 5).map((app, index) => (
                  <Card key={index + 3} className="border-border hover:shadow-md transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-[75px] h-[75px] mb-4">
                        <img 
                          src={app.logo} 
                          alt={`${app.title} logo`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <CardTitle className="text-lg">{app.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center font-semibold">{app.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Restaurant Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete feature set designed to handle every aspect of your restaurant or cafe business.
            </p>
          </div>

          <Tabs defaultValue="customer" className="w-full">
            <div className="overflow-x-auto mb-8">
              <TabsList className="inline-flex w-max min-w-full bg-gray-100">
                {featureCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm whitespace-nowrap px-3 sm:px-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

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

      {/* Additional Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Feature Suite</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature you need to run a successful restaurant business, all in one integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="h-5 w-5 text-white" />
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
                  <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
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
                Balanced Tech Effortless Operation
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
                  src="/feature1.jpg?height=400&width=500"
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
                  <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
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
      <section className="py-16 bg-primary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience All Features?</h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-3xl mx-auto">
            See how Seerakam's comprehensive feature set can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactPopup
              triggerText="Start Free Trial"
              triggerVariant="default"
              triggerSize="lg"
              title="Start Free Trial"
              description="Try Seerakam risk-free for 14 days. No credit card required. Experience the full power of our platform."
              className="bg-secondary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            />
            <Button
              size="lg"
              variant="default"
              className="bg-secondary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            >
              Book Personalized Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
