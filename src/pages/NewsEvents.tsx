import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpeg";
import event3 from "@/assets/event3.jpg";
import event4 from "@/assets/event4.jpg";
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
import counselling1 from "@/assets/COUNSELING-1.jpeg";
import counselling2 from "@/assets/COUNSELING-2.jpeg";
import counselling3 from "@/assets/COUNSELING-3.jpeg";
import counselling4 from "@/assets/COUNSELING-4.jpeg";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const events = [
  {
    id: "inaugural",
    title: "Inaugural Ceremony of Noor Al-Khair Charitable Trust Office",
    date: "October 5, 2025",
    time: "11 AM",
    location:
      "Noor Al-Khair Charitable Trust Office, Shop No. 30, Govinda Commercial Complex, Umerkoi Road, Bavisa Faliya, Silvassa",
    locationUrl: "https://maps.app.goo.gl/ttTnfu91maotXJyD8",
    description:
      "Join us for the grand opening of our new office. Meet the team, learn about our mission, and explore how you can get involved.",
    contact: 7698853478,
    image: event1,
  },
  {
    id: "counseling",
    title: "INVITATION – STUDENTS COUNSELING SESSION",
    date: "October 12, 2025",
    time: "10 AM - 12 PM",
    location:
      "Noor Al-Khair Charitable Trust Office, Shop No. 30, Govinda Commercial Complex, Umerkoi Road, Bavisa Faliya, Silvassa",
    locationUrl: "https://maps.app.goo.gl/ttTnfu91maotXJyD8",
    description:
      "🌟 Guidance for a Brighter Future! 🌟 <br/> We invite all students and parents to join our Counseling Session aimed at helping students choose the right educational and career path, develop confidence, and achieve success — Insha’Allah. <br/> ✨ Open for all students — especially those seeking career guidance and motivation. Let’s come together to inspire and build a successful future generation!",
    contact: 7698853478,
    image: event2,
  },
  {
    id: "admission",
    title: "MAKTAB NOOR AL-KHAIR - ADMISSIONS OPEN",
    date: "Ongoing",
    time: "Flexible Timings",
    location:
      "Noor Al-Khair Charitable Trust Office, Shop No. 30, Govinda Commercial Complex, Umerkoi Road, Bavisa Faliya, Silvassa",
    locationUrl: "https://maps.app.goo.gl/ttTnfu91maotXJyD8",
    description: "<strong>📚 Learn Quran With Highly Qualified Teachers</strong><br/><br/>  📖 <strong>You Will Learn:</strong><br/> • Basic Islamic Beliefs, Manners and Etiquettes<br/> • Memorization of Quranic Surahs<br/> • Daily Essential Dua’s<br/> • The Seerah of Prophet Mohammad (ﷺ)<br/> • Lady Teacher for Female Students<br/> • Personality Development<br/><br/> 🌙 <strong>You Will Facilitate:</strong><br/> • Flexible Schedule (24/7)<br/> • Batch-wise & 1-to-1 Classes<br/> • Easy Lessons with Deeniyat Syllabus<br/> • Affordable Monthly Fee<br/> • Spacious Classroom<br/> • CCTV Surveillance ",
    contact: 7698853478,
    image: event3,
  },
  {
    id: "medical-camp",
    title: "FREE MEDICAL CONSULTATION CAMP",
    date: "Every Sunday",
    time: "7 PM - 9 PM",
    location:
      "Noor Al-Khair Charitable Trust Office, Shop No. 30, Govinda Commercial Complex, Umerkoi Road, Bavisa Faliya, Silvassa",
    locationUrl: "https://maps.app.goo.gl/ttTnfu91maotXJyD8",
    description: "🩺 <strong>FREE MEDICAL CONSULTATION CAMP (Weekly)</strong><br/> Organized by: <strong>Noor Al-Khair Charitable Trust</strong><br/><br/> 🧾 <strong>Register for MEDICAL CONSULTATION</strong><br/> 👨‍⚕️ <strong>Doctor:</strong> Dr. Rahemat Baig Mirza, B.Sc, DHMS<br/><br/> 🕖 <strong>Time:</strong> 7:00 PM – 9:00 PM<br/> 📅 <strong>Day:</strong> Every Sunday (Once a Week)<br/><br/> 💊 <strong>Services Available:</strong><br/> 1) Free Medical Consultation (Homeopathy)<br/> 2) Medicines at affordable prices, with concessions for underprivileged people.<br/> 3) Medical Guidance & Health Advice<br/><br/> 📍 <strong>Venue:</strong><br/> Noor Al-Khair Charitable Trust Office<br/> Shop No. 30, Govind Tower Commercial,<br/> Umerkoi Road, Bavisa Faliya, Silvassa<br/><br/> 📞 <strong>For Registration / Appointments:</strong><br/> Call or WhatsApp: <a href='tel:+917698853478'>+91 76988 53478</a><br/><br/> ✨ <em>Your Health, Our Care – Together for a Better Tomorrow</em>",
    contact: 7698853478,
    image: event4,
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

const counselingSessionImages = [
  { url: counselling1, caption: "Counseling Session" },
  { url: counselling2, caption: "Counseling Session" },
  { url: counselling3, caption: "Counseling Session" },
  { url: counselling4, caption: "Counseling Session" },
];

const NewsEvents = () => {
  const [currentGalleryImgIdx, setCurrentGalleryImgIdx] = useState(0);
  const [currentInaugurationImgIdx, setCurrentInaugurationImgIdx] = useState(0);
  const [currentCounselingImgIdx, setCurrentCounselingImgIdx] = useState(0);

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

  const nextImageCounseling = () => {
    setCurrentCounselingImgIdx((prevIndex) =>
      prevIndex === counselingSessionImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImageCounseling = () => {
    setCurrentCounselingImgIdx((prevIndex) =>
      prevIndex === 0 ? counselingSessionImages.length - 1 : prevIndex - 1
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextImageCounseling();
    }, 2000);
    return () => clearInterval(interval); // Cleanup
  }, [counselingSessionImages.length]);

  return (
    <div className="min-h-screen flex flex-col">
      

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 border-primary/20 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col h-[480px] sm:h-[500px]"
              >
                {/* Image */}
                <div className="w-full h-56 sm:h-60 overflow-hidden flex items-center justify-center bg-muted">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500"
                  />
                </div>
                <CardHeader className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold line-clamp-2">
                    {event.title}
                  </h3>
                </CardHeader>

                <CardContent className="px-4 pb-6 flex flex-col flex-grow space-y-3">
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-primary" />
                      <a href={`tel:${event.contact}`}>
                        <span className="hover:underline">{event.contact}</span>
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin
                        size={16}
                        className="flex-shrink-0 mt-0.5 text-primary"
                      />
                      {event.locationUrl ? (
                        <a
                          href={event.locationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="hover:underline">
                            {event.location}
                          </span>
                        </a>
                      ) : (
                        <div className="text-sm leading-snug break-words overflow-hidden h-[3.5em] sm:h-[4em]">
                          {event.location}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <Link to={`/news-events/${event.id}`}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
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
                  src={galleryImages[currentGalleryImgIdx].url}
                  alt={galleryImages[currentGalleryImgIdx].caption}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain bg-black"
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
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain bg-black"
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
          <Card className="border-2 border-secondary/20 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={counselingSessionImages[currentCounselingImgIdx].url}
                  alt={counselingSessionImages[currentCounselingImgIdx].caption}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain bg-black"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white text-lg font-semibold p-6">
                    {counselingSessionImages[currentCounselingImgIdx].caption}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={prevImageCounseling}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={nextImageCounseling}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-2 p-4 bg-background">
                {counselingSessionImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCounselingImgIdx(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentCounselingImgIdx
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
