import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 920 8857",
      href: "tel:+41799208857",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "banfis44barbershop@gmail.com",
      href: "mailto:banfis44barbershop@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Via Cantonale 32, 6818 Melano, CH",
      href: "https://maps.google.com/?q=45.927067,8.980206",
    },
  ];

  return (
    <section id="contatti" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/60 mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium hover:border-accent transition-all"
                >
                  <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {info.label}
                    </h3>
                    <p className="text-foreground/70 mt-1 group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
              className="pt-6"
            >
              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a href="tel:+41799208857">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl overflow-hidden border border-border shadow-soft h-96"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.7373850627996!2d8.977916!3d45.927067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479283b5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sVia%20Cantonale%2032%2C%206818%20Melano!5e0!3m2!1sit!2sch!4v1234567890`}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
