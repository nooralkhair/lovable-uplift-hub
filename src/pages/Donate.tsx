import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Building2, QrCode } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Heart className="h-20 w-20 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Make a Difference Today
          </h1>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed animate-slide-up">
            Your generosity can transform lives and build stronger communities
          </p>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Islamic Quote */}
            <Card className="border-2 border-primary/20 shadow-card hover:shadow-hover transition-all duration-300 lg:col-span-1">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-center space-y-4">
                  <p className="text-lg italic text-foreground leading-relaxed">
                    "The believer's shade on the Day of Resurrection will be his charity."
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground">
                    - Prophet Muhammad (PBUH)
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Your donation is not just a financial contribution - it's an investment in someone's future, 
                    a beacon of hope, and a reflection of faith in action.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Center - Bank Details */}
            <Card className="border-2 border-secondary/20 shadow-card hover:shadow-hover transition-all duration-300 lg:col-span-1">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-center">Bank Details</h3>
                
                <div className="space-y-4 bg-muted/50 p-6 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Account Name</p>
                    <p className="text-lg font-semibold">NOOR AL-KHAIR CHARITABLE TRUST</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Account Number</p>
                    <p className="text-lg font-semibold font-mono">1234567890</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">IFSC Code</p>
                    <p className="text-lg font-semibold font-mono">ABCD0123456</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Bank Name</p>
                    <p className="text-lg font-semibold">Sample Bank of India</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Branch</p>
                    <p className="text-lg font-semibold">Main Branch</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right Side - QR Code */}
            <Card className="border-2 border-accent/20 shadow-card hover:shadow-hover transition-all duration-300 lg:col-span-1">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <QrCode className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-center">Quick Donation</h3>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-border">
                    <div className="text-center space-y-2">
                      <QrCode className="h-32 w-32 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Scan to Donate</p>
                    </div>
                  </div>
                  <p className="text-sm text-center text-muted-foreground">
                    Scan this QR code with any UPI app to make an instant donation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Instructions Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="border-2 border-primary/30 shadow-lg">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-center text-primary mb-4">
                Important: Payment Remarks Format
              </h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                When making your donation, please mention payment remarks in the following format:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <p className="text-center font-mono font-semibold mb-4 text-lg">
                  NAKCT | Account No. | Month | Donation Type | Amount
                </p>
                <div className="space-y-2 max-w-md mx-auto">
                  <div className="flex items-center justify-between bg-background p-3 rounded">
                    <span className="text-sm text-muted-foreground">Example 1:</span>
                    <span className="font-mono text-sm font-semibold">NAKCT 01 FEB25 NS 500</span>
                  </div>
                  <div className="flex items-center justify-between bg-background p-3 rounded">
                    <span className="text-sm text-muted-foreground">Example 2:</span>
                    <span className="font-mono text-sm font-semibold">NAKCT 01 FEB25 ZK 300</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-center text-muted-foreground italic pt-4">
                This helps us track and acknowledge your contribution properly
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;