import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useAudio } from '../context/AudioContext';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MagneticButton({ children, className = '', onMouseEnter, onClick, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { playHover, playClick } = useAudio();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 }); // Magnetic pull strength
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={(e) => {
        playHover();
        if (onMouseEnter) onMouseEnter(e);
      }}
      onClick={(e) => {
        playClick();
        if (onClick) onClick(e);
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-block group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">{children}</span>
      {/* Liquid fill effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-racing-blue rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />
    </motion.button>
  );
}
