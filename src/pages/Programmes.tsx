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

const Programmes = () => {
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
      <section className="py-20 bg-background">
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
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Education is the cornerstone of our mission. We believe that knowledge and skills are the 
                most powerful tools for breaking the cycle of poverty and creating lasting change.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Maktab Institutions Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Economic upliftment and modernization of Maktab institutions, ensuring quality religious 
                  and contemporary education for students.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Professional Skills Training</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Supporting Talba and youth to acquire professional skills that prepare them for meaningful 
                  careers and economic independence.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Youth Counselling Programs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Organizing comprehensive youth counselling programmes to help young people set future goals 
                  and navigate their educational and career paths.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Make Youth Capable Initiative</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our ultimate aim is to equip youth with the capabilities, confidence, and competencies 
                  needed to thrive in the modern world.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-10 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Long-Term Educational Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg leading-relaxed">Establish schools providing comprehensive primary and secondary education</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg leading-relaxed">Launch technical colleges offering vocational training and certifications</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg leading-relaxed">Create medical colleges to train the next generation of healthcare professionals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programme 2: Orphans & Widows */}
      <section className="py-20 bg-muted">
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
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl text-secondary">Providing Care and Opportunity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                We recognize that orphans and widows are among the most vulnerable members of our society. 
                Our comprehensive support programme ensures they receive not just financial assistance, but 
                also emotional support and opportunities for a brighter future.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-secondary/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Financial Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Direct financial assistance to widows and orphans to cover basic necessities, ensuring 
                  dignity and stability during challenging times.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-secondary/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Educational Sponsorship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Full funding for education of underprivileged but meritorious children, ensuring that 
                  financial constraints never stand in the way of academic excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programme 3: Healthcare and Nutrition */}
      <section className="py-20 bg-background">
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
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl text-accent">Health is Wealth</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Access to quality healthcare should not be a privilege. We provide comprehensive medical 
                support and nutritional assistance to ensure the well-being of vulnerable communities.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Stethoscope className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Medical Support for Students</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive medical support for Talba, ensuring students can focus on their education 
                  without health concerns hindering their progress.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Care for Disabled Individuals</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized medical assistance and support services for disabled individuals, ensuring 
                  they receive the care and dignity they deserve.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-accent/50 md:col-span-2">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Emergency Medical Assistance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Providing critical medical help to needy individuals during emergencies, ensuring no one 
                  is denied care due to financial constraints.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programme 4: Livelihood */}
      <section className="py-20 bg-muted">
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
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl text-primary">From Recipients to Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our livelihood programme is built on a transformative vision: converting Zakat recipients 
                into Zakat givers through sustainable economic opportunities and entrepreneurship support.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Financial Aid for Imams</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Supporting religious leaders with financial assistance, recognizing their invaluable 
                  service to the community.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Small Business Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Providing seed capital and guidance for small-scale business ventures, enabling 
                  entrepreneurship and economic self-sufficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300 border-2 border-border hover:border-primary/50 md:col-span-2">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Employment Assistance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Helping job seekers find meaningful employment through skills training, job placement 
                  services, and connections with potential employers.
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
