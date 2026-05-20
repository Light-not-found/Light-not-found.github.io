import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  repeat?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, repeat = 4 }) => {
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap py-10 opacity-5 select-none pointer-events-none w-[200vw] ml-[-50vw]">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust for speed
        }}
      >
        {Array.from({ length: repeat * 2 }).map((_, i) => (
          <span key={i} className="text-[15vw] md:text-[8vw] font-heading font-extrabold uppercase px-8 text-white">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
