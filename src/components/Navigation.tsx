import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programmes", path: "/programmes" },
    { name: "Monthly Reports", path: "/monthly-reports" },
    { name: "News & Events", path: "/news-events" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleJoinUs = () => {
    if (isMobile) {
      const message = encodeURIComponent(
        "Hello! I would like to join and support this mission."
      );
      window.location.href = `https://wa.me/9106623708?text=${message}`;
    } else {
      setShowComingSoon(true);
    }
  };

  return (
    <nav className="bg-background shadow-soft sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-28">
          {/* Logo and Donate Button */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="h-28 w-28 rounded-full bg-[url('../src/assets/logo.jpg')] bg-center bg-no-repeat bg-[length:120%] flex items-center justify-center"
            />
            <Link to="/donate">
              <Button
                variant="default"
                size="sm"
                className="hidden sm:flex items-center gap-2 animate-blink hover:animate-none hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                <Heart className="h-4 w-4 fill-current" />
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleJoinUs}
              className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <UserPlus className="h-4 w-4" />
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <Button
                  variant="default"
                  size="sm"
                  className="flex sm:hidden items-center gap-2 mx-4 animate-blink hover:animate-none w-[calc(100%-2rem)] text-lg"
                >
                  <Heart className="h-4 w-4 fill-current" />
                  Donate Now
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  handleJoinUs();
                }}
                className="flex items-center gap-2 mx-4"
              >
                <UserPlus className="h-4 w-4" />
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              Portal Coming Soon! 🚀
            </DialogTitle>
            <DialogDescription className="text-center pt-4">
              We're working hard to bring you an amazing portal experience.
              <br />
              <br />
              Stay tuned for updates!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setShowComingSoon(false)} variant="default">
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navigation;
