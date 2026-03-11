import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const scratchPercentRef = useRef(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Gold gradient cover
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#c9a84c");
    gradient.addColorStop(0.3, "#f0d78c");
    gradient.addColorStop(0.5, "#dbb84d");
    gradient.addColorStop(0.7, "#f0d78c");
    gradient.addColorStop(1, "#c9a84c");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Text on scratch cover
    ctx.fillStyle = "#8a6e2f";
    ctx.font = `bold 14px 'Playfair Display', serif`;
    ctx.textAlign = "center";
    ctx.fillText("✦ Scratch to Reveal ✦", rect.width / 2, rect.height / 2 - 10);
    ctx.font = `12px 'Lato', sans-serif`;
    ctx.fillText("the Wedding Date", rect.width / 2, rect.height / 2 + 14);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const cx = x - rect.left;
    const cy = y - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    ctx.fill();

    // Check scratch percentage
    scratchPercentRef.current += 0.5;
    if (scratchPercentRef.current > 40) {
      setIsRevealed(true);
    }
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (isScratching) scratch(clientX, clientY);
  };

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-sm mx-auto text-center"
      >
        <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-2 font-body">
          Interactive
        </p>
        <h2 className="display-text text-3xl md:text-4xl text-primary mb-2">Save the Date</h2>
        <div className="section-divider mb-8" />

        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden gold-border">
          {/* Revealed content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary p-6">
            <motion.div
              initial={false}
              animate={isRevealed ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.95 }}
              className="text-center"
            >
              <p className="text-gold-light/70 tracking-widest uppercase text-xs mb-2 font-body">
                Save the Date
              </p>
              <h3 className="display-text text-3xl md:text-4xl text-primary-foreground mb-1">
                December 25, 2026
              </h3>
              <div className="w-16 h-0.5 mx-auto my-3" style={{ background: "var(--gradient-gold)" }} />
              <p className="elegant-text text-gold-light text-lg">
                Nikah at 2:00 PM
              </p>
              <p className="elegant-text text-primary-foreground/80 mt-1">
                Grand Emerald Banquet Hall
              </p>
            </motion.div>
          </div>

          {/* Scratch canvas */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-700 ${
              isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onMouseDown={() => setIsScratching(true)}
            onMouseUp={() => setIsScratching(false)}
            onMouseLeave={() => setIsScratching(false)}
            onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
            onTouchStart={() => setIsScratching(true)}
            onTouchEnd={() => setIsScratching(false)}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              handleMove(touch.clientX, touch.clientY);
            }}
          />
        </div>

        {!isRevealed && (
          <p className="text-muted-foreground text-sm mt-4 font-body animate-pulse">
            ↑ Use your finger or mouse to scratch ↑
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default ScratchCard;
