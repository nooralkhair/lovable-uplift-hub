import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Heart, Globe, CheckCircle2 } from "lucide-react";

const Vision = () => {
  const visionPillars = [
    {
      icon: Lightbulb,
      title: "Enlightenment Through Education",
      description: "We envision a world where every individual has access to quality education that empowers them to reach their full potential and contribute meaningfully to society.",
    },
    {
      icon: Target,
      title: "Economic Independence",
      description: "Creating pathways for sustainable livelihoods and economic self-sufficiency, transforming Zakat recipients into Zakat givers through skill development and entrepreneurship.",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Ensuring that the most vulnerable in our society - orphans, widows, and those in need - receive the care, support, and dignity they deserve.",
    },
    {
      icon: Globe,
      title: "Community Transformation",
      description: "Building resilient communities where healthcare, education, and opportunity are accessible to all, creating lasting positive change for generations to come.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Vision
          </h1>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed animate-slide-up">
            To create a society where every individual, regardless of their background, 
            has access to quality education, healthcare, and economic opportunities, 
            enabling them to lead dignified, empowered, and fulfilling lives.
          </p>
        </div>
      </section>

      {/* Main Vision Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="border-2 border-primary/20 shadow-card">
            <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
              <p>
                At <span className="font-semibold text-primary">Lovable</span>, we believe in the transformative 
                power of education, compassion, and opportunity. Our vision is rooted in the fundamental belief 
                that every person deserves the chance to thrive, not just survive.
              </p>
              <p className="font-medium">
                We dream of communities where:
              </p>
              <div className="space-y-3 ml-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Young minds are nurtured and equipped with skills that shape their future</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>The vulnerable and marginalized find support, dignity, and hope</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Healthcare is accessible to those who need it most</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Economic empowerment breaks the cycle of poverty</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Knowledge and opportunity flow freely across all barriers</span>
                </div>
              </div>
              <p>
                Through our dedicated programmes and the support of compassionate individuals like you, 
                we are working tirelessly to turn this vision into reality - one life, one family, 
                one community at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Pillars of Our Vision</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four fundamental principles that guide our mission and shape our impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visionPillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 border-border"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform">
                    <pillar.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Looking Ahead</h2>
          
          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Educational Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Establishing schools, technical colleges, and vocational training centers that provide 
                      world-class education and practical skills to prepare our youth for the challenges of tomorrow.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-secondary/10 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">Healthcare Infrastructure</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Building hospitals and medical colleges to ensure quality healthcare is accessible to all, 
                      regardless of their economic status, while training the next generation of healthcare professionals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Sustainable Livelihoods</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Creating a robust ecosystem of support that transforms aid recipients into self-sufficient contributors, 
                      fostering entrepreneurship and sustainable business development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Together, We Can Make This Vision Reality
          </h2>
          <p className="text-lg md:text-xl opacity-95 leading-relaxed">
            Join us in our mission to create lasting change. Your support, whether through donations, 
            volunteering, or simply spreading awareness, brings us one step closer to realizing our vision 
            of an empowered, educated, and equitable society.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;
