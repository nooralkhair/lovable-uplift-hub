import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery1.jpeg";
import gallery2 from "@/assets/gallery2.jpeg";
import gallery3 from "@/assets/gallery3.jpeg";
import gallery4 from "@/assets/gallery4.jpeg";

const NewsEvents = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = [
    {
      title: "Inaugural Ceremony of Noor Al-Khair Charitable Trust Office",
      date: "October 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Shop No. 30, Govinda Commercial Complex, Umerkoi Road, Bavisa Faliya, Silvassa",
      description: "Join us for the grand opening of our new office. Meet the team, learn about our mission, and explore how you can get involved.",
    }
  ];

  const galleryImages = [
    { url: gallery1, caption: "Madrasa bags" },
    { url: gallery2, caption: "Distribution of Madrasa bags" },
    { url: gallery3, caption: "Distribution of Madrasa bags" },
    { url: gallery4, caption: "Distribution of Madrasa bags" },
  ];

  const nextImage = () => {
  setCurrentImageIndex((prevIndex) =>
    prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
  );
};

const prevImage = () => {
  setCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
  );
};

// Auto-scroll every 2 seconds
useEffect(() => {
  const interval = setInterval(() => {
    nextImage();
  }, 2000);
  return () => clearInterval(interval); // Cleanup
}, [galleryImages.length]);

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
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
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

      <Footer />
    </div>
  );
};

export default NewsEvents;
