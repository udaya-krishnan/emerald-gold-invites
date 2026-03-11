import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InvitationCover from "@/components/InvitationCover";
import HeroSection from "@/components/HeroSection";
import ScratchCard from "@/components/ScratchCard";
import CountdownTimer from "@/components/CountdownTimer";
import EventDetails from "@/components/EventDetails";
import LocationSection from "@/components/LocationSection";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import islamicPattern from "@/assets/islamic-pattern.png";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence>
        {!isOpen && <InvitationCover onOpen={() => setIsOpen(true)} />}
      </AnimatePresence>

      {isOpen && (
        <>
          <MusicPlayer autoPlay />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />
            <ScratchCard />
            <CountdownTimer />
            <EventDetails />
            <LocationSection />
            <Gallery />

            {/* Footer */}
            <footer className="py-16 px-4 text-center relative overflow-hidden">
              <img
                src={islamicPattern}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 opacity-10"
              />
              <div className="section-divider mb-8" />
              <p className="elegant-text text-muted-foreground text-lg italic mb-2">
                We would be honored by your presence
              </p>
              <p className="display-text text-2xl md:text-3xl text-primary mb-4">
                Ahmed & Fatima
              </p>
              <p className="text-muted-foreground text-xs tracking-widest uppercase font-body">
                December 25, 2026
              </p>
            </footer>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Index;
