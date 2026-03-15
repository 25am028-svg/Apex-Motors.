import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AudioProvider } from './context/AudioContext';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Innovation from './pages/Innovation';
import Racing from './pages/Racing';
import Lifestyle from './pages/Lifestyle';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="flex-grow flex flex-col">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/model/:id" element={<ProductDetail />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/racing" element={<Racing />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // @ts-ignore
    window.lenis = lenis;

    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          lenis.scrollTo(target as HTMLElement);
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <AudioProvider>
        <div className="min-h-screen bg-obsidian text-white flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </AudioProvider>
    </Router>
  );
}

export default App;
