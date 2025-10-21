import {
  Target,
  Users,
  BookOpen,
  Stethoscope,
  Handshake,
  Layers,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const missions = [
  {
    icon: BookOpen,
    text: "Nurture the next generation with Islamic and modern education.",
  },
  {
    icon: Users,
    text: "Support orphans, widows, and underprivileged families financially and emotionally.",
  },
  {
    icon: Layers,
    text: "Provide scholarships and ensure access to quality education for all.",
  },
  {
    icon: Stethoscope,
    text: "Offer medical aid and healthcare support to the sick and disabled.",
  },
  {
    icon: Handshake,
    text: "Empower families through business support and skill development.",
  },
  {
    icon: Target,
    text: "Help the needy rise from zakāt receivers to zakāt givers.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-4xl font-bold mb-6 animate-fade-in">
            ABOUT <br /> NOOR AL-KHAIR CHARITABLE TRUST
          </h1>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed animate-slide-up">
            Connecting the capable with the needy — serving humanity with
            dignity and faith.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>

          <Card className="border-2 border-primary/20 shadow-card">
            <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
              <p>
                NOOR AL-KHAIR CHARITABLE TRUST (
                <span className="font-semibold text-primary">NAKCT</span>) is a
                non-profit Islamic organization established in 2024 by{" "}
                <span className="font-semibold">
                  Haji MOHAMMED YUSUF ADAM SHAIKH
                </span>{" "}
                (Founder) and{" "}
                <span className="font-semibold">SALEEM MOMIN</span>{" "}
                (Co-founder). In 2025, the legal framework was strengthened with
                the support of{" "}
                <span className="italic">
                  Haji Mohammed Noaman, Haji Mukarram Khan, Sheikh Dilavar
                  Gulab, Rahemat Baig Mirza, and Israr Ahmed Shaikh
                </span>
                .
              </p>
              <p>
                Guided by the Qur’an and Sunnah, our mission is to serve
                humanity through education, healthcare, social welfare, and
                economic empowerment. We believe that charity is not just
                financial aid, but a means to restore dignity, hope, and
                opportunity in people’s lives.
              </p>
              <p>
                From supporting orphans, widows, and underprivileged families,
                to offering scholarships, medical aid, and small business
                support, every effort we make is rooted in the Islamic values of
                compassion, justice, and brotherhood.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-8"></div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30">
            <CardContent className="p-8 md:p-12 text-center text-xl leading-relaxed">
              To build a society where every needy person finds dignity, support, and opportunity through collective compassion.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connecting the needy with the capable to uplift the Ummah — Alhamdulillah.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <Card
                key={index}
                className="border border-border hover:shadow-hover transition-all duration-300"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <mission.icon className="w-8 h-8 text-primary shrink-0" />
                  <p className="text-lg">{mission.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
