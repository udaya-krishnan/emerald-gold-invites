import { motion } from "framer-motion";
import coupleImage from "@/assets/couple.png";
import islamicPattern from "@/assets/islamic-pattern.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Golden glow behind couple */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Decorative patterns */}
      <img
        src={islamicPattern}
        alt=""
        className="absolute top-0 left-0 w-24 md:w-36 opacity-15"
      />
      <img
        src={islamicPattern}
        alt=""
        className="absolute top-0 right-0 w-24 md:w-36 opacity-15 rotate-90"
      />

      {/* Sparkles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="elegant-text text-secondary text-lg md:text-xl tracking-widest mb-4 text-center"
      >
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-muted-foreground tracking-[0.3em] uppercase text-xs md:text-sm mb-2 font-body"
      >
        We are getting married
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="section-divider mb-8"
      />

      {/* Couple Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative mb-8"
      >
        {/* Golden glow circle */}
        <div
          className="absolute inset-0 -m-10 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(43 80% 70% / 0.25) 0%, transparent 70%)",
            animation: "glow-pulse 3s ease-in-out infinite",
          }}
        />
        <motion.img
          src={coupleImage}
          alt="Wedding couple"
          className="relative w-64 md:w-80 lg:w-96 drop-shadow-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Names */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center"
      >
        <h1 className="display-text text-5xl md:text-7xl text-primary mb-1">Ahmed</h1>
        <span className="gold-text text-4xl md:text-5xl display-text italic inline-block my-2">&</span>
        <h1 className="display-text text-5xl md:text-7xl text-primary">Fatima</h1>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="section-divider mt-8"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
        className="elegant-text text-muted-foreground text-lg md:text-xl mt-6 italic max-w-lg text-center"
      >
        "And He placed between you affection and mercy."
        <br />
        <span className="text-sm tracking-widest">— Quran 30:21</span>
      </motion.p>
    </section>
  );
};

export default HeroSection;
