import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Shield, AlertCircle, Users, Building } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Legal Terms
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Please read these terms and conditions carefully before using Seerakam services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-6 w-6 text-primary mr-2" />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using Seerakam services, you accept and agree to be bound by the terms and provision
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="h-6 w-6 text-primary mr-2" />
                    Company Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These terms and conditions govern your use of services provided by{" "}
                    <strong>Seerakam Technologies Private Limited</strong>, a company incorporated under the laws of
                    India. Our platform provides comprehensive restaurant and retail management solutions including POS
                    systems, inventory management, customer relationship management, and related services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 text-primary mr-2" />
                    Service Description
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Seerakam provides a comprehensive business management platform that includes:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Point of Sale (POS) systems</li>
                    <li>Inventory management and tracking</li>
                    <li>Customer relationship management (CRM)</li>
                    <li>Payment processing integration</li>
                    <li>Analytics and reporting tools</li>
                    <li>Multi-device accessibility</li>
                    <li>Cloud-based data storage and synchronization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-6 w-6 text-primary mr-2" />
                    User Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">By using our services, you agree to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide accurate and complete information during registration</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Use the service in compliance with applicable laws and regulations</li>
                    <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                    <li>Pay all applicable fees and charges in a timely manner</li>
                    <li>Notify us immediately of any security breaches or unauthorized use</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-2" />
                    Data Protection and Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We are committed to protecting your data and privacy. Our data handling practices are governed by
                    our Privacy Policy, which forms an integral part of these terms. Key points include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Secure cloud-based storage with encryption</li>
                    <li>Regular data backups for business continuity</li>
                    <li>Compliance with applicable data protection laws</li>
                    <li>No sharing of personal data with unauthorized third parties</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 text-primary mr-2" />
                    Intellectual Property
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All intellectual property rights in the Seerakam platform, including software, designs, trademarks,
                    and content, remain the exclusive property of Seerakam Technologies Private Limited. Users are
                    granted a limited, non-exclusive license to use the service for their business operations only.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-6 w-6 text-primary mr-2" />
                    Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Seerakam Technologies Private Limited shall not be liable for any indirect, incidental, special, or
                    consequential damages arising from the use of our services. This includes but is not limited to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Loss of profits or revenue</li>
                    <li>Business interruption or data loss</li>
                    <li>Third-party service interruptions</li>
                    <li>System downtime or technical issues</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Our total liability shall not exceed the amount paid by the customer for the services in the
                    preceding 12 months.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 text-primary mr-2" />
                    Service Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    While we strive to provide continuous service availability, we do not guarantee uninterrupted
                    access. Scheduled maintenance, updates, and unforeseen technical issues may temporarily affect
                    service availability. We will make reasonable efforts to minimize such disruptions and provide
                    advance notice when possible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-6 w-6 text-primary mr-2" />
                    Termination
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Either party may terminate this agreement with appropriate notice. Upon termination:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Access to the service will be discontinued</li>
                    <li>Data export options will be provided for a limited period</li>
                    <li>No refunds will be provided for unused subscription periods</li>
                    <li>All outstanding payments become immediately due</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 text-primary mr-2" />
                    Modifications to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seerakam Technologies Private Limited reserves the right to modify these terms and conditions at any
                    time. Users will be notified of significant changes via email or through the platform. Continued use
                    of the service after such modifications constitutes acceptance of the updated terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-6 w-6 text-primary mr-2" />
                    Governing Law
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These terms and conditions are governed by the laws of India. Any disputes arising from the use of
                    our services shall be subject to the exclusive jurisdiction of the courts in the jurisdiction where
                    Seerakam Technologies Private Limited is registered.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                For questions about these terms and conditions, please contact Seerakam Technologies Private Limited
                through our official support channels. Our legal and customer service teams are available to address any
                concerns or clarifications you may need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
