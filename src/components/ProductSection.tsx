import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ScentTypes = [
  { 
    id: 'vanilla',
    name: 'Vanilla', 
    color: 'rgba(255, 255, 255, 0.4)', 
    image: 'https://raw.githubusercontent.com/aisyahz/thaikungroup/main/perfume%20car/vanilla.png', 
    label: { BM: 'Lembut & Wangi', EN: 'Smooth & Warm' },
    status: { BM: 'Paling Laris', EN: 'Best Seller' }
  },
  { 
    id: 'honeydew',
    name: 'Honeydew', 
    color: 'rgba(160, 224, 160, 0.6)', 
    image: 'https://raw.githubusercontent.com/aisyahz/thaikungroup/main/perfume%20car/honeydew.png', 
    label: { BM: 'Segar & Manis', EN: 'Fresh & Green' },
    status: { BM: 'Baru', EN: 'New' }
  },
  { 
    id: 'redberry',
    name: 'Redberry', 
    color: 'rgba(139, 0, 0, 0.5)', 
    image: 'https://raw.githubusercontent.com/aisyahz/thaikungroup/main/perfume%20car/redberry.png', 
    label: { BM: 'Kuat & Berani', EN: 'Deep & Vibrant' }
  },
  { 
    id: 'billionaire',
    name: 'Billionaire', 
    color: 'rgba(0, 0, 139, 0.5)', 
    image: 'https://raw.githubusercontent.com/aisyahz/thaikungroup/main/perfume%20car/billionaire.png', 
    label: { BM: 'Mewah & Eksklusif', EN: 'Royal & Bold' }
  },
  { 
    id: 'somebody',
    name: 'Somebody', 
    color: 'rgba(0, 128, 128, 0.5)', 
    image: 'https://raw.githubusercontent.com/aisyahz/thaikungroup/main/perfume%20car/somebody.png', 
    label: { BM: 'Misteri & Tenang', EN: 'Mystic & Teal' }
  },
  { 
    id: 'mango',
    name: 'Mango', 
    color: 'rgba(255, 165, 0, 0.5)', 
    image: 'https://raw.githubusercontent.com/aisyahz/thaikungroup/main/perfume%20car/mango.png', 
    label: { BM: 'Tropikal & Manis', EN: 'Tropical & Sweet' }
  },
];

export default function ProductSection() {
  const { lang, t } = useLanguage();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    Object.fromEntries(ScentTypes.map(s => [s.id, 1]))
  );

  const updateQty = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, prev[id] + delta)
    }));
  };

  const handleOrder = (scent: typeof ScentTypes[0]) => {
    const qty = quantities[scent.id];
    const totalPrice = qty * 11;
    const message = lang === 'BM' 
      ? `Hi Thaikun Group, saya nak order Diamond Car Fragrance.\n\nScent: ${scent.name}\nQuantity: ${qty}\nTotal estimate: RM${totalPrice}\n\nBoleh share details pembayaran dan delivery?`
      : `Hi Thaikun Group, I want to order Diamond Car Fragrance.\n\nScent: ${scent.name}\nQuantity: ${qty}\nTotal estimate: RM${totalPrice}\n\nCan you share payment and delivery details?`;
    
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/60102082448?text=${encodedMsg}`, '_blank');
  };

  return (
    <section className="py-24 px-6 bg-obsidian text-center" id="scents">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-semibold mb-4 block">{t('prod_badge')}</span>
        <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4 text-white">{t('prod_title')}</h2>
        <p className="text-gold font-bold tracking-widest text-xl mb-16 uppercase">{t('prod_price')}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ScentTypes.map((scent, index) => (
            <motion.div
              key={scent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-[#080808] border border-white/5 p-8 md:p-10 rounded-sm hover:border-gold/20 transition-all duration-700 overflow-hidden flex flex-col items-center shadow-2xl hover:-translate-y-2"
            >
              {/* Product Visual Container */}
              <div className="relative w-full h-64 md:h-72 mb-8 flex items-center justify-center">
                <div 
                  className="absolute inset-0 rounded-full blur-[100px] opacity-10 group-hover:opacity-40 transition-all duration-1000 scale-75 group-hover:scale-125 pointer-events-none"
                  style={{ backgroundColor: scent.color }}
                />
                
                <motion.img 
                  src={scent.image} 
                  alt={scent.name}
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {scent.status && (
                  <div className="absolute top-0 right-0 px-3 py-1 border border-gold/40 text-gold text-[8px] tracking-widest uppercase font-bold glass-card rounded-full z-20">
                    {scent.status[lang]}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <h3 className="text-2xl font-display tracking-[0.2em] uppercase mb-2 text-white group-hover:text-gold transition-colors duration-500">
                  {scent.name}
                </h3>
                <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-light mb-8 italic">
                  {scent.label[lang]}
                </p>
                
                {/* Quantity Selector */}
                <div className="flex items-center justify-center gap-6 mb-8 bg-white/5 p-3 rounded border border-white/5">
                  <button 
                    onClick={() => updateQty(scent.id, -1)}
                    className="w-8 h-8 flex items-center justify-center border border-white/20 rounded hover:bg-gold hover:text-black transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-xl font-bold w-8 text-white">{quantities[scent.id]}</span>
                  <button 
                    onClick={() => updateQty(scent.id, 1)}
                    className="w-8 h-8 flex items-center justify-center border border-white/20 rounded hover:bg-gold hover:text-black transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOrder(scent)}
                  className="w-full flex items-center justify-center gap-3 text-[10px] tracking-[0.4em] uppercase font-bold text-black bg-gold px-1 py-4 rounded-sm hover:bg-gold-bright transition-all duration-500 shadow-xl"
                >
                  <MessageCircle size={16} />
                  {t('prod_order')}
                </motion.button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
