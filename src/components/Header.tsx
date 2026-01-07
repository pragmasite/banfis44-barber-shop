import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#chi-siamo", label: t.nav.about },
    { href: "#servizi", label: t.nav.services },
    { href: "#galleria", label: t.nav.gallery },
    { href: "#orari", label: t.nav.hours },
    { href: "#contatti", label: t.nav.contact },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex flex-col group">
          <span className={`font-serif text-2xl font-bold transition-colors ${isScrolled ? "text-primary" : "text-white"} group-hover:text-accent`}>
            BANFI'S 44
          </span>
          <span className={`text-xs tracking-widest font-medium ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
            {t.nav.profession}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                isScrolled
                  ? "text-foreground hover:bg-accent/10 hover:text-accent"
                  : "text-white/80 hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-current border-opacity-20">
            <Link
              to={otherLangPath}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-accent"
                  : "text-white/80 hover:text-accent"
              }`}
            >
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>

            <Button
              asChild
              size="sm"
              className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="tel:+41799208857" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="tel:+41799208857" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
