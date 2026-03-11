import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  const venueLocation = "Grand+Emerald+Masjid,+City+Center";

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-2 font-body">
          Find Us
        </p>
        <h2 className="display-text text-3xl md:text-4xl text-primary mb-2">Venue Location</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card gold-border overflow-hidden">
          <div className="aspect-video bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284378389!2d-122.41941548468204!3d37.77492977975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzAzLjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding venue location"
              className="absolute inset-0"
            />
          </div>
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <h3 className="display-text text-xl text-primary">Grand Emerald Masjid</h3>
            </div>
            <p className="text-muted-foreground text-sm font-body mb-4">
              123 Blessing Avenue, City Center
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${venueLocation}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider hover:opacity-90 transition-opacity"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;
