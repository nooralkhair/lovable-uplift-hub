import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Heart, Stethoscope, Briefcase, ArrowRight, Info, Users, FileText, Calendar, Lightbulb, Megaphone, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero.jpg";
import OpportunityCard, { OpportunityCardProps } from "@/components/OpportunityCard";

const Home = () => {
  // Opportunities data organized by category
  const opportunities: Map<string, OpportunityCardProps[]> = new Map([
    ["volunteer", [
      {
        title: "Community Outreach Volunteer",
        description: "Help us connect with families in need and coordinate support services",
        location: "Multiple Locations",
        deadline: "Rolling Basis",
        type: "Volunteer",
        icon: HandHeart
      },
      {
        title: "Education Program Assistant",
        description: "Support our tutoring and mentorship programs for underprivileged students",
        location: "Community Center",
        deadline: "March 15, 2025",
        type: "Volunteer",
        icon: GraduationCap
      }
    ]],
    ["opportunities", [
      {
        title: "Free Skill Development Workshop",
        description: "Learn carpentry, tailoring, and other vocational skills. Limited seats available",
        location: "Training Center, Main Branch",
        deadline: "February 28, 2025",
        type: "Training",
        icon: Briefcase
      },
      {
        title: "Youth Leadership Program",
        description: "A 3-month program designed to develop leadership and community service skills",
        location: "Online & In-Person",
        deadline: "March 10, 2025",
        type: "Program",
        icon: Lightbulb
      }
    ]],
    ["announcements", [
      {
        title: "Ramadan Food Distribution Drive",
        description: "Registration now open for families needing food assistance during Ramadan",
        location: "All Centers",
        deadline: "March 1, 2025",
        type: "Announcement",
        icon: Megaphone
      },
      {
        title: "Annual Community Iftar",
        description: "Join us for a community Iftar gathering. Open to all members",
        location: "Main Hall",
        deadline: "March 20, 2025",
        type: "Event",
        icon: Calendar
      }
    ]]
  ]);

  const programmes = [
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Empowering youth with skills and knowledge for a brighter future",
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
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
          <h1 className="text-5xl md:text-5xl font-bold mb-8 animate-fade-in mx-auto py-12">
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
              To build a society rooted in Qur’an and Sunnah — self-sufficient,
              educated, and spiritually strong. A community where the less
              fortunate are uplifted with dignity, and Islam becomes a complete
              way of life.
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
      {/* Opportunities Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Opportunities & Updates</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover volunteer positions, training programs, and important community announcements
            </p>
          </div>

          <Tabs defaultValue="volunteer" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>

            {Array.from(opportunities.entries()).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((opportunity, index) => (
                    <OpportunityCard key={index} {...opportunity} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            News and Events
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            Stay informed about our latest initiatives, success stories, and
            upcoming events that are making a difference in the community
          </p>
          <Link to="/news-events">
            <Button variant="link" className="mt-4 text-primary">
              Get Updated News and Events{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
