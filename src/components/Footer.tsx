import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Lovable</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Dedicated to economic upliftment, education, and social empowerment across various sectors of society.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/vision" className="text-muted-foreground hover:text-primary transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programmes" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Programmes
                </Link>
              </li>
              <li>
                <Link to="/monthly-reports" className="text-muted-foreground hover:text-primary transition-colors">
                  Monthly Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-semibold mb-4">Programmes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Education & Training</li>
              <li>Orphans & Widows</li>
              <li>Healthcare & Nutrition</li>
              <li>Livelihood Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@lovable.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">123 Charity Lane, Community City, CC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lovable. All rights reserved. Making a difference, one life at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
