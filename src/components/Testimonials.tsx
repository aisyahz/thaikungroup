import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t('testi_1_name'),
      role: t('testi_1_role'),
      comment: t('testi_1_comment'),
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hairul",
    },
    {
      id: 2,
      name: t('testi_2_name'),
      role: t('testi_2_role'),
      comment: t('testi_2_comment'),
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 3,
      name: t('testi_3_name'),
      role: t('testi_3_role'),
      comment: t('testi_3_comment'),
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-obsidian">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block"
          >
            {t('testi_badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-6"
          >
            {t('testi_title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-px w-24 bg-gold/50 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative group transition-all duration-500 hover:bg-white/10 hover:border-gold/30"
            >
              <div className="absolute -top-4 -left-4 text-gold/20 group-hover:text-gold/40 transition-colors">
                <Quote size={40} />
              </div>

              <div className="flex gap-1 mb-6 text-gold/80">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-white/80 text-[13px] md:text-sm tracking-wide leading-relaxed mb-8 italic italic-luxury">
                "{testi.comment}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full border border-gold/30 p-0.5 overflow-hidden bg-white/5">
                  <img src={testi.avatar} alt={testi.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[12px] tracking-widest uppercase mb-0.5">
                    {testi.name}
                  </h4>
                  <p className="text-gold/60 text-[9px] tracking-[0.2em] font-medium uppercase">
                    {testi.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border border-obsidian bg-white/20 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-[10px] tracking-widest text-white/50 uppercase font-bold">
              + 2,500 Pelanggan Berpuas Hati
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
