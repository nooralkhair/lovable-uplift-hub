import Footer from "@/components/Footer";
import { FileText, Download } from "lucide-react";
import OCT_DEC_2024 from "@/assets/NAKCT-OCT-DEC-2024.pdf";
import JAN_2025 from "@/assets/NAKCT-JAN-2025.pdf";
import FEB_2025 from "@/assets/NAKCT-FEB-2025.pdf";
import MAR_2025 from "@/assets/NAKCT-MAR-2025.pdf";
import APR_2025 from "@/assets/NAKCT-APR-2025.pdf";
import MAY_2025 from "@/assets/NAKCT-MAY-2025.pdf";
import JUN_2025 from "@/assets/NAKCT-JUN-2025.pdf";
import JULY_2025 from "@/assets/NAKCT-JULY-2025.pdf";
import AUG_2025 from "@/assets/NAKCT-AUG-2025.pdf";
import SEPT_2025 from "@/assets/NAKCT-SEPT-2025.pdf";
import OCT_2025 from "@/assets/NAKCT-OCT-2025.pdf";
import NOV_2025 from "@/assets/NAKCT-NOV-2025.pdf";
import DEC_2025 from "@/assets/NAKCT-DEC-2025.pdf";

const reports = [
  { month: "December 2025", pdfUrl: DEC_2025 },
  { month: "November 2025", pdfUrl: NOV_2025 },
  { month: "October 2025", pdfUrl: OCT_2025 },
  { month: "September 2025", pdfUrl: SEPT_2025 },
  { month: "August 2025", pdfUrl: AUG_2025 },
  { month: "July 2025", pdfUrl: JULY_2025 },
  { month: "June 2025", pdfUrl: JUN_2025 },
  { month: "May 2025", pdfUrl: MAY_2025 },
  { month: "April 2025", pdfUrl: APR_2025 },
  { month: "March 2025", pdfUrl: MAR_2025 },
  { month: "February 2025", pdfUrl: FEB_2025 },
  { month: "January 2025", pdfUrl: JAN_2025 },
  { month: "October-December 2024", pdfUrl: OCT_DEC_2024 },
];

const MonthlyReports = () => {
  const handleReportClick = (pdfUrl: string) => {
    // Opens PDF in new tab or triggers download
    window.open(pdfUrl, "_blank");
  };

  if (reports.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        
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
          <p className="text-lg text-muted-foreground py-32">
            No reports available at the moment. Coming up soon...
          </p>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      

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
