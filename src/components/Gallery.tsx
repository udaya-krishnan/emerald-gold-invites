import { motion } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop",
];

const Gallery = () => {
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
          Moments
        </p>
        <h2 className="display-text text-3xl md:text-4xl text-primary mb-2">Our Gallery</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="aspect-square rounded-lg overflow-hidden gold-border relative group cursor-pointer"
          >
            <img
              src={img}
              alt={`Wedding gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
