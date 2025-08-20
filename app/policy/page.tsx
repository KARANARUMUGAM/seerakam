import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Database, Users, FileText, AlertCircle, Mail, Phone } from "lucide-react"

export default function PolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mb-8">
              This privacy policy applies to the Seerakam app/website and explains how we collect, use, disclose, and
              protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-6 w-6 text-primary mr-2" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This policy may change as we update our app, and if it does, changes will be posted here. By using the
                  Seerakam app and website, you agree to this Policy. If you do not agree with any term in this Policy,
                  please do not use or avail of the Seerakam app or website.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-6 w-6 text-primary mr-2" />
                    1. Information That We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>We collect information in two ways:</p>

                  <div className="ml-4">
                    <h4 className="font-semibold text-foreground mb-2">1.1 Information supplied by users</h4>
                    <p className="text-muted-foreground mb-4">
                      This information is given by the user during the registration process and includes the user's
                      name, mobile number, email address, and business entity information, which are required to avail
                      certain features. Your name, contact number, and email address will also be used to inform you
                      regarding new services, releases, upcoming events, and changes in this Privacy Policy Statement.
                    </p>

                    <h4 className="font-semibold text-foreground mb-2">
                      1.2 Information Automatically Tracked While Using The App Or Site
                    </h4>
                    <p className="text-muted-foreground">
                      We store all your customer, supplier, employee, and branch details. We also keep all the
                      transaction details between you and your customer or supplier. All these details are stored in a
                      cloud-based environment using the services of third-party infrastructure service providers.
                    </p>
                    <p className="text-muted-foreground">
                      We also collect user log information when you use our app or website. This log information
                      includes, but is not limited to, IP address, time zone, and location details.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 text-primary mr-2" />
                    2. Information Usage and Disclosure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We only use your personal data when the law allows us to. Mostly we use it to contact you about
                    product-related queries and to inform you regarding new services, releases, upcoming events, and
                    changes in this Privacy Policy Statement. Your contact information and transaction details will only
                    be used to provide you with a variety of reports.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 text-primary mr-2" />
                    3. Link to Third Party Sites/Ad-Servers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We do not share or sell any personal or transaction details to third parties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-6 w-6 text-primary mr-2" />
                    4. Information Storage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We back up all your data on our cloud database for the purpose of enabling users to access their
                    data from anywhere and recover their data in case of device loss or change.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-2" />
                    5. Information Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We are committed to keeping your personal information secure. We will ensure that we safeguard your
                    data in accordance with applicable law. When you send or receive data from your Seerakam app or
                    website to our servers, we make sure it is encrypted using Secure Sockets Layer (SSL) and other
                    algorithms.
                  </p>
                  <p className="text-muted-foreground">
                    However, you agree and acknowledge that the above-mentioned measures do not guarantee absolute
                    protection of personal information. By accessing the Services, you agree to assume all risks
                    associated with disclosure of personal information arising due to breaches of firewalls and secure
                    server software. Where we have given you (or where you have chosen) a password that enables you to
                    access certain parts of the Services, you are responsible for keeping this password confidential. We
                    ask you not to share the password with anyone.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 text-primary mr-2" />
                    6. Changes in Privacy Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We review this privacy policy periodically based on changes in business and technology. If we make a
                    material change to this privacy policy, we will notify you via your registered contact information
                    (mostly email). Such changes will apply from the effective date specified in the notice or on the
                    website. We encourage you to check this page regularly for the latest information on our privacy
                    practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-6 w-6 text-primary mr-2" />
                    7. Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seerakam, under any circumstances, shall not be liable to the end user of this application for any
                    consequential, incidental, special, indirect, exemplary, or punitive damages, or damages for any
                    loss of profits, revenue, or business. This includes diminution in value, impairment or inability to
                    use, loss, interruption or delay of services, loss, damage, corruption, or recovery of data, breach
                    of data or system security, cost of replacement goods or services, loss of goodwill, or loss of
                    reputation, regardless of the nature of the claim, even if the end user has been notified of the
                    possibility of such damages.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="h-6 w-6 text-primary mr-2" />
                    8. Third Party Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seerakam, being a platform provider, acts as an intermediary between any third party for providing
                    API integration services (such as food delivery partners, SMS, WhatsApp, marketplaces, etc.).
                    Seerakam shall not be liable for any delay, damage, or suspension of API services, or for any losses
                    incurred through third-party service providers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-2" />
                    9. Disclaimer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If you share any personal information with us that is not requested during registration (whether
                    mandatory or optional), Seerakam will not be liable for any security breach or disclosure related to
                    such information. If you have any questions regarding this Policy or the protection of your personal
                    information, please contact us.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                If you have any questions regarding this Privacy Policy or the protection of your personal information,
                please contact Seerakam Technologies Private Limited through our support channels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
