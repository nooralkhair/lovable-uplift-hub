import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Heart, 
  Stethoscope, 
  Briefcase, 
  Target, 
  Users, 
  BookOpen, 
  Building,
  CheckCircle2
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Programmes = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        const yOffset = -112; // Adjust for sticky headers (if any)
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });

        setTimeout(() => {
          window.history.replaceState(null, "", location.pathname);
        }, 600); // or match scroll duration
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Programmes
          </h1>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed animate-slide-up">
            Comprehensive initiatives designed to create lasting impact across education, 
            healthcare, and economic empowerment
          </p>
        </div>
      </section>

      {/* Programme 1: Education and Training */}
<section id="education-training" className="py-20 bg-background">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex items-center gap-4 mb-12">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-card">
        <GraduationCap className="h-10 w-10 text-primary-foreground" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold">Education and Training</h2>
        <p className="text-muted-foreground text-lg mt-1">Building futures through knowledge</p>
      </div>
    </div>

    <Card className="mb-10 shadow-card border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl md:text-3xl text-primary">Empowering Through Knowledge and Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Education is the cornerstone of our mission. We believe that knowledge and skills are 
          the most powerful tools for breaking the cycle of poverty and creating lasting change.
        </p>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Purpose of Maktab */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Purpose of Maktab</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Teaching Qur’an with Tajweed, Islamic values, and character-building (Adab & Akhlaaq). 
            Maktab preserves faith, nurtures respect, and prepares children for lifelong Deen and advanced learning.
          </p>
        </CardContent>
      </Card>

      {/* Upliftment of Ṭalaba */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Upliftment of Ṭalaba</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Scholarships, books, and mentorship for students of knowledge. 
            Supporting their tarbiyah, spiritual growth, and enabling them to serve the Ummah as scholars and leaders.
          </p>
        </CardContent>
      </Card>

      {/* Upliftment of Poor Children */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Upliftment of Poor Children</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Providing scholarships, uniforms, books, and career guidance for underprivileged children, 
            ensuring no capable child is deprived of education due to poverty.
          </p>
        </CardContent>
      </Card>

      {/* Make Youth Capable Initiative */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Make Youth Capable Initiative</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Equipping youth with skills, leadership opportunities, career guidance, and a strong Islamic identity 
            to thrive in modern society.
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Long-Term Educational Goals */}
    <Card className="mt-10 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 shadow-card">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
          <Target className="h-8 w-8 text-primary" />
          Long-Term Educational Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20">
          <CheckCircle2 className="h-6 w-6 text-primary mt-0.5" />
          <p className="text-lg">Establish schools combining Islamic values with modern education.</p>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20">
          <CheckCircle2 className="h-6 w-6 text-primary mt-0.5" />
          <p className="text-lg">Launch technical colleges offering vocational training and certifications.</p>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20">
          <CheckCircle2 className="h-6 w-6 text-primary mt-0.5" />
          <p className="text-lg">Create hospitals and medical colleges to train compassionate healthcare professionals.</p>
        </div>
      </CardContent>
    </Card>
  </div>
</section>

{/* Programme 2: Orphans & Widows */}
<section id="orphans-widows" className="py-20 bg-muted">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex items-center gap-4 mb-12">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center shadow-card">
        <Heart className="h-10 w-10 text-primary-foreground" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold">Orphans & Widows Support</h2>
        <p className="text-muted-foreground text-lg mt-1">Compassionate care for the vulnerable</p>
      </div>
    </div>

    <Card className="mb-10 shadow-card border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-background">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-secondary">Providing Care and Opportunity</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Standing beside widows and orphans with dignity, financial support, emotional care, 
          and opportunities for education and livelihood.
        </p>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Financial Support */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-secondary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-secondary/10">
              <Heart className="h-6 w-6 text-secondary" />
            </div>
            <CardTitle className="text-xl">Financial Support</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Direct financial assistance, housing, and sustenance for widows and orphans 
            to ensure stability and dignity in their lives.
          </p>
        </CardContent>
      </Card>

      {/* Educational Sponsorship */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-secondary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-secondary/10">
              <GraduationCap className="h-6 w-6 text-secondary" />
            </div>
            <CardTitle className="text-xl">Educational Sponsorship</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Full scholarships for orphaned children, ensuring financial hardship never blocks education.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

{/* Programme 3: Healthcare and Nutrition */}
<section id="healthcare-nutrition" className="py-20 bg-background">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex items-center gap-4 mb-12">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-card">
        <Stethoscope className="h-10 w-10 text-primary-foreground" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold">Healthcare and Nutrition</h2>
        <p className="text-muted-foreground text-lg mt-1">Quality healthcare for all</p>
      </div>
    </div>

    <Card className="mb-10 shadow-card border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-accent">Health is Wealth</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Healthcare and nutrition support for students, needy persons, and disabled individuals, 
          ensuring no one is left behind in their journey to wellness.
        </p>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Medical Expenses Aid */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-accent/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-accent/10">
              <Stethoscope className="h-6 w-6 text-accent" />
            </div>
            <CardTitle className="text-xl">Medical Expenses Aid</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Financial aid for surgeries, treatments, medicines, and emergency medical cases, 
            ensuring timely and affordable healthcare.
          </p>
        </CardContent>
      </Card>

      {/* Disabled Persons Care */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-accent/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-accent/10">
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <CardTitle className="text-xl">Care for Disabled Individuals</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Specialized healthcare, mobility aids, therapy, and family support for disabled persons 
            to live with dignity and empowerment.
          </p>
        </CardContent>
      </Card>

      {/* Sports & Physical Activity */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-accent/50 md:col-span-2">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-accent/10">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <CardTitle className="text-xl">Sports, Games & Physical Activity</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Promoting fitness, sports, and recreational activities for youth and communities — 
            fostering teamwork, discipline, and healthy living.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

{/* Programme 4: Livelihood */}
<section id="livelihood-support" className="py-20 bg-muted">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex items-center gap-4 mb-12">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-accent to-accent-light flex items-center justify-center shadow-card">
        <Briefcase className="h-10 w-10 text-primary-foreground" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold">Livelihood Support</h2>
        <p className="text-muted-foreground text-lg mt-1">Creating sustainable futures</p>
      </div>
    </div>

    <Card className="mb-10 shadow-card border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-primary">From Recipients to Contributors</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A transformative vision: converting Zakat recipients into Zakat givers through 
          sustainable economic opportunities, training, and entrepreneurship.
        </p>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Imams Support */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Economic Upliftment of Imams</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Fair stipends, housing, training, and family welfare support for Imams, 
            empowering them to serve the community with sincerity.
          </p>
        </CardContent>
      </Card>

      {/* Zakat Recipients to Givers */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Zakat Recipients into Givers</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Supporting needy individuals to start small businesses, gain financial independence, 
            and eventually become Zakat givers themselves.
          </p>
        </CardContent>
      </Card>

      {/* Employment Assistance */}
      <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50 md:col-span-2">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Employment Assistance</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Job training, resume building, interview preparation, and placement opportunities 
            to help individuals achieve financial independence and stability.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Programmes;
