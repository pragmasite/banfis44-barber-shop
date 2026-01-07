import { motion } from "framer-motion";
import { Phone, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src="/images/logo.jpg"
          alt="Banfi's 44"
          className="h-full w-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
        />
      </div>

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm tracking-widest text-white backdrop-blur-sm"
        >
          {t.hero.badge}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {t.hero.title1}
            <br />
            <span className="text-accent">{t.hero.title2}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-10 max-w-2xl text-lg md:text-xl text-white/80"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            <a href="tel:+41799208857" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {t.hero.badge}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            <a href="mailto:banfis44barbershop@gmail.com" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              {t.hero.sendEmail}
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/60 text-sm"
        >
          {t.hero.location}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#chi-siamo"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 rounded-full border border-white/30 p-3 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
