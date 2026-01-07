import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const schedule = [
    { hours: t.hours.closed },        // Monday
    { hours: "08:30 - 18:30" },       // Tuesday
    { hours: "08:30 - 18:30" },       // Wednesday
    { hours: "08:30 - 18:30" },       // Thursday
    { hours: "08:30 - 18:30" },       // Friday
    { hours: "08:30 - 18:30" },       // Saturday
    { hours: t.hours.closed },        // Sunday
  ];

  const todayIndex = new Date().getDay();

  return (
    <section id="orari" ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.hours.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-2xl rounded-2xl border border-border bg-background shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-semibold text-primary">
              {t.hours.header}
            </span>
          </div>
          <div className="divide-y divide-border">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    )}
                    <div>
                      <span
                        className={`font-medium ${
                          isToday ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                  </div>
                  <span
                    className={`font-medium ${
                      isClosed ? "text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
