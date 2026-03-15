import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Model Not Found</h1>
          <Link to="/" className="text-racing-blue hover:underline">Return to Lineup</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-obsidian text-white pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-sans text-sm tracking-widest uppercase">Back to Lineup</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[50vh] lg:h-[80vh] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <span className="font-sans text-xs tracking-[0.2em] text-racing-blue font-semibold uppercase block mb-2">
                {product.category}
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                {product.name}
              </h1>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed mb-12">
              {product.longDescription || product.description}
            </p>

            <div className="space-y-12">
              {/* Specifications */}
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-6 border-b border-white/10 pb-4">
                  Key Specifications
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {product.specs?.map((spec, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <dt className="font-sans text-xs text-white/50 uppercase tracking-widest mb-1">{spec.label}</dt>
                      <dd className="font-sans text-lg font-medium">{spec.value}</dd>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Advantages */}
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-6 border-b border-white/10 pb-4">
                  Advantages
                </h3>
                <ul className="space-y-4">
                  {product.advantages?.map((adv, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="text-racing-blue mr-3 shrink-0 mt-0.5" size={20} />
                      <span className="font-sans text-white/80">{adv}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
