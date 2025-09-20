import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Tablet,
  Monitor,
  Cloud,
  FolderSyncIcon as Sync,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react"

export default function DevicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Multi-Device Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Works Seamlessly Across <span className="text-primary">Multiple Devices</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our cloud-based software works effortlessly across Android, iOS, tablets, and desktops, giving retailers
              the flexibility to operate on any device. By minimizing the need for expensive hardware, it offers a truly
              device-agnostic solution that keeps your business running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Try on Any Device
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
              >
                See Compatibility
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Device Support */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Universal Device Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether on a smartphone, tablet, or computer, your data stays updated in real time, ensuring seamless
              operations from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Mobile Phones",
                description: "Android & iOS",
                features: ["Touch-optimized interface", "Offline capability", "Push notifications"],
              },
              {
                icon: Tablet,
                title: "Tablets",
                description: "iPad & Android Tablets",
                features: ["Larger screen experience", "Multi-window support", "Enhanced productivity"],
              },
              {
                icon: Monitor,
                title: "Desktop",
                description: "Windows, Mac & Linux",
                features: ["Full feature access", "Multiple monitors", "Keyboard shortcuts"],
              },
              {
                icon: Cloud,
                title: "Web Browser",
                description: "Any modern browser",
                features: ["No installation needed", "Always up-to-date", "Cross-platform"],
              },
            ].map((device, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <device.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{device.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{device.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {device.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Cost-Efficient Operations</h2>
              <p className="text-lg text-muted-foreground mb-6">
                By minimizing the need for expensive hardware, our device-agnostic solution helps you save money while
                maintaining full functionality across all your devices.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "No expensive hardware requirements",
                  "Use existing devices you already own",
                  "Real-time synchronization across all devices",
                  "Consistent user experience everywhere",
                  "Automatic updates and maintenance",
                  "Reduced IT support costs",
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
                  src="/cost.jpg?height=400&width=500"
                  alt="Multiple devices showing synchronized Seerakam interface"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with modern cloud technology to ensure reliability, security, and performance across all devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sync,
                title: "Real-time Sync",
                description: "Instant data synchronization across all your devices with conflict resolution.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level encryption and security protocols protect your business data.",
              },
              {
                icon: Zap,
                title: "High Performance",
                description: "Optimized for speed and efficiency, even on older devices and slow connections.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Using Any Device Today</h2>
          <p className="text-xl text-secondary-foreground/80 mb-8">
            Experience the flexibility of our multi-device platform and see how it adapts to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              Try Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
