import React from 'react';
import { motion } from 'motion/react';
import { Diamond, Leaf, Sparkles, Gift } from 'lucide-react';

const FEATURE_DATA = [
  { icon: Diamond, title: "Premium Quality", desc: "Long-lasting craftsmanship" },
  { icon: Leaf, title: "Natural & Fresh", desc: "Pure essential oils" },
  { icon: Sparkles, title: "Stylish Design", desc: "Minimalist glass bottle" },
  { icon: Gift, title: "Perfect Gift", desc: "For the luxury enthusiast" },
];

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden bg-forest/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {FEATURE_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full border border-gold/20 group-hover:bg-gold/10 transition-colors duration-500">
                <item.icon className="text-gold" size={28} strokeWidth={1.2} />
              </div>
              <h3 className="text-[12px] tracking-[0.3em] uppercase font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[10px] tracking-widest text-white/40 uppercase">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
