import { motion, AnimatePresence } from "framer-motion";
import islamicPattern from "@/assets/islamic-pattern.png";

interface InvitationCoverProps {
  onOpen: () => void;
}

const InvitationCover = ({ onOpen }: InvitationCoverProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary overflow-hidden"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <img src={islamicPattern} alt="" className="absolute top-4 left-4 w-32 h-32 md:w-48 md:h-48" />
        <img src={islamicPattern} alt="" className="absolute top-4 right-4 w-32 h-32 md:w-48 md:h-48 rotate-90" />
        <img src={islamicPattern} alt="" className="absolute bottom-4 left-4 w-32 h-32 md:w-48 md:h-48 -rotate-90" />
        <img src={islamicPattern} alt="" className="absolute bottom-4 right-4 w-32 h-32 md:w-48 md:h-48 rotate-180" />
      </div>

      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center px-6 relative z-10"
      >
        {/* Bismillah */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="elegant-text text-gold-light text-lg md:text-xl mb-6 tracking-widest"
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="section-divider mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gold-light/80 tracking-[0.3em] uppercase text-xs md:text-sm mb-4 font-body"
        >
          The Wedding of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="display-text text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-2"
        >
          Ahmed
        </motion.h1>

        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="gold-text text-3xl md:text-4xl display-text italic inline-block my-2"
        >
          &
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="display-text text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6"
        >
          Fatima
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="section-divider mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="elegant-text text-primary-foreground/70 text-lg md:text-xl mb-10 italic max-w-md mx-auto"
        >
          "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them."
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(43 72% 55% / 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="px-10 py-4 rounded-full border-2 border-gold text-gold-light font-body tracking-[0.2em] uppercase text-sm hover:bg-gold/10 transition-all duration-300 cursor-pointer"
        >
          Tap to Open Invitation
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default InvitationCover;
