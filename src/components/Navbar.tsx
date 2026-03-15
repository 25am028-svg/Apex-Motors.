import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, Search, Volume2, VolumeX, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import SearchOverlay from './SearchOverlay';
import MenuOverlay from './MenuOverlay';

export default function Navbar() {
  const { isMuted, toggleMute, playHover, playClick } = useAudio();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleModelsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    playClick();
    
    const scrollToLineup = () => {
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.scrollTo('#lineup');
      } else {
        document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname === '/') {
      scrollToLineup();
    } else {
      navigate('/');
      setTimeout(scrollToLineup, 100);
    }
  };

  const navItems = [
    { name: 'Models', path: '/', onClick: handleModelsClick },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Racing', path: '/racing' },
    { name: 'Lifestyle', path: '/lifestyle' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference"
      >
        <Link to="/" onClick={playClick} className="text-2xl font-display font-bold tracking-widest uppercase hover:text-racing-blue transition-colors text-white">
          Apex<span className="text-racing-blue">.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium tracking-widest uppercase text-white">
          {navItems.map((item) => (
            item.onClick ? (
              <button
                key={item.name}
                onClick={item.onClick}
                onMouseEnter={playHover}
                className={`hover:text-racing-blue transition-colors ${location.pathname === item.path && item.name !== 'Models' ? 'text-racing-blue' : ''}`}
              >
                {item.name}
              </button>
            ) : (
              <Link 
                key={item.name}
                to={item.path} 
                onMouseEnter={playHover}
                onClick={playClick}
                className={`hover:text-racing-blue transition-colors ${location.pathname === item.path ? 'text-racing-blue' : ''}`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center space-x-6 text-white">
          <button 
            onClick={() => { playClick(); toggleMute(); }}
            onMouseEnter={playHover}
            className="hover:text-racing-blue transition-colors"
            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <button 
            onClick={() => {
              playClick();
              if (isMenuOpen) setIsMenuOpen(false);
              setIsSearchOpen(!isSearchOpen);
            }}
            onMouseEnter={playHover}
            className="hover:text-racing-blue transition-colors"
            aria-label={isSearchOpen ? "Close search" : "Open search"}
          >
            {isSearchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
          <button 
            onClick={() => {
              playClick();
              if (isSearchOpen) setIsSearchOpen(false);
              setIsMenuOpen(!isMenuOpen);
            }}
            onMouseEnter={playHover}
            className="hover:text-racing-blue transition-colors md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
