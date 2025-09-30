import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Heart, Stethoscope, Briefcase, Target, Users, BookOpen, Building } from "lucide-react";

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
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold">Education and Training</h2>
          </div>

          <Card className="mb-8 shadow-card border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Empowering Through Knowledge and Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <p className="text-muted-foreground">
                Education is the cornerstone of our mission. We believe that knowledge and skills are the 
                most powerful tools for breaking the cycle of poverty and creating lasting change.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-primary" />
                  <CardTitle>Maktab Institutions Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Economic upliftment and modernization of Maktab institutions, ensuring quality religious 
                  and contemporary education for students.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <CardTitle>Professional Skills Training</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Supporting Talba and youth to acquire professional skills that prepare them for meaningful 
                  careers and economic independence.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  <CardTitle>Youth Counselling Programs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Organizing comprehensive youth counselling programmes to help young people set future goals 
                  and navigate their educational and career paths.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>Make Youth Capable Initiative</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our ultimate aim is to equip youth with the capabilities, confidence, and competencies 
                  needed to thrive in the modern world.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl">Long-Term Educational Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Establish schools providing comprehensive primary and secondary education</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Launch technical colleges offering vocational training and certifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Create medical colleges to train the next generation of healthcare professionals</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programme 2: Orphans & Widows */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold">Orphans & Widows Support</h2>
          </div>

          <Card className="mb-8 shadow-card border-2 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Providing Care and Opportunity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <p className="text-muted-foreground">
                We recognize that orphans and widows are among the most vulnerable members of our society. 
                Our comprehensive support programme ensures they receive not just financial assistance, but 
                also emotional support and opportunities for a brighter future.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle>Financial Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Direct financial assistance to widows and orphans to cover basic necessities, ensuring 
                  dignity and stability during challenging times.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle>Educational Sponsorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
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
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
              <Stethoscope className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold">Healthcare and Nutrition</h2>
          </div>

          <Card className="mb-8 shadow-card border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Health is Wealth</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <p className="text-muted-foreground">
                Access to quality healthcare should not be a privilege. We provide comprehensive medical 
                support and nutritional assistance to ensure the well-being of vulnerable communities.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle>Medical Support for Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive medical support for Talba, ensuring students can focus on their education 
                  without health concerns hindering their progress.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle>Care for Disabled Individuals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized medical assistance and support services for disabled individuals, ensuring 
                  they receive the care and dignity they deserve.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300 md:col-span-2">
              <CardHeader>
                <CardTitle>Emergency Medical Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
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
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Briefcase className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold">Livelihood Support</h2>
          </div>

          <Card className="mb-8 shadow-card border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">From Recipients to Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <p className="text-muted-foreground">
                Our livelihood programme is built on a transformative vision: converting Zakat recipients 
                into Zakat givers through sustainable economic opportunities and entrepreneurship support.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle>Financial Aid for Imams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Supporting religious leaders with financial assistance, recognizing their invaluable 
                  service to the community.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle>Small Business Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Providing seed capital and guidance for small-scale business ventures, enabling 
                  entrepreneurship and economic self-sufficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300 md:col-span-2">
              <CardHeader>
                <CardTitle>Employment Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
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
