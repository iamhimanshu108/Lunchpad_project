import React from 'react';
import { Satellite, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { name: 'Telemetry API', href: '#telemetry' },
    { name: 'Constellation Network', href: '#constellation' },
    { name: 'Payload Staging', href: '#payload-staging' },
    { name: 'Edge Compute', href: '#edge-compute' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security Architecture', href: '#telemetry' },
    { name: 'Mission Status', href: '#constellation' },
  ];

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 py-12 gap-8 w-full">
        {/* Footer Brand & Legal */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
              <Satellite className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight group-hover:text-primary transition-colors">
              LaunchPad
            </span>
          </a>
          <p className="text-xs font-mono text-on-surface-variant">
            © 2026 LaunchPad Technologies Inc. All orbital trajectories reserved.
          </p>
          {/* Orbital status indicator */}
          <div className="flex items-center gap-2 mt-2">
            <span className="h-2 w-2 rounded-full bg-status-nominal animate-pulse"></span>
            <span className="text-xs font-mono text-outline">All Ground Stations Operational</span>
          </div>
        </div>

        {/* Footer Links List */}
        <nav className="flex flex-wrap justify-center md:justify-end items-center gap-6" aria-label="Footer Navigation">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-on-surface-variant hover:text-primary transition-colors duration-150 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
