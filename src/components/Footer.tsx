import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                NOOR AL-KHAIR CHARITABLE TRUST
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting needy people with capable people to uplift the Ummah, Insha'Allah
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/news-events"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  News and Events
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programmes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Programmes
                </Link>
              </li>
              <li>
                <Link
                  to="/monthly-reports"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Monthly Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-semibold mb-4">Programmes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/programmes#education-training"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Education & Training
                </Link>
              </li>
              <li>
                <Link
                  to="/programmes#orphans-widows"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Orphans & Widows
                </Link>
              </li>
              <li>
                <Link
                  to="/programmes#healthcare-nutrition"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Healthcare & Nutrition
                </Link>
              </li>
              <li>
                <Link
                  to="/programmes#livelihood-support"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Livelihood Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <a
                href="https://www.facebook.com/profile.php?id=61581824213963"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/nooralkhairct/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@NOOR-AL-KHAIR-CHARITABLE-TRUST"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="mailto:nooralkhairct@gmail.com"
                  className="text-muted-foreground hover:underline break-all"
                >
                  nooralkhairct@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="tel:7698853478"
                  className="text-muted-foreground hover:underline"
                >
                  7698853478
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/ttTnfu91maotXJyD8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:underline"
                >
                  NOOR AL-KHAIR CHARITABLE TRUST, <br /> Shop No. 30, Govinda
                  Commercial Complex, Umerkoi Road, Bavisa Faliya, Silvassa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NAKCT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
