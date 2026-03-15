import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import { products } from '../data/products';

function ProductCard({ product, index }: { product: typeof products[0], index: number, key?: React.Key }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  const { playHover, playClick } = useAudio();

  // Subtle parallax for the image inside the card
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div 
      ref={cardRef}
      onMouseEnter={playHover}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-sm bg-obsidian border border-white/5 hover:border-racing-blue/50 transition-colors duration-500"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 shadow-[inset_0_0_100px_rgba(0,51,160,0.3)]" />

      {/* Parallax Image container */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          style={{ y, scale: 1.1 }} // Scale up slightly to allow parallax movement without showing edges
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end">
        <div className="overflow-hidden mb-2">
          <motion.span 
            className="block font-sans text-xs tracking-[0.2em] text-racing-blue font-semibold uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
          >
            {product.category}
          </motion.span>
        </div>
        
        <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 group-hover:text-white transition-colors duration-300">
          {product.name}
        </h3>
        
        <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-in-out">
          <p className="font-sans text-sm text-white/70 mb-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out">
            {product.description}
          </p>
          
          <Link 
            to={`/model/${product.id}`}
            onClick={playClick}
            className="flex items-center space-x-2 font-sans text-xs tracking-widest uppercase hover:text-racing-blue transition-colors group/btn translate-y-full group-hover:translate-y-0 duration-500 delay-200 ease-out"
          >
            <span>Explore Model</span>
            <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductGrid() {
  return (
    <section id="lineup" className="py-32 px-4 md:px-8 max-w-[1600px] mx-auto">
      <div className="mb-20">
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
          The <span className="text-racing-blue">Lineup</span>
        </h2>
        <p className="font-sans text-white/60 max-w-xl">
          Precision engineering meets aggressive styling. Explore our latest models designed to dominate the streets and the track.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
