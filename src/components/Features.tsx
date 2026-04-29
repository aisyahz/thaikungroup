import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Box, Gift } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('feat_title_1'),
      desc: t('feat_desc_1'),
    },
    {
      icon: Sparkles,
      title: t('feat_title_2'),
      desc: t('feat_desc_2'),
    },
    {
      icon: Box,
      title: t('feat_title_3'),
      desc: t('feat_desc_3'),
    },
    {
      icon: Gift,
      title: t('feat_title_4'),
      desc: t('feat_desc_4'),
    },
  ];

  return (
    <section className="py-20 bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mx-auto w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500 relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <item.icon size={24} className="text-gold transition-colors duration-500" />
                </motion.div>
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-3">
                {item.title}
              </h3>
              <p className="text-white/50 text-[11px] tracking-widest uppercase leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
