import heroImage from "@/assets/hero.jpg";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Briefcase,
  FileText,
  GraduationCap,
  Heart,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";

const programmes = [
  {
    icon: GraduationCap,
    title: "Education & Training",
    description:
      "Empowering youth with skills and knowledge for a brighter future",
    color: "from-primary to-primary-light",
    href: "#education-training",
  },
  {
    icon: Heart,
    title: "Orphans & Widows",
    description: "Supporting vulnerable families with care and resources",
    color: "from-secondary to-secondary-light",
    href: "#orphans-widows",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Nutrition",
    description: "Providing medical support and nutritional care",
    color: "from-accent to-accent-light",
    href: "#healthcare-nutrition",
  },
  {
    icon: Briefcase,
    title: "Livelihood Support",
    description: "Creating sustainable income opportunities",
    color: "from-primary to-accent",
    href: "#livelihood-support",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Community empowerment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in py-12">
            NOOR AL-KHAIR CHARITABLE TRUST
          </h1>
          <h1 className="text-5xl md:text-5xl font-bold mb-8 animate-fade-in mx-auto md:py-12">
            Connecting needy people with capable people to uplift the Ummah,
            Insha'Allah
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 animate-slide-up">
            Join us in creating lasting change through education, healthcare,
            and economic empowerment
          </p>
        </div>
      </section>

      {/* About (Vision) Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-8"></div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30">
            <CardContent className="p-8 md:p-12 text-center text-xl leading-relaxed">
              To build a society where every needy person finds dignity,
              support, and opportunity through collective compassion.
            </CardContent>
          </Card>
          <div className="text-center mt-12">
            <Link to="/about">
              <Button size="lg" className="bg-gradient-hero">
                Read More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Programmes Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Programmes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives designed to uplift communities and
              create lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmes.map((programme, index) => (
              <Link to={`/programmes${programme.href}`}>
                <Card
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-border hover:scale-105"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${programme.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <programme.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{programme.title}</h3>
                    <p className="text-muted-foreground">
                      {programme.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programmes">
              <Button size="lg" className="bg-gradient-hero">
                Explore All Programmes
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Monthly Reports Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FileText className="h-12 w-12 mx-auto text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-4">About Our Reports</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Our monthly reports provide detailed insights into our activities,
            financial statements, beneficiary statistics, and impact
            assessments. We believe in complete transparency and accountability
            to our donors, volunteers, and the communities we serve.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Reports are published within the first week of each month
          </p>
          <Link to="/monthly-reports">
            <Button size="lg" className="bg-gradient-hero">
              View Monthly Reports
            </Button>
          </Link>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            News and Events
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            Stay informed about our latest initiatives, success stories, and
            events that are making a difference in the community
          </p>
          <Link to="/news-events">
            <Button variant="link" className="mt-4 text-primary">
              Get Updated News and Events{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Updates
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            Read the latest updates on our projects, initiatives, and opportunities
          </p>
          <Link to="/updates">
            <Button variant="link" className="mt-4 text-primary">
              See All Updates <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default Home;
