import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  FileText,
  CheckCircle2,
  MapPin,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Users,
  Building2,
  AlertCircle,
} from "lucide-react";
import posterSquare from "@/assets/job-fair-poster-square.jpg";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdixuSb74CxiNnJ1Hc5Jdj5u8kaJW3FhmLwlHjs6CdcjVRf-w/viewform";

const WHATSAPP_CONTACT = "7698853478";

const opportunities = [
  "Manufacturing & Engineering",
  "Sales & Marketing",
  "Accounts & Finance",
  "IT & Computer Jobs",
  "Administration & Office Jobs",
  "Skilled & Technical Jobs",
  "Operators & Technicians",
  "Security & Support Staff",
  "Healthcare & Education",
  "Freshers & Experienced Candidates",
];

const whoCanRegister = [
  "Freshers looking for their first job",
  "Experienced professionals seeking new opportunities",
  "Skilled & Semi-Skilled workers",
  "Candidates looking for a career change",
  "Candidates seeking better employment opportunities",
];

const whatToBring = [
  "Updated CV / Resume",
  "Educational Qualification Details",
  "Work Experience Details (if applicable)",
  "Valid Mobile / WhatsApp Number",
];

const Employment = () => {
  const handleShare = () => {
    const shareText =
      "Job Fair & Employment Assistance Drive by Noor Al-Khair Charitable Trust (NAKCT). Submit CV and register online: " +
      GOOGLE_FORM_URL;
    if (navigator.share) {
      navigator.share({
        title: "Job Fair & Employment Assistance Drive",
        text: shareText,
        url: window.location.href,
      }).catch(() => { });
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(
          "📢 Announcement: Job Fair & Employment Assistance Drive\n\nNoor Al-Khair Charitable Trust (NAKCT) has started a Job Fair & Employment Assistance Drive to help job seekers connect with employment opportunities.\n\nApply Online: " +
          GOOGLE_FORM_URL
        )}`,
        "_blank"
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-14 md:pt-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-sm md:text-base font-medium mb-4 backdrop-blur-sm">
            <Briefcase className="h-4 w-4" />
            Noor Al-Khair Charitable Trust Initiative
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-fade-in leading-tight">
            Job & Employment Assistance Drive
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed mb-8">
            Connecting job seekers with companies, HR departments, and recruitment consultancies to create better opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-6 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 gap-2"
              >
                <FileText className="h-5 w-5" />
                Apply Online
                <ExternalLink className="h-4 w-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-12 max-w-6xl space-y-12">
        {/* About the Drive */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-primary flex items-center gap-3">
              <Briefcase className="h-7 w-7" />
              About The Employment Drive
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground">
              Bismillah <br />Alhamdulillah! Noor Al-Khair Charitable Trust (NAKCT) has started a Job & Employment Assistance Drive at its office to help job seekers connect with employment opportunities.
            </p>
            <p>
              Organized in collaboration with Companies, HR Departments, Job Recruitment Consultancies & Recruitment Agencies to connect eligible candidates with suitable vacancies.
            </p>
          </CardContent>
        </Card>

        {/* 3-Column Info Cards: Who Can Register, Opportunities, What to Bring */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Opportunities */}
          <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Building2 className="h-6 w-6" />
                <CardTitle className="text-xl">Opportunities May Include</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">Various industries & roles</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {opportunities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Who Can Register */}
          <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Users className="h-6 w-6" />
                <CardTitle className="text-xl">Who Can Register?</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">Open to all eligible candidates</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {whoCanRegister.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What to Bring */}
          <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-primary mb-1">
                <FileText className="h-6 w-6" />
                <CardTitle className="text-xl">What to Bring / Submit</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">Documents & requirements</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {whatToBring.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Office & Timing Details + Posters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Venue & Details */}
          <Card className="border-2 border-border shadow-card h-full flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Office Venue & Timings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Address</h4>
                  <p className="text-muted-foreground">
                    Shop No. 4, Noor Al-Khair Charitable Trust, ROZY COMPLEX, Umerkoi Road, Bavisa Faliya, Silvassa – 396230
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Office Hours</h4>
                  <p className="text-muted-foreground">
                    Monday to Saturday, 9:30 AM to 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Mobile / WhatsApp</h4>
                  <a
                    href={`tel:+91${WHATSAPP_CONTACT}`}
                    className="text-primary font-medium hover:underline"
                  >
                    +91 {WHATSAPP_CONTACT}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a
                    href="mailto:nooralkhairct@gmail.com"
                    className="text-primary font-medium hover:underline"
                  >
                    nooralkhairct@gmail.com
                  </a>
                </div>
              </div>

              {/* Apply CTA in Card */}
              <div className="pt-4 border-t border-border">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="w-full text-base sm:text-lg bg-primary hover:bg-primary-light text-primary-foreground font-semibold gap-2 py-6"
                  >
                    <FileText className="h-5 w-5" />
                    Fill Application Form
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Reference Campaign Posters */}
          <Card className="border-2 border-border shadow-card overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center justify-between">
                <span>Campaign Posters</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden border border-border shadow-sm bg-muted/40 flex flex-col">
                  <img
                    src={posterSquare}
                    alt="Job Fair & Employment Assistance Drive Announcement"
                    className="w-full object-cover transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer / Important Note */}
        <Card className="bg-amber-500/10 border-2 border-amber-500/30">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm md:text-base text-foreground leading-relaxed">
                <strong className="font-semibold text-amber-700 dark:text-amber-300">
                  Important Note:{" "}
                </strong>
                Registration and CV submission do not guarantee employment. Final selection, salary, job role, and appointment will be decided solely by the respective employer / recruitment organization.
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Floating Mobile Apply Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-3 shadow-lg flex gap-2">
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold gap-1.5">
            <FileText className="h-4 w-4" />
            Apply Online
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Employment;
