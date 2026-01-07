import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#chi-siamo", label: t.nav.about },
    { href: "#servizi", label: t.nav.services },
    { href: "#galleria", label: t.nav.gallery },
    { href: "#orari", label: t.nav.hours },
    { href: "#contatti", label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col mb-4">
              <span className="font-serif text-2xl font-bold">BANFI'S 44</span>
              <span className="text-sm tracking-widest opacity-80">
                {t.footer.tagline}
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.navigation}</h3>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.contact.label}</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+41799208857"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                +41 79 920 8857
              </a>
              <a
                href="mailto:banfis44barbershop@gmail.com"
                className="block text-primary-foreground/80 hover:text-accent transition-colors break-words"
              >
                banfis44barbershop@gmail.com
              </a>
              <p className="text-primary-foreground/80">
                Via Cantonale 32<br />
                6818 Melano, CH
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>
            © {new Date().getFullYear()} Banfi's 44. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
