import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Stethoscope, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-community.jpg";

const Index = () => {
  const programmes = [
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Empowering youth with skills and knowledge for a brighter future",
      color: "from-primary to-primary-light",
    },
    {
      icon: Heart,
      title: "Orphans & Widows",
      description: "Supporting vulnerable families with care and resources",
      color: "from-secondary to-secondary-light",
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Nutrition",
      description: "Providing medical support and nutritional care",
      color: "from-accent to-accent-light",
    },
    {
      icon: Briefcase,
      title: "Livelihood Support",
      description: "Creating sustainable income opportunities",
      color: "from-primary to-accent",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Empowering Lives,<br />Building Communities
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 animate-slide-up">
            Join us in creating lasting change through education, healthcare, and economic empowerment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-secondary hover:bg-secondary-light text-lg px-8">
              Make a Donation
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            To create a society where every individual has access to quality education, healthcare, 
            and economic opportunities, enabling them to lead dignified and empowered lives.
          </p>
          <Link to="/vision">
            <Button variant="link" className="mt-4 text-primary">
              Read Full Vision <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Programmes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives designed to uplift communities and create lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmes.map((programme, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-border hover:scale-105"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${programme.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <programme.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{programme.title}</h3>
                  <p className="text-muted-foreground">{programme.description}</p>
                </CardContent>
              </Card>
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

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-5xl font-bold">5000+</h3>
              <p className="text-lg opacity-90">Students Educated</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold">1200+</h3>
              <p className="text-lg opacity-90">Families Supported</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold">800+</h3>
              <p className="text-lg opacity-90">Medical Treatments</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold">300+</h3>
              <p className="text-lg opacity-90">Jobs Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Your support can transform lives and build stronger communities. Every contribution counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-warm text-lg px-8">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
