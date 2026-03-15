import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Trophy, Flag, Timer } from 'lucide-react';

export default function Racing() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
              Born on the <span className="text-racing-blue">Track</span>
            </h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed mb-8">
              Racing is in our blood. From the legendary circuits of Europe to the grueling endurance races across the globe, we test our machines in the most demanding environments to bring championship-winning technology to the street.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-display font-bold text-racing-blue mb-2">15+</div>
                <div className="font-sans text-sm uppercase tracking-widest text-white/50">World Championships</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-racing-blue mb-2">500+</div>
                <div className="font-sans text-sm uppercase tracking-widest text-white/50">Race Victories</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[60vh] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop" 
              alt="Racing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-racing-blue/20 mix-blend-overlay" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Trophy />, title: "MotoGP", desc: "Competing at the pinnacle of motorcycle racing." },
            { icon: <Flag />, title: "WorldSBK", desc: "Dominating production-based superbike championships." },
            { icon: <Timer />, title: "Endurance", desc: "Proving reliability in 24-hour grueling races." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 p-8 rounded-xl border border-white/10 text-center flex flex-col items-center"
            >
              <div className="text-racing-blue mb-4">{item.icon}</div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-2">{item.title}</h3>
              <p className="font-sans text-sm text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
