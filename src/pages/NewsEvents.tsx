import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award, CheckCircle2 } from "lucide-react";

const NewsEvents = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding, treating every individual with dignity and respect.",
    },
    {
      icon: Target,
      title: "Impact-Driven",
      description: "We focus on creating measurable, lasting change in the communities we serve.",
    },
    {
      icon: Users,
      title: "Community-Centered",
      description: "We believe in empowering communities to drive their own development and growth.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We maintain the highest standards of accountability and transparency in all our operations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About NAKCT
          </h1>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed animate-slide-up">
            A journey of compassion, commitment, and community transformation
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>

          <Card className="border-2 border-primary/20 shadow-card">
            <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-primary">NAKCT</span> was born from a simple yet powerful idea: 
                that every individual, regardless of their circumstances, deserves the opportunity to live a life of 
                dignity, purpose, and prosperity.
              </p>
              <p>
                Our journey began with a small group of dedicated individuals who witnessed firsthand the struggles 
                faced by marginalized communities - families without access to quality education, orphans and widows 
                without adequate support, talented youth without opportunities to develop their skills, and communities 
                lacking basic healthcare facilities.
              </p>
              <p>
                What started as a grassroots initiative has grown into a comprehensive non-profit organization dedicated 
                to addressing the multifaceted challenges of economic upliftment, education, healthcare, and social 
                empowerment. We work at the intersection of compassion and action, turning genuine concern into 
                tangible results.
              </p>
              <p>
                Today, we serve thousands of individuals across multiple communities, but our mission remains unchanged: 
                to create lasting, positive change that transforms lives and builds stronger, more resilient communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-8"></div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30">
            <CardContent className="p-8 md:p-12">
              <p className="text-xl leading-relaxed text-center">
                To empower individuals and communities through comprehensive programmes in education, healthcare, 
                economic development, and social welfare, enabling them to break the cycle of poverty and achieve 
                sustainable prosperity while maintaining their dignity and cultural values.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every action we take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 border-border hover:scale-105"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Drives Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Belief in Human Potential</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe that every person has inherent worth and untapped potential. Our role is to provide 
                      the tools, resources, and opportunities needed to unlock that potential.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-secondary/10 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Commitment to Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We don't just provide aid; we create pathways to self-sufficiency. Every programme is designed 
                      with long-term sustainability and measurable impact in mind.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-2">Holistic Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We understand that true empowerment requires addressing multiple dimensions of well-being - 
                      education, health, economic stability, and social support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Community Partnership</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We work alongside communities, not for them. Local voices, needs, and leadership drive our 
                      programmes, ensuring relevance and sustainability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsEvents;
