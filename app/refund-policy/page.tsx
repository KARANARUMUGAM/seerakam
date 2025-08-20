import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, AlertTriangle, Calculator, FileText, Clock, XCircle } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Refund Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Refund Policy</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Important information about subscription fees, refunds, and billing policies for Seerakam services.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center text-destructive">
                  <XCircle className="h-6 w-6 mr-2" />
                  No Refund Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>All subscription fees paid are strictly non-refundable</strong>, regardless of the extent to
                  which the Customer has utilized the Services during the subscription period.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-6 w-6 text-primary mr-2" />
                    Subscription Fees
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Subscriptions to paid Services are available on yearly subscription plans. Your subscription will be
                    automatically renewed at the end of each subscription period unless you inform us in advance that
                    you do not wish to renew the subscription.
                  </p>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                      Important Notice
                    </h4>
                    <p className="text-muted-foreground">
                      In the event of termination of the subscription, there will be no refund on the subscription fee
                      or on any other taxes involved in the transaction.
                    </p>
                  </div>

                  <p className="text-muted-foreground">
                    Seerakam Technologies Private Limited reserves the right to change the subscription fee and to
                    charge for the use of certain features and services that are currently included free of charge in
                    the subscription plan.
                  </p>

                  <p className="text-muted-foreground">
                    You will not be charged for using any Service during the trial period unless you have opted for a
                    paid subscription plan. Information on the subscription options and charges for all paid Services is
                    available on the official Seerakam website.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 text-primary mr-2" />
                    Payment Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Customers must pay the Fees through an accepted payment method as specified on the Seerakam website.
                  </p>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      Subscription Restrictions
                    </h4>
                    <p className="text-muted-foreground">
                      During the active Term of the subscription, the Customer will not be permitted to downgrade their
                      Service Plan or reduce the number of Users associated with their account.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-6 w-6 text-primary mr-2" />
                    Applicable Taxes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The subscription Fees do not include any taxes, levies, duties, or similar governmental assessments,
                    including but not limited to value-added tax (VAT), sales tax, use tax, or withholding taxes
                    assessable by any local, state, provincial, or foreign jurisdiction (collectively referred to as
                    "Taxes").
                  </p>

                  <p className="text-muted-foreground">
                    The Customer agrees to pay all applicable direct or indirect Taxes associated with its purchases
                    under this Agreement. To the extent that Seerakam is legally required to collect such Taxes, they
                    will be itemized on the Seerakam invoice.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Tax Withholding</h4>
                    <p className="text-muted-foreground">
                      If the Customer has an obligation to withhold any amounts under any law or tax regime, the
                      Customer must gross up the payments so that Seerakam receives the full amount actually quoted and
                      invoiced, without any deductions.
                    </p>

                    <h4 className="font-semibold text-foreground">Tax Exemptions</h4>
                    <p className="text-muted-foreground">
                      If Seerakam has the legal obligation to pay or collect Taxes for which the Customer is responsible
                      under this section, the appropriate amount will be invoiced to the Customer and must be paid in
                      full, unless, prior to the invoice date, the Customer provides Seerakam with a valid tax exemption
                      certificate issued by the appropriate taxing authority.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-primary mr-2" />
                    Key Points to Remember
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-destructive mr-2 mt-0.5 flex-shrink-0" />
                      All subscription fees are strictly non-refundable
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      Subscriptions auto-renew unless cancelled in advance
                    </li>
                    <li className="flex items-start">
                      <Calculator className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      Additional taxes may apply based on jurisdiction
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      No downgrades allowed during active subscription period
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact for Billing Questions</h3>
              <p className="text-muted-foreground">
                If you have any questions about billing, subscriptions, or this refund policy, please contact Seerakam
                Technologies Private Limited through our support channels. Our team is available 24/7 to assist with any
                billing-related inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
