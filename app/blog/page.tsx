import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Calendar } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Seerakam <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and trends in restaurant management and technology.
          </p>
        </div>

        {/* Coming Soon Card */}
        <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-4">
              Coming Soon
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              We're working hard to bring you valuable content about restaurant management, 
              technology trends, and business insights. Check back soon for our first blog posts!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                In the meantime, feel free to explore our features and get in touch if you have any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="/features"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Explore Features
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
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Restaurant Management Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert advice on streamlining operations, improving customer service, and boosting profitability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Industry Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay ahead with the latest trends in restaurant technology, customer preferences, and market insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real stories from restaurant owners who have transformed their business with Seerakam.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
