import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Phone,
  MessageCircle,
  Mail,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Headphones,
  Settings,
  TrendingUp,
  HelpCircle,
} from "lucide-react"

export default function SupportPage() {
  const faqs = [
    {
      question: "How can I sign up for Seerakam Restaurant POS Software?",
      answer: "To sign up for Seerakam, visit our official website and click on the 'Start a Free Trial' button. Follow the registration process to create your account and begin using our Restaurant POS Software."
    },
    {
      question: "Is there a trial period for each plan?",
      answer: "Yes, we provide a trial period for each plan. This allows you to explore the features and functionalities of Seerakam Restaurant POS Software before making a commitment."
    },
    {
      question: "What are the available plans for Seerakam?",
      answer: "Seerakam offers three main plans to cater to different needs: STARTER, FOUNDER TREAT, and FULL COURSE. For details on features and capabilities, please visit our website or contact our sales team."
    },
    {
      question: "Is Seerakam available for international customers?",
      answer: "Yes, Seerakam is proud to be trusted by customers in 11 international countries. Whether you operate in different regions or have a global presence, our Restaurant POS Software is designed to meet the needs of businesses worldwide. Feel free to contact our sales team for more information on international pricing and support."
    },
    {
      question: "Is there an enterprise plan for large businesses?",
      answer: "Absolutely, we offer an enterprise plan that can be tailored to the specific requirements of large businesses. For more information on this customizable solution, please reach out to our sales team."
    },
    {
      question: "What does 'Addon' mean in the pricing structure?",
      answer: "'Addon' refers to additional features or services that can be integrated into your existing plan for an extra cost. If you need extra user access or specific additional features, you can explore our addon options to enhance your experience."
    },
    {
      question: "How do I contact customer support?",
      answer: "Reach us anytime, 24/7! You can call us, email at support@seerakam.com, or use live chat on our website for quick assistance. We're here to help!"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              24/7 Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Expert Support <span className="text-primary">Round the Clock</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our team of retail specialists and technical experts is available 24/7, every day of the year, to provide
              guidance and resolve issues quickly. Whether it's troubleshooting, setup assistance, or strategic advice,
              we're always here to support your business and help accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Get Support Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Multiple Ways to Get Help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the support channel that works best for you. Our experts are ready to help through any method you
              prefer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Phone Support",
                description: "Speak directly with our experts",
                details: "Immediate assistance for urgent issues",
                availability: "24/7 Available",
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Quick answers to your questions",
                details: "Real-time chat with support agents",
                availability: "24/7 Available",
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Detailed help for complex issues",
                details: "Comprehensive solutions via email",
                availability: "Response within 2 hours",
              },
            ].map((channel, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <channel.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{channel.details}</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {channel.availability}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about Seerakam and our services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <HelpCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Comprehensive Support Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                From technical troubleshooting to strategic business advice, our support team covers all aspects of your
                business needs.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Technical troubleshooting and bug fixes",
                  "Setup assistance and onboarding",
                  "Strategic business advice and consultation",
                  "Training for you and your staff",
                  "Integration support with third-party services",
                  "Performance optimization recommendations",
                ].map((service, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <img
                  src="/support.jpg?height=400&width=500"
                  alt="Seerakam support team providing assistance"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Our Support Stands Out</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just fix problems – we help your business grow with expert guidance and proactive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Retail Specialists",
                description:
                  "Our team understands the unique challenges of restaurant and retail businesses, providing industry-specific solutions.",
              },
              {
                icon: Settings,
                title: "Technical Experts",
                description:
                  "Certified technical professionals who know our platform inside and out, ensuring quick problem resolution.",
              },
              {
                icon: TrendingUp,
                title: "Growth Partners",
                description:
                  "We don't just provide support – we help you optimize operations and identify opportunities for growth.",
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

      {/* Self-Service Resources */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Self-Service Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers quickly with our comprehensive knowledge base and learning resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Knowledge Base",
                description: "Comprehensive guides and tutorials",
                link: "#",
              },
              {
                icon: Headphones,
                title: "Video Tutorials",
                description: "Step-by-step video instructions",
                link: "#",
              },
            ].map((resource, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Explore Resources
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help? We're Here for You</h2>
          <p className="text-xl text-secondary-foreground/80 mb-8">
            Don't let technical issues slow down your business. Get expert help whenever you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
            >
              Browse Help Center
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
