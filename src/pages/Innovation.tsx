import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Cpu, Wind, Shield } from 'lucide-react';

export default function Innovation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-racing-blue" />,
      title: "Crossplane Technology",
      description: "Our signature crossplane crankshaft delivers an uneven firing interval, providing linear torque and unparalleled rear-wheel traction. It's the heartbeat of our flagship models."
    },
    {
      icon: <Wind className="w-8 h-8 text-racing-blue" />,
      title: "Active Aerodynamics",
      description: "Wind-tunnel tested winglets and dynamic fairings reduce drag and increase downforce at high speeds, keeping the front wheel planted when you need it most."
    },
    {
      icon: <Shield className="w-8 h-8 text-racing-blue" />,
      title: "6-Axis IMU",
      description: "A state-of-the-art Inertial Measurement Unit constantly monitors pitch, roll, and yaw, feeding data to our advanced traction, slide, and wheelie control systems."
    }
  ];

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
            Engineering <span className="text-racing-blue">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-white/70 max-w-2xl mx-auto"
          >
            We don't just build motorcycles. We engineer experiences. Every component is meticulously designed to push the boundaries of performance and rider connection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-racing-blue/50 transition-colors"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">{feature.title}</h3>
              <p className="font-sans text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[60vh] rounded-3xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop" 
            alt="Engine Detail" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
          <div className="absolute bottom-12 left-12 max-w-xl">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-4">The Heart of the Machine</h2>
            <p className="font-sans text-white/80">Precision-crafted engines that deliver power, reliability, and an unforgettable soundtrack.</p>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
