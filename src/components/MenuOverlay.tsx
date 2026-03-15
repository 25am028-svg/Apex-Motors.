import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';

const links = [
  { name: 'Models', path: '/' },
  { name: 'Innovation', path: '/innovation' },
  { name: 'Racing', path: '/racing' },
  { name: 'Lifestyle', path: '/lifestyle' }
];

export default function MenuOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const navigate = useNavigate();
  const { playHover, playClick } = useAudio();

  const handleNavigation = (path: string) => {
    playClick();
    onClose();
    if (path === '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
          animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
          exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center space-y-6 md:space-y-10">
            {links.map((link, i) => (
              <div key={link.name} className="overflow-hidden">
                <motion.button
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  onMouseEnter={playHover}
                  onClick={() => handleNavigation(link.path)}
                  className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter hover:text-racing-blue transition-colors text-white"
                >
                  {link.name}
                </motion.button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
