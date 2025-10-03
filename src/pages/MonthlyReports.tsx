import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Download } from "lucide-react";

const MonthlyReports = () => {
  const reports = [
    
  ];

  const handleReportClick = (pdfUrl: string) => {
    // Opens PDF in new tab or triggers download
    window.open(pdfUrl, '_blank');
  };

  if (reports.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Monthly Reports
            </h1>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed animate-slide-up">
              Access our monthly programme updates and impact reports
            </p>
          </div>
        </section>
        <section className="flex-grow flex items-center justify-center bg-background">
          <p className="text-lg text-muted-foreground py-32">No reports available at the moment. Coming up soon...</p>
        </section>
        <Footer />
      </div>
    );
  }

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
            Access our monthly programme updates and impact reports
          </p>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div 
                key={index}
                onClick={() => handleReportClick(report.pdfUrl)}
                className="flex items-center justify-between p-6 bg-card border-2 border-border rounded-lg hover:border-primary/50 hover:shadow-hover transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{report.month}</h3>
                </div>
                <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MonthlyReports;
