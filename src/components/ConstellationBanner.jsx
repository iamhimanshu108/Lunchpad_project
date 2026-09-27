import React from 'react';
import { Rocket, ShieldCheck, CheckCircle2, Radio, Globe } from 'lucide-react';

export default function ConstellationBanner({ onInitialize }) {
  const groundStations = [
    { name: 'Svalbard Station (Polar)', status: 'NOMINAL', dot: 'bg-status-nominal' },
    { name: 'Punta Arenas (Sub-Antarctic)', status: 'NOMINAL', dot: 'bg-status-nominal' },
    { name: 'Singapore Relay (Equatorial)', status: 'ACTIVE', dot: 'bg-primary' },
    { name: 'Awarua Uplink (Southern)', status: 'NOMINAL', dot: 'bg-status-nominal' },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 pb-24" id="constellation">
      <div className="rounded-2xl bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container p-8 md:p-12 border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6)]">
        <div className="hud-bracket-tl"></div>
        <div className="hud-bracket-br"></div>

        <div className="max-w-xl text-left">
          <div className="text-xs font-mono text-secondary uppercase tracking-widest mb-2 font-semibold flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            AUTONOMOUS ORBITAL TRAFFIC MANAGEMENT
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to automate your next launch window?
          </h3>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6 font-normal">
            Join hundreds of aerospace engineers deploying Docker microservices straight into orbit with guaranteed ground-station handoffs.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onInitialize}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(192,132,252,0.7)] transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Initialize Constellation</span>
              <Rocket className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-outline">API Tokens ready in 60s</span>
          </div>
        </div>

        {/* Live Ground Stations Telemetry Card */}
        <div className="bg-surface-container-lowest/90 p-5 rounded-xl border border-outline-variant/40 font-mono text-xs text-on-surface-variant w-full md:w-auto min-w-[300px] shadow-lg">
          <div className="flex items-center justify-between mb-3 text-outline pb-2 border-b border-outline-variant/20">
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <Globe className="w-3.5 h-3.5 text-primary" /> ORBITAL UPTIME
            </span>
            <span className="text-status-nominal font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-status-nominal animate-ping"></span>
              100.0%
            </span>
          </div>
          <div className="space-y-2">
            {groundStations.map((station) => (
              <div key={station.name} className="flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">{station.name}:</span>
                <span className="text-white font-medium flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${station.dot}`}></span>
                  {station.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
