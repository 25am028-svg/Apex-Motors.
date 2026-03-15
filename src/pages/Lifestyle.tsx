import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Compass, Users, MapPin } from 'lucide-react';

export default function Lifestyle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-obsidian text-white pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6"
          >
            The <span className="text-racing-blue">Journey</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-white/70 max-w-2xl mx-auto"
          >
            It's more than a machine. It's a way of life. Join a global community of riders who share your passion for the open road and the pursuit of freedom.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" 
              alt="Community" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-2">Community Events</h3>
              <p className="font-sans text-white/80">Connect with riders worldwide.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?q=80&w=2070&auto=format&fit=crop" 
              alt="Adventure" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-2">Epic Tours</h3>
              <p className="font-sans text-white/80">Discover new horizons.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: <Compass className="w-12 h-12 mx-auto text-racing-blue mb-6" />, title: "Explore", desc: "Find curated routes and hidden gems." },
            { icon: <Users className="w-12 h-12 mx-auto text-racing-blue mb-6" />, title: "Connect", desc: "Join local chapters and riding groups." },
            { icon: <MapPin className="w-12 h-12 mx-auto text-racing-blue mb-6" />, title: "Experience", desc: "Attend exclusive track days and events." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {item.icon}
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="font-sans text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
