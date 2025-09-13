import { Clock } from "lucide-react"

export default function ResourcePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="text-center">
        <div className="mb-8">
          <Clock className="h-24 w-24 text-primary mx-auto mb-4" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Loading Soon
        </h1>
        <p className="text-xl text-muted-foreground">
          This page is under construction
        </p>
      </div>
    </div>
  )
}
