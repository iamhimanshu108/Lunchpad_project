import React from 'react';
import { Rocket, Shield, Cpu, Sun, Orbit, Globe2 } from 'lucide-react';

export default function PartnerStrip() {
  const partners = [
    { name: 'AeroDynamics X', icon: Rocket, color: 'text-primary' },
    { name: 'NovaSpace Labs', icon: Cpu, color: 'text-secondary' },
    { name: 'Helios Satellite', icon: Sun, color: 'text-tertiary' },
    { name: 'Vanguard Aerospace', icon: Shield, color: 'text-primary' },
    { name: 'OrbitX Telemetry', icon: Orbit, color: 'text-secondary' },
  ];

  return (
    <section className="w-full border-y border-outline-variant/20 bg-surface-container-lowest/60 backdrop-blur-sm py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xs font-mono text-outline tracking-widest uppercase font-semibold whitespace-nowrap">
          TRUSTED BY LEADING ORBITAL OPERATORS
        </span>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors duration-200 group cursor-default"
              >
                <div className="p-1.5 rounded-md bg-surface-container-high/60 border border-outline-variant/30 group-hover:border-primary/50 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all">
                  <Icon className={`w-4 h-4 ${partner.color}`} />
                </div>
                <span className="text-sm font-semibold tracking-wider font-sans group-hover:text-primary transition-colors">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
