import React from 'react';
import { ArrowRight, Calendar, Sparkles, Shield, Orbit } from 'lucide-react';
import TelemetryHUD from './TelemetryHUD.jsx';

export default function Hero({ onOpenConsole, onOpenDemo }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-12 md:pt-16 pb-20 flex flex-col items-center text-center relative">
      {/* Live Pill Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container/70 backdrop-blur-md border border-outline-variant/50 shadow-[0_0_24px_rgba(168,85,247,0.25)] mb-8 transition-transform hover:scale-105 cursor-default">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-xs font-mono text-primary font-medium tracking-wider flex items-center gap-1.5">
          Next-Gen Space Operations v3.0 is live <Sparkles className="w-3.5 h-3.5 text-primary-container" />
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-5xl tracking-tight text-white mb-6 leading-[1.15]">
        Cloud Infrastructure for the{' '}
        <span className="bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          Orbital Economy
        </span>
      </h1>

      {/* Supporting Subtitle */}
      <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-3xl mb-10 leading-relaxed font-normal">
        Automate mission telemetry, optimize payload staging, and deploy real-time edge computing
        across your satellite constellation with sub-millisecond precision.
      </p>

      {/* Hero Call To Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
        <button
          id="hero-get-started-btn"
          onClick={onOpenConsole}
          className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-mono font-semibold tracking-wider uppercase text-on-primary bg-gradient-to-r from-primary-container via-inverse-primary to-secondary-container shadow-[0_0_24px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(192,132,252,0.8)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          id="hero-book-demo-btn"
          onClick={onOpenDemo}
          className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-mono font-medium tracking-wider uppercase text-on-surface bg-surface-container-low/70 hover:bg-surface-container border border-outline-variant/40 hover:border-primary/50 backdrop-blur-md transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-primary" />
          <span>Book Mission Demo</span>
        </button>
      </div>

      {/* Telemetry Proof Metrics / Stats Strip */}
      <div className="w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 mb-16 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col items-center justify-center p-3 border-r border-outline-variant/20 last:border-r-0">
          <span className="text-xs font-mono text-on-surface-variant mb-1 uppercase tracking-wider">Uplink Reliability</span>
          <span className="text-2xl lg:text-3xl font-bold font-sans text-primary">99.999%</span>
          <span className="text-[10px] font-mono text-outline mt-0.5">SLA Guaranteed</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 border-r border-outline-variant/20 last:border-r-0">
          <span className="text-xs font-mono text-on-surface-variant mb-1 uppercase tracking-wider">LEO Latency</span>
          <span className="text-2xl lg:text-3xl font-bold font-sans text-secondary">12ms</span>
          <span className="text-[10px] font-mono text-outline mt-0.5">Average Ground Link</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 border-r border-outline-variant/20 last:border-r-0">
          <span className="text-xs font-mono text-on-surface-variant mb-1 uppercase tracking-wider">Active Satellites</span>
          <span className="text-2xl lg:text-3xl font-bold font-sans text-tertiary">450+</span>
          <span className="text-[10px] font-mono text-outline mt-0.5">Constellation Nodes</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3">
          <span className="text-xs font-mono text-on-surface-variant mb-1 uppercase tracking-wider">Payload Secured</span>
          <span className="text-2xl lg:text-3xl font-bold font-sans text-white">$4.2B</span>
          <span className="text-[10px] font-mono text-outline mt-0.5">Under Flight Control</span>
        </div>
      </div>

      {/* Embedded Live Telemetry HUD */}
      <TelemetryHUD />
    </section>
  );
}
