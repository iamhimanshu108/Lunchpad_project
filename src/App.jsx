import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PartnerStrip from './components/PartnerStrip.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import ConstellationBanner from './components/ConstellationBanner.jsx';
import Footer from './components/Footer.jsx';
import ConsoleModal from './components/ConsoleModal.jsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('console'); // 'console' | 'demo' | 'checkout'
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenConsole = () => {
    setModalMode('console');
    setModalOpen(true);
  };

  const handleOpenDemo = () => {
    setModalMode('demo');
    setModalOpen(true);
  };

  const handleSelectPlan = (tier) => {
    setSelectedPlan(tier);
    setModalMode('checkout');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface relative selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden font-sans">
      {/* Ambient Nebula Lighting Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-container/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-[40%] -left-[20%] w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-[160px]"></div>
        <div className="absolute top-[70%] -right-[15%] w-[700px] h-[500px] bg-tertiary-container/15 rounded-full blur-[150px]"></div>
      </div>

      {/* Subtle Space Grid Overlay */}
      <div className="cosmic-grid fixed inset-0 pointer-events-none z-0 opacity-40" aria-hidden="true"></div>

      {/* Top Navbar */}
      <Navbar onOpenConsole={handleOpenConsole} onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero onOpenConsole={handleOpenConsole} onOpenDemo={handleOpenDemo} />
        <PartnerStrip />
        <Features />
        <Pricing onSelectPlan={handleSelectPlan} />
        <ConstellationBanner onInitialize={handleOpenConsole} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal */}
      <ConsoleModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
        initialPlan={selectedPlan}
      />
    </div>
  );
}
