import event1 from "@/assets/event1.jpg";
import gallery1 from "@/assets/gallery1.jpeg";
import gallery2 from "@/assets/gallery2.jpeg";
import gallery3 from "@/assets/gallery3.jpeg";
import gallery4 from "@/assets/gallery4.jpeg";
import inauguration1 from "@/assets/inauguration1.jpeg";
import inauguration2 from "@/assets/inauguration2.jpeg";
import inauguration3 from "@/assets/inauguration3.jpeg";
import inauguration4 from "@/assets/inauguration4.jpeg";
import inauguration5 from "@/assets/inauguration5.jpeg";
import inauguration6 from "@/assets/inauguration6.jpeg";
import inauguration7 from "@/assets/inauguration7.jpeg";
import inauguration8 from "@/assets/inauguration8.jpeg";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const NewsEvents = () => {
  const [currentGalleryImgIdx, setCurrentGalleryImgIdx] = useState(0);
  const [currentInaugurationImgIdx, setCurrentInaugurationImgIdx] = useState(0);

  const events = [
    {
      title: "Inaugural Ceremony of Noor Al-Khair Charitable Trust Office",
      date: "October 5, 2025",
      time: "11 AM",
      location:
        "Shop No. 30, Govinda Commercial Complex, Umerkoi Road, Bavisa Faliya, Silvassa",
      description:
        "Join us for the grand opening of our new office. Meet the team, learn about our mission, and explore how you can get involved.",
      image: event1,
    },
  ];

  const galleryImages = [
    { url: gallery1, caption: "Madrasa bags" },
    { url: gallery2, caption: "Distribution of Madrasa bags" },
    { url: gallery3, caption: "Distribution of Madrasa bags" },
    { url: gallery4, caption: "Distribution of Madrasa bags" },
  ];

  const inaugurationImages = [
    { url: inauguration1, caption: "Inaugural Ceremony" },
    { url: inauguration2, caption: "Inaugural Ceremony" },
    { url: inauguration3, caption: "Inaugural Ceremony" },
    { url: inauguration4, caption: "Inaugural Ceremony" },
    { url: inauguration5, caption: "Inaugural Ceremony" },
    { url: inauguration6, caption: "Inaugural Ceremony" },
    { url: inauguration7, caption: "Inaugural Ceremony" },
    { url: inauguration8, caption: "Inaugural Ceremony" },
  ];

  const nextImage = () => {
    setCurrentGalleryImgIdx((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentGalleryImgIdx((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };
  const nextImageInauguration = () => {
    setCurrentInaugurationImgIdx((prevIndex) =>
      prevIndex === inaugurationImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImageInauguration = () => {
    setCurrentInaugurationImgIdx((prevIndex) =>
      prevIndex === 0 ? inaugurationImages.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);
    return () => clearInterval(interval); // Cleanup
  }, [galleryImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImageInauguration();
    }, 2000);
    return () => clearInterval(interval); // Cleanup
  }, [inaugurationImages.length]);

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

      {/* Events Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in our events and be part of the positive change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Event Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
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
                  src={galleryImages[currentGalleryImgIdx].url}
                  alt={galleryImages[currentGalleryImgIdx].caption}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white text-lg font-semibold p-6">
                    {galleryImages[currentGalleryImgIdx].caption}
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
                    onClick={() => setCurrentGalleryImgIdx(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentGalleryImgIdx
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-secondary/20 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={inaugurationImages[currentInaugurationImgIdx].url}
                  alt={inaugurationImages[currentInaugurationImgIdx].caption}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white text-lg font-semibold p-6">
                    {inaugurationImages[currentInaugurationImgIdx].caption}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={prevImageInauguration}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={nextImageInauguration}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-2 p-4 bg-background">
                {inaugurationImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentInaugurationImgIdx(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentInaugurationImgIdx
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
