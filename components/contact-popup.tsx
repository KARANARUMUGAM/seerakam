"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ContactPopupProps {
  triggerText: string
  triggerVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  triggerSize?: "default" | "sm" | "lg" | "icon"
  title?: string
  description?: string
  className?: string
}

export function ContactPopup({ 
  triggerText, 
  triggerVariant = "default", 
  triggerSize = "lg",
  title = "Get in Touch",
  description = "Fill out the form below and our team will get back to you within 24 hours.",
  className = ""
}: ContactPopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    plan: "",
    message: ""
  })

  // Validation functions
  const validatePhone = (phone: string): string => {
    const phoneDigits = phone.replace(/\D/g, '')
    if (phoneDigits.length === 0) return "Phone number is required"
    if (phoneDigits.length !== 10) return "Phone number must be exactly 10 digits"
    return ""
  }

  const validateEmail = (email: string): string => {
    if (!email) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return "Please enter a valid email address"
    return ""
  }

  const handleInputChange = (field: string, value: string) => {
    // Special handling for phone number - only allow digits and limit to 10
    if (field === 'phone') {
      const phoneDigits = value.replace(/\D/g, '').slice(0, 10)
      setFormData(prev => ({ ...prev, [field]: phoneDigits }))
      
      // Clear error when user starts typing
      if (errors.phone) {
        setErrors(prev => ({ ...prev, phone: "" }))
      }
    } else {
      setFormData(prev => ({ ...prev, [field]: value }))
      
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: "" }))
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form fields
    const newErrors: {[key: string]: string} = {}
    
    // Validate required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    const emailError = validateEmail(formData.email)
    if (emailError) {
      newErrors.email = emailError
    }
    
    const phoneError = validatePhone(formData.phone)
    if (phoneError) {
      newErrors.phone = phoneError
    }
    
    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Clear any existing errors
    setErrors({})
    
    // Handle form submission here
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        plan: "",
        message: ""
      })
      setErrors({})
    }, 3000)
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      plan: "",
      message: ""
    })
    setErrors({})
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={triggerVariant} 
          size={triggerSize}
          className={className}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-base mt-2">
            {description}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-green-800">Thank You!</CardTitle>
              <CardDescription className="text-green-600">
                Your message has been sent successfully. Our team will get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={errors.name ? "border-red-500 focus:border-red-500" : ""}
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500 focus:border-red-500" : ""}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter 10-digit phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-red-500 focus:border-red-500" : ""}
                  maxLength={10}
                  required
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="plan">Interested Plan</Label>
              <Select value={formData.plan} onValueChange={(value) => handleInputChange("plan", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="starter">STARTER - ₹416/month</SelectItem>
                  <SelectItem value="founder">FOUNDER TREAT - ₹708/month</SelectItem>
                  <SelectItem value="full-course">FULL COURSE - ₹1,083/month</SelectItem>
                  <SelectItem value="enterprise">Enterprise - Custom Pricing</SelectItem>
                  <SelectItem value="demo">Just want a demo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your business requirements..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
              <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
