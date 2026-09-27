import React, { useState, useEffect } from 'react';
import { Satellite, Rocket, Menu, X, ChevronRight, Activity } from 'lucide-react';

export default function Navbar({ onOpenConsole, onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('telemetry');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Telemetry', href: '#telemetry' },
    { name: 'Payload Staging', href: '#payload-staging' },
    { name: 'Edge Compute', href: '#edge-compute' },
    { name: 'Constellation', href: '#constellation' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      id="top-navbar"
      className={`top-0 sticky z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-container-lowest/85 backdrop-blur-md shadow-[0_4px_24px_-2px_rgba(0,0,0,0.6)] border-b border-outline-variant/30'
          : 'bg-surface-container-low/60 backdrop-blur-md border-b border-outline-variant/20'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16 w-full">
        {/* Brand Anchor */}
        <a href="#" className="flex items-center gap-3 group" id="brand-logo">
          <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] group-hover:border-primary/50 transition-all">
            <Satellite className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors flex items-center gap-1.5">
              LaunchPad
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            </span>
            <span className="text-[10px] font-mono text-outline tracking-wider uppercase -mt-1">Orbital Cloud</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.href.replace('#', ''))}
              className={`text-xs font-mono tracking-wider uppercase transition-all duration-200 py-1 border-b-2 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-primary border-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]'
                  : 'text-on-surface-variant border-transparent hover:text-white hover:border-outline-variant'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Trailing Action Cluster */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-book-demo-btn"
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center px-4 py-2 rounded text-xs font-mono uppercase tracking-wider text-on-surface hover:text-primary hover:bg-surface-container/60 border border-transparent hover:border-outline-variant/40 transition-all duration-200"
          >
            Book Demo
          </button>
          <button
            id="nav-launch-console-btn"
            onClick={onOpenConsole}
            className="relative group inline-flex items-center justify-center px-4 py-2 rounded text-xs font-mono font-semibold tracking-wider uppercase text-on-primary bg-gradient-to-r from-primary-container via-inverse-primary to-secondary-container shadow-[0_0_16px_rgba(168,85,247,0.45)] hover:shadow-[0_0_24px_rgba(192,132,252,0.7)] transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              Launch Console
              <Rocket className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-b border-outline-variant/30 px-6 py-5 flex flex-col gap-4 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.href.replace('#', ''));
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-mono tracking-wider py-2 text-on-surface-variant hover:text-primary hover:pl-2 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-outline-variant/20 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 rounded text-xs font-mono tracking-wider uppercase text-on-surface bg-surface-container border border-outline-variant/40 hover:bg-surface-container-high transition-all"
            >
              Book Demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsole();
              }}
              className="w-full py-2.5 rounded text-xs font-mono font-semibold tracking-wider uppercase text-on-primary bg-gradient-to-r from-primary-container to-secondary-container shadow-[0_0_16px_rgba(168,85,247,0.4)] flex items-center justify-center gap-1.5"
            >
              <span>Launch Console</span>
              <Rocket className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
