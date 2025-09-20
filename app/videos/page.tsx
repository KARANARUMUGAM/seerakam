import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Users, BookOpen, Zap } from "lucide-react"

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Seerakam <span className="text-primary">Videos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch tutorials, demos, and success stories to learn how Seerakam can transform your restaurant business.
          </p>
        </div>

        {/* Coming Soon Card */}
        <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Play className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-4">
              Coming Soon
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              We're creating comprehensive video content to help you master Seerakam and grow your restaurant business. 
              Stay tuned for tutorials, demos, and expert insights!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                In the meantime, you can schedule a personalized demo to see Seerakam in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="/features"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Schedule Demo
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preview Content */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            What's Coming
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Product Demos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Step-by-step demonstrations of Seerakam's key features and capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive guides to help you get the most out of your Seerakam system.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Customer Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real restaurant owners sharing their success stories and transformation journeys.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Short, actionable tips to improve your restaurant operations and boost efficiency.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to See Seerakam in Action?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                While we prepare our video content, schedule a personalized demo to see how Seerakam 
                can transform your restaurant operations.
              </p>
              <a
                href="/support"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Schedule Your Demo
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
