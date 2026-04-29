import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import BannerSection from './components/BannerSection';
import AgentPackage from './components/AgentPackage';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingLeaves from './components/FloatingLeaves';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-obsidian text-white font-sans overflow-x-hidden selection:bg-gold selection:text-black">
        <FloatingLeaves />
        <Navbar />
        <main>
          <Hero />
          <Features />
          <ProductSection />
          <BannerSection />
          <AgentPackage />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
