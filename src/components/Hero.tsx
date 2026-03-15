import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const headline = "ENGINEERED FOR THE APEX";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      }
    }
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-obsidian/40 z-10" /> {/* Dark overlay */}
        <img 
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop" 
          alt="Premium Motorcycle" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden flex flex-wrap justify-center max-w-5xl text-wave pb-4"
        >
          {headline.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-[2vw] mb-4">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  variants={letterVariants}
                  className="inline-block font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl font-sans font-light tracking-wide text-white/80 max-w-2xl"
        >
          Experience the pinnacle of mechanical perfection. Where raw power meets refined control.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-12"
        >
          <MagneticButton 
            onClick={() => {
              // @ts-ignore
              if (window.lenis) {
                // @ts-ignore
                window.lenis.scrollTo('#lineup');
              } else {
                document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 border border-white/30 rounded-full font-sans text-sm tracking-widest uppercase hover:border-racing-blue transition-colors"
          >
            Discover the Lineup
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
