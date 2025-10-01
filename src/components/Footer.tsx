import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">NOOR AL KHAIR CHARITABLE TRUST</span>
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
                <Link to="/news-events" className="text-muted-foreground hover:text-primary transition-colors">
                  News and Events
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
                <span className="text-muted-foreground">nooralkhairct@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">7698853478</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">NOOR AL-KHAIR CHARITABLE TRUST, <br/> Shop No. 30, Govind Tower Commercial, Umerkoi Road, Bavisa Faliya, Silvassa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NAKCT. All rights reserved. Making a difference, one life at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
