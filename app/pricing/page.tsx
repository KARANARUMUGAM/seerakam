import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactPopup } from "@/components/contact-popup"
import {
  CheckCircle,
  ArrowRight,
  Star,
  Crown,
  Zap,
  Building,
  Users,
  CreditCard,
  Package,
  Heart,
  QrCode,
  BarChart3,
  FileText,
  Settings,
  Monitor,
  Truck,
  Calculator,
  BookOpen,
  PieChart,
} from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "STARTER",
      monthlyPrice: "416",
      annualPrice: "6,000",
      discountedAnnualPrice: "3,996",
      period: "per month outlet",
      description: "Perfect for small cafe, bristo and coffee shop getting started",
      features: [
        "POS Billing & KOT",
        "Menu & Table Management",
        "Customer Management",
        "Inventory Mgmt (Finished + Raw)",
        "Setup & Migration",
      ],
      setupPrice: "4,999",
      popular: false,
      icon: Star,
    },
    {
      name: "TREAT",
      monthlyPrice: "708",
      annualPrice: "10,000",
      discountedAnnualPrice: "6,797",
      period: "per month outlet",
      description: "Recommended for mid size restaurants",
      features: [
        "POS Billing & KOT",
        "Menu & Table Management",
        "Customer Management",
        "Inventory Mgmt (Finished + Raw)",
        "Setup & Migration",
        "Multi-location Inventory & Reporting",
        "Vendor & Purchase Order Mgmt",
      ],
      setupPrice: "8,499",
      popular: true,
      icon: Crown,
    },
    {
      name: "FULL COURSE",
      monthlyPrice: "1083",
      annualPrice: "15,000",
      discountedAnnualPrice: "10,397",
      period: "per month outlet",
      description: "Complete solution for established restaurants",
      features: [
        "POS Billing & KOT",
        "Menu & Table Management",
        "Customer Management",
        "Inventory Mgmt (Finished + Raw)",
        "Setup & Migration",
        "Multi-location Inventory & Reporting",
        "Vendor & Purchase Order Mgmt",
        "Order Display System",
        "Kitchen Display System (KDS)",
        "API Integrations & Custom Reports",
      ],
      setupPrice: "12,999",
      popular: false,
      icon: Zap,
    },
  ]

  const enterprisePlan = {
    name: "Enterprise",
    description: "Customizable solution for large business",
    features: [
      "Custom pricing based on your needs",
      "Dedicated account manager",
      "Custom integrations",
      "Priority support",
      "Advanced analytics",
      "Multi-brand management",
      "Custom reporting",
      "API access",
      "White-label options",
      "Training and onboarding",
    ],
    icon: Building,
  }

  const featureIcons = {
    "POS Billing & KOT": CreditCard,
    "Menu & Table Management": FileText,
    "Customer Management": Users,
    "Inventory Mgmt (Finished + Raw)": Package,
    "Setup & Migration": Settings,
    "Multi-location Inventory & Reporting": BarChart3,
    "Vendor & Purchase Order Mgmt": Truck,
    "Kitchen Display System (KDS)": Monitor,
    "Order Display System": Monitor,
    "API Integrations & Custom Reports": PieChart,
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/banner-pricing.png"
            alt="Pricing Plans and Analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Choose the <span className="text-primary">Perfect Plan</span> for Your Business
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              From small tea stalls to multi-branch hotels, we have a plan that fits your business size and growth stage. 
              All plans include setup and migration support to get you started quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ContactPopup
                triggerText="Try for Free"
                triggerVariant="default"
                triggerSize="lg"
                title="Try for Free"
                description="Try Seerakam risk-free for 14 days. No credit card required. Experience the full power of our platform."
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
              />
              <Button
                size="lg"
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees, no surprises. Choose the plan that works best for your business and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-border hover:shadow-lg transition-shadow relative flex flex-col h-full ${
                  plan.popular ? 'ring-2 ring-primary shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    RECOMMENDED
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-muted-foreground line-through">₹{plan.annualPrice}</span>
                        <span className="text-sm text-muted-foreground">/year</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl font-bold text-foreground">₹{plan.monthlyPrice}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                      <div className="text-sm text-primary font-semibold">
                        Save 20% with Annual Plan
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-muted-foreground">
                    Setup & Migration: ₹{plan.setupPrice} per annum/outlet
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, featureIndex) => {
                      const IconComponent = featureIcons[feature as keyof typeof featureIcons] || CheckCircle
                      return (
                        <li key={featureIndex} className="flex items-start">
                          <IconComponent className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      )
                    })}
                  </ul>
                  <Button 
                    className="w-full mt-auto bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Try for Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <enterprisePlan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{enterprisePlan.name}</h3>
                    <p className="text-muted-foreground">{enterprisePlan.description}</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  For large businesses with complex requirements, we offer custom solutions tailored to your specific needs. 
                  Get in touch with our sales team to discuss your requirements and receive a personalized quote.
                </p>
                <ContactPopup 
                  triggerText="Contact Sales Team"
                  triggerVariant="default"
                  triggerSize="lg"
                  title="Contact Sales Team"
                  description="Get in touch with our sales team to discuss your enterprise requirements and receive a personalized quote."
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Enterprise Features Include:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {enterprisePlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Is there a trial period for each plan?",
                answer: "Yes , we  provide a trial period of 7 days for each plan. This allows you to explore the features and functionalities of Seerakam Restaurant POS Software before making a commitment."
              },
              {
                question: "What does 'Addon' mean in the pricing structure?",
                answer: "'Addon' refers to additional features or services that can be integrated into your existing plan for an extra cost. If you need extra user access or specific additional features, you can explore our addon options to enhance your experience."
              },
              {
                question: "Is Seerakam available for international customers?",
                answer: "Yes, Seerakam is proud to be trusted by customers in 11 international countries. Whether you operate in different regions or have a global presence, our Restaurant POS Software is designed to meet the needs of businesses worldwide."
              },
              {
                question: "Can I upgrade or downgrade my plan later?",
                answer: "Yes, you can easily upgrade or downgrade your plan at any time. Our flexible pricing structure allows you to scale your plan according to your business needs."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-3xl mx-auto">
            Choose the plan that fits your business and start transforming your restaurant operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactPopup
              triggerText="Try for Free"
              triggerVariant="default"
              triggerSize="lg"
              title="Try for Free"
              description="Try Seerakam risk-free for 14 days. No credit card required. Experience the full power of our platform."
              className="bg-secondary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            />
            <ContactPopup 
              triggerText="Schedule Demo"
              triggerVariant="outline"
              triggerSize="lg"
              title="Schedule a Demo"
              description="Book a personalized demo to see how Seerakam can transform your restaurant operations."
              className="border-secondary text-white hover:bg-secondary hover:text-secondary-foreground bg-transparent px-8 py-3"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
