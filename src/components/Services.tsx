import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Droplets, Heart, Home, Sparkles, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const icons = [Scissors, Droplets, Heart, Home, Sparkles, Zap];

  return (
    <section id="servizi" ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.services.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.services.title}
          </h2>
          <p className="text-lg text-foreground/60 mt-4 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group p-8 rounded-2xl bg-background border border-border shadow-soft hover:shadow-medium hover:border-accent transition-all"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
