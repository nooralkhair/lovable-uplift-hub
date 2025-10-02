import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award, CheckCircle2, Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NewsEvents = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = [
    {
      title: "Youth Skills Workshop 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, Main Street",
      description: "A comprehensive workshop focused on developing professional skills for youth, including resume building, interview preparation, and career guidance.",
    },
    {
      title: "Annual Health Camp",
      date: "April 20, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Central Park Grounds",
      description: "Free health checkups, medical consultations, and distribution of essential medicines for the community members.",
    },
    {
      title: "Education Support Drive",
      date: "May 5, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "City Hall",
      description: "Distribution of educational materials, scholarships, and support for underprivileged students.",
    },
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800", caption: "Community gathering event" },
    { url: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800", caption: "Educational support program" },
    { url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800", caption: "Health camp initiative" },
    { url: "https://images.unsplash.com/photo-1509099652299-30938b0aeb63?w=800", caption: "Youth empowerment workshop" },
    { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800", caption: "Skills training session" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
            News & Events
          </h1>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed animate-slide-up">
            Stay updated with our latest initiatives and community activities
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in our upcoming events and be part of the positive change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="border-2 border-primary/20 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Glimpses of our impactful work in the community
            </p>
          </div>

          <Card className="border-2 border-secondary/20 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={galleryImages[currentImageIndex].url}
                  alt={galleryImages[currentImageIndex].caption}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white text-lg font-semibold p-6">
                    {galleryImages[currentImageIndex].caption}
                  </p>
                </div>
                
                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Thumbnails */}
              <div className="flex justify-center gap-2 p-4 bg-background">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
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
