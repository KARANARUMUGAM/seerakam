"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Loader2 } from "lucide-react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingKey, setLoadingKey] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    // Show loader when pathname changes
    setIsLoading(true)
    setLoadingKey(prev => prev + 1)

    // Hide loader after a short delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center space-y-4 border border-gray-200">
        <div className="relative">
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
          <div className="absolute inset-0 h-12 w-12 border-4 border-primary/20 rounded-full animate-pulse"></div>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Loading Page</h3>
          <p className="text-sm text-gray-600">Please wait while we load the content...</p>
        </div>
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
