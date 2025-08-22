import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Award,
  Building,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Seerakam</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              At Seerakam, we believe running a food business should be simple, structured, and growth-focused. From tea stalls to multi-branch hotels, we help owners overcome chaotic operations, inventory shortages, and rising pressures with one integrated platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                More Than Just POS—It's a Complete Operations Solution
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Seerakam is more than just POS—it's a complete operations solution for billing, inventory, loyalty, analytics, and more. By centralizing processes, we reduce errors, save time, and give entrepreneurs the clarity and control to scale with confidence.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform provides structure where there was disorder, creating organized workflows and processes that help food businesses thrive in today's fast-moving industry.
              </p>
              <ul className="space-y-3">
                {[
                  "Centralized operations management",
                  "Reduced errors and improved accuracy",
                  "Time-saving automation features",
                  "Scalable solution for growth",
                ].map((point, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <img
                  src="/about1.jpg?height=400&width=500"
                  alt="Food entrepreneurs working with Seerakam platform"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Sets Seerakam Apart</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seerakam was created to answer the need for a comprehensive operations platform designed specifically for
              the food industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8">
                <img
                  src="/about2.jpg?height=400&width=500"
                  alt="Comprehensive POS and operations platform"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">More Than Just a POS System</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Seerakam is not just a POS system but a comprehensive operations platform designed to handle everything
                from billing and inventory to customer loyalty, analytics, and beyond. By connecting all essential
                processes into one integrated system, we make it easier for food businesses to stay in control, reduce
                errors, and operate with clarity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Target, title: "Focused Solution", desc: "Built specifically for food businesses" },
                  { icon: Zap, title: "Integrated Platform", desc: "All features work seamlessly together" },
                  { icon: Shield, title: "Reliable Partner", desc: "Works quietly in the background" },
                  { icon: TrendingUp, title: "Growth Enabler", desc: "Scales with your business needs" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simplifying Restaurant Management</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We simplify restaurant management so owners can focus on serving great food and creating memorable experiences. By streamlining workflows, automating tasks, and improving accuracy, Seerakam drives efficiency, transparency, and profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Lightbulb,
                title: "Clarity Over Confusion",
                description:
                  "We deliver clarity where there was once confusion, bringing order to chaotic operations with structured systems.",
              },
              {
                icon: Building,
                title: "Structure Over Disorder",
                description:
                  "Our platform provides structure where there was disorder, creating organized workflows and processes.",
              },
              {
                icon: TrendingUp,
                title: "Growth Over Limitations",
                description:
                  "We enable growth where there were limitations, helping businesses scale without operational chaos.",
              },
            ].map((impact, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <impact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{impact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{impact.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">With Seerakam, food entrepreneurs gain the freedom to grow without chaos.</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our solutions go beyond promises. By streamlining workflows, reducing errors, and automating critical
                tasks, we save valuable time and resources for food businesses of all sizes. This efficiency not only
                prevents wastage and improves accuracy but also creates the foundation for sustainable growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { metric: "Greater Transparency", desc: "Clear visibility into all operations" },
                  { metric: "Higher Productivity", desc: "Streamlined workflows and automation" },
                  { metric: "Stronger Profitability", desc: "Reduced waste and improved efficiency" },
                ].map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{result.metric}</h4>
                    <p className="text-sm text-muted-foreground">{result.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals leading Seerakam's mission to transform restaurant management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CEO */}
            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">CEO Selvaraj Murugaiyan</CardTitle>
                    <CardDescription>Technology and Business Professional</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I am a technology and business professional with over 24 years of experience, now leading Seerakam to transform restaurant management through innovation. My career began in healthcare IT, where I worked with 30+ EHR systems and 350+ healthcare organizations across the US, gaining expertise in revenue cycle management, medical billing, and operational efficiency.
                </p>
                <p className="text-muted-foreground mb-4">
                  With Seerakam, I am channeling this experience into the restaurant industry—building smart solutions for billing, inventory, analytics, and customer loyalty that help entrepreneurs simplify operations and focus on growth. My vision is for Seerakam to remain at the forefront of restaurant innovation, enabling restaurants of all sizes to thrive through smart technology.
                </p>
              </CardContent>
            </Card>

            {/* COO */}
            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">COO – Mr. Ram</CardTitle>
                    <CardDescription>XLRI Alumnus & IT Professional</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mr. Ram, an alumnus of XLRI, is an accomplished IT professional with 16+ years of experience in IT infrastructure. He holds multiple global certifications including PMP, ITIL V3, ISO 27001 Lead Auditor, and IBM Advisory Project Manager. His expertise covers operations, project management, service delivery, and compliance, helping him drive both strategy and execution with excellence.
                </p>
                <p className="text-muted-foreground mb-4">
                  He has led large teams and complex projects across multinational organizations, combining structured process management with practical problem-solving. Known for his people-first leadership, Mr. Ram inspires collaboration, innovation, and high performance.
                </p>
                <p className="text-muted-foreground">
                  At Seerakam, he plays a key role in aligning people, processes, and technology, strengthening our commitment to innovation, efficiency, and customer success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Entrepreneurs with Confidence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                What sets Seerakam apart is its focus on empowering entrepreneurs with confidence. It works quietly in
                the background as a reliable partner, ensuring smooth workflows, precise tracking, and effortless
                management, so owners can focus on their customers and staff.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With Seerakam, food businesses gain the clarity to make smarter decisions, the control to scale
                efficiently, and the freedom to focus on delivering exceptional dining experiences.
              </p>
              <ul className="space-y-4">
                {[
                  "Clarity to make smarter business decisions",
                  "Control to scale operations efficiently",
                  "Freedom to focus on customer experience",
                  "Confidence to grow without operational chaos",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <img
                  src="/about3.avif?height=400&width=500"
                  alt="Confident food entrepreneurs using Seerakam"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve food entrepreneurs worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Customer-Centric",
                description: "Every decision is made with our customers' success in mind.",
              },
              {
                icon: Shield,
                title: "Reliability",
                description: "We build dependable solutions that work when you need them most.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Continuously improving to meet evolving business needs.",
              },
              {
                icon: Heart,
                title: "Empowerment",
                description: "Giving entrepreneurs the tools and confidence to succeed.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Seerakam Community</h2>
          <p className="text-xl text-secondary-foreground/80 mb-8">
            Become part of a growing community of successful food entrepreneurs who trust Seerakam to power their
            operations and drive their growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
