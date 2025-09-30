import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar } from "lucide-react";

const MonthlyReports = () => {
  const reports = [
    {
      month: "March 2025",
      date: "March 31, 2025",
      summary: "Comprehensive overview of all programmes and activities",
      highlights: ["150 students enrolled", "25 medical camps conducted", "40 businesses supported"],
    },
    {
      month: "February 2025",
      date: "February 28, 2025",
      summary: "Educational initiatives and community outreach programmes",
      highlights: ["Youth counselling sessions", "Widow support distribution", "Healthcare drives"],
    },
    {
      month: "January 2025",
      date: "January 31, 2025",
      summary: "New year initiatives and programme launches",
      highlights: ["Technical training program launch", "Orphan education sponsorship", "Livelihood workshops"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Monthly Reports
          </h1>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed animate-slide-up">
            Transparency and accountability in action - explore our monthly programme updates
          </p>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Reports</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our activities, impact, and financial transparency through our detailed monthly reports
            </p>
          </div>

          <div className="space-y-6">
            {reports.map((report, index) => (
              <Card 
                key={index} 
                className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/30"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{report.month}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Published: {report.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gradient-warm w-full md:w-auto">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{report.summary}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {report.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-secondary font-bold mt-1">•</span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Information Card */}
          <Card className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30">
            <CardContent className="p-8 text-center space-y-4">
              <FileText className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">About Our Reports</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our monthly reports provide detailed insights into our activities, financial statements, 
                beneficiary statistics, and impact assessments. We believe in complete transparency and 
                accountability to our donors, volunteers, and the communities we serve.
              </p>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Reports are published within the first week of each month
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Archive Notice */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h3 className="text-2xl font-bold mb-4">Looking for Older Reports?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Access our complete report archive dating back to our inception. All reports are available 
            for download and review.
          </p>
          <Button variant="outline" size="lg">
            View Report Archive
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MonthlyReports;
