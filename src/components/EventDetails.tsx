import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Nikah Ceremony",
    icon: "🕌",
    date: "December 25, 2026",
    time: "2:00 PM - 4:00 PM",
    venue: "Grand Emerald Masjid",
    address: "123 Blessing Avenue, City Center",
  },
  {
    title: "Walima Reception",
    icon: "🎉",
    date: "December 26, 2026",
    time: "6:00 PM - 11:00 PM",
    venue: "Royal Gold Banquet Hall",
    address: "456 Celebration Road, Downtown",
  },
];

const EventDetails = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-2 font-body">
          Join Us
        </p>
        <h2 className="display-text text-3xl md:text-4xl text-primary mb-2">Event Details</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="max-w-2xl mx-auto grid gap-6 md:grid-cols-2">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass-card p-8 text-center gold-border"
          >
            <span className="text-4xl mb-4 block">{event.icon}</span>
            <h3 className="display-text text-2xl text-primary mb-4">{event.title}</h3>

            <div className="space-y-3">
              <p className="elegant-text text-secondary text-lg font-semibold">{event.date}</p>

              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm font-body">{event.time}</span>
              </div>

              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gradient-gold)" }} />

              <div className="flex items-center justify-center gap-2 text-foreground">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-body font-semibold text-sm">{event.venue}</span>
              </div>

              <p className="text-muted-foreground text-xs font-body">{event.address}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventDetails;
