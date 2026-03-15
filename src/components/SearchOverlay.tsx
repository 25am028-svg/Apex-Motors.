import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { playHover, playClick } = useAudio();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    // In a real app, this would navigate to a search results page
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-obsidian/90"
        >
          <div className="w-full max-w-4xl px-8">
            <motion.form
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSearch}
              className="relative"
            >
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-white/50 w-8 h-8 md:w-12 md:h-12" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search models, innovation..."
                className="w-full bg-transparent border-b-2 border-white/20 text-3xl md:text-6xl font-display text-white placeholder:text-white/20 pb-4 pl-12 md:pl-20 focus:outline-none focus:border-racing-blue transition-colors"
              />
            </motion.form>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <span className="text-white/50 font-sans text-sm uppercase tracking-widest mr-4">Popular:</span>
              {['R-SERIES V4', 'Crossplane', 'MotoGP', 'Apparel'].map((term) => (
                <button 
                  key={term}
                  onMouseEnter={playHover}
                  onClick={() => {
                    if (inputRef.current) inputRef.current.value = term;
                    playClick();
                  }}
                  className="text-white hover:text-racing-blue font-sans text-sm uppercase tracking-widest transition-colors"
                >
                  {term}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
