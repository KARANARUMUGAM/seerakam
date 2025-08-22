import { Loader2 } from "lucide-react"

interface LoaderProps {
  size?: "sm" | "md" | "lg"
  className?: string
  text?: string
}

export function Loader({ size = "md", className = "", text }: LoaderProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <Loader2 className={`animate-spin text-primary ${sizeClasses[size]}`} />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-foreground">Loading Seerakam</h3>
          <p className="text-sm text-muted-foreground">Please wait while we prepare your experience...</p>
        </div>
      </div>
    </div>
  )
}

export function SectionLoader() {
  return (
    <div className="py-16 flex items-center justify-center">
      <Loader size="lg" text="Loading content..." />
    </div>
  )
}
