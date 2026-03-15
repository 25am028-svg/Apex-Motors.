import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ProductGrid />
    </motion.main>
  );
}
