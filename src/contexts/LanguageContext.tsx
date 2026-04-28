import React, { useState, createContext, useContext, ReactNode } from 'react';

export type Language = 'BM' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  BM: {
    nav_scents: 'Wangian',
    nav_collections: 'Koleksi',
    nav_about: 'Tentang Kami',
    nav_testimonials: 'Testimoni',
    nav_agent: 'Jadi Agent',
    hero_badge: 'Couture Fragrance',
    hero_title_1: 'WANGIAN KERETA PREMIUM',
    hero_title_2: 'UNTUK SETIAP PERJALANAN',
    hero_sub: 'Reka bentuk elegan, bau tahan lama, sesuai untuk kereta harian, hadiah dan jualan semula.',
    hero_cta_buy: 'Beli Sekarang',
    hero_cta_agent: 'Jadi Agent',
    feat_title_1: 'Kualiti Premium',
    feat_desc_1: 'Bau tahan lama & mewah',
    feat_title_2: 'Natural & Segar',
    feat_desc_2: 'Minyak pati botanical',
    feat_title_3: 'Reka Bentuk Elegan',
    feat_desc_3: 'Botol kaca minimalis',
    feat_title_4: 'Hadiah Sempurna',
    feat_desc_4: 'Sesuai untuk peminat kereta',
    prod_badge: 'Koleksi Kami',
    prod_title: 'Cari Wangian Signature Anda',
    prod_price: 'RM11.00 Seunit',
    prod_order: 'Order WhatsApp',
    agent_badge: 'Peluang Perniagaan',
    agent_title: 'Daftar Sebagai Agent Diamond',
    agent_desc: 'Sertai rangkaian pengedar eksklusif kami. Bawa kemewahan Diamond Car Fragrance ke kawasan anda dengan pakej borong premium.',
    agent_pkg_title: 'PAKEJ AGENT BUNDLE',
    agent_pkg_desc: 'Koleksi Eksekutif',
    agent_price_total: 'RM500.00',
    agent_feat_1: 'Hak Eksklusif',
    agent_feat_1_sub: 'Kawasan eksklusif tersedia',
    agent_feat_2: 'Margin Tinggi',
    agent_feat_2_sub: 'Pulangan pelaburan (ROI) cepat',
    agent_cta: 'Daftar Agent Sekarang',
    agent_msg: 'Hi Thaikun Group, saya berminat nak daftar sebagai agent Diamond Car Fragrance.\n\nPackage: Agent RM500\nStock: 90 pcs\nSaya nak tahu details untuk mula.',
    footer_desc: 'Diamond Car Fragrance oleh Thaikun Group Sdn Bhd. Kami fokus dalam produk wangian kereta yang premium, mampu milik dan sesuai untuk pasaran Malaysia.',
    footer_background: 'Thaikun Group Sdn Bhd ditubuhkan sejak tahun 2023 dan fokus dalam produk wangian kereta yang premium, mampu milik dan sesuai untuk pasaran Malaysia.',
    testi_badge: 'Kata-kata Pelanggan',
    testi_title: 'Testimoni Premium',
    testi_1_name: 'Hairul Azreen',
    testi_1_role: 'Peminat Kereta',
    testi_1_comment: 'Bau Diamond memang lain dari yang lain. Lepas letak dalam kereta, isteri pun puji kereta sentiasa wangi. Tahan lama sungguh!',
    testi_2_name: 'Sarah Jane',
    testi_2_role: 'Agensi Hartanah',
    testi_2_comment: 'Sangat sesuai untuk saya yang sentiasa bawa client dalam kereta. Bau yang luxury tapi tak peningkan kepala. Design botol pun sangat premium.',
    testi_3_name: 'Ahmad Daniel',
    testi_3_role: 'Agent Diamond',
    testi_3_comment: 'Pakej agent dia sangat berbaloi. Stok sentiasa laju keluar sebab kualiti dia setanding jenama antarabangsa tapi harga sangat mesra poket.'
  },
  EN: {
    nav_scents: 'Scents',
    nav_collections: 'Collections',
    nav_about: 'About Us',
    nav_testimonials: 'Reviews',
    nav_agent: 'Become Agent',
    hero_badge: 'Couture Fragrance',
    hero_title_1: 'PREMIUM CAR FRAGRANCE',
    hero_title_2: 'FOR EVERY JOURNEY',
    hero_sub: 'Elegant design, long-lasting scent, perfect for daily cars, gifts, and resale.',
    hero_cta_buy: 'Shop Now',
    hero_cta_agent: 'Become Agent',
    feat_title_1: 'Premium Quality',
    feat_desc_1: 'Long-lasting luxury scent',
    feat_title_2: 'Natural & Fresh',
    feat_desc_2: 'Botanical essential oils',
    feat_title_3: 'Stylish Design',
    feat_desc_3: 'Minimalist glass bottle',
    feat_title_4: 'Perfect Gift',
    feat_desc_4: 'Ideal for car enthusiasts',
    prod_badge: 'Our Collection',
    prod_title: 'Find Your Signature Scent',
    prod_price: 'RM11.00 Per Piece',
    prod_order: 'Order WhatsApp',
    agent_badge: 'Business Opportunity',
    agent_title: 'Become a Diamond Agent',
    agent_desc: 'Join our exclusive distribution network. Bring the luxury of Diamond Car Fragrance to your area with premium wholesale packages.',
    agent_pkg_title: 'AGENT BUNDLE PACKAGE',
    agent_pkg_desc: 'Executive Collection',
    agent_price_total: 'RM500.00',
    agent_feat_1: 'Exclusive Rights',
    agent_feat_1_sub: 'Regional exclusivity available',
    agent_feat_2: 'High Margins',
    agent_feat_2_sub: 'Rapid ROI opportunity',
    agent_cta: 'Register Agent Now',
    agent_msg: 'Hi Thaikun Group, I am interested in registering as a Diamond Car Fragrance agent.\n\nPackage: Agent RM500\nStock: 90 pcs\nI would like to know the details to get started.',
    footer_desc: 'Diamond Car Fragrance by Thaikun Group Sdn Bhd. Premium, affordable, and perfect for the Malaysian market.',
    footer_background: 'Thaikun Group Sdn Bhd established since 2023, focusing on premium car fragrances that are affordable and suitable for the Malaysian market.',
    testi_badge: 'Customer Voice',
    testi_title: 'Premium Testimonials',
    testi_1_name: 'Hairul Azreen',
    testi_1_role: 'Car Enthusiast',
    testi_1_comment: 'The Diamond scent is truly unique. After placing it in my car, even my wife noticed the pleasant fragrance. It really lasts a long time!',
    testi_2_name: 'Sarah Jane',
    testi_2_role: 'Real Estate Agent',
    testi_2_comment: 'Perfect for when I have clients in my car. The luxury scent is not overwhelming. The bottle design is also very premium.',
    testi_3_name: 'Ahmad Daniel',
    testi_3_role: 'Diamond Agent',
    testi_3_comment: 'The agent package is totally worth it. Stocks move fast because the quality rivals international brands at a pocket-friendly price.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('BM');

  const t = (key: string) => {
    return (translations[lang] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
