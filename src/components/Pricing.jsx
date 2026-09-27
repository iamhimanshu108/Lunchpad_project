import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Rocket, Zap, ShieldAlert } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      id: 'starter',
      category: 'RESEARCH & ACADEMIA',
      name: 'Suborbital Starter',
      description: 'For cubesat research, university labs, and early technology validation teams.',
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        '2 active satellites monitored',
        '100 GB telemetry storage',
        'Basic ground station passes',
        'Full REST & WebSocket API access',
        'Standard community support',
      ],
      ctaText: 'Deploy Starter',
      ctaStyle: 'bg-surface-container hover:bg-surface-bright text-white border border-outline-variant/50',
      popular: false,
    },
    {
      id: 'commercial',
      category: 'COMMERCIAL CONSTELLATIONS',
      name: 'Orbital Commercial',
      description: 'For commercial constellations, telecom fleets, and Earth observation fleets.',
      monthlyPrice: 2499,
      annualPrice: 1999,
      features: [
        'Up to 25 satellites supported',
        'Real-time LEO edge microservices',
        '10 ms prioritized LEO downlink routing',
        'Automated orbital collision avoidance',
        '24/7 dedicated flight controllers',
        'Multi-region ground failover',
      ],
      ctaText: 'Get Started',
      ctaStyle:
        'text-on-primary bg-gradient-to-r from-primary-container via-inverse-primary to-secondary-container shadow-[0_0_24px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(192,132,252,0.8)] font-bold',
      popular: true,
    },
    {
      id: 'enterprise',
      category: 'SOVEREIGN & DEFENSE',
      name: 'Deep Space Enterprise',
      description: 'For defense contractors, deep lunar trajectories, and global mega-constellations.',
      monthlyPrice: 7999,
      annualPrice: 6399,
      features: [
        'Unlimited satellites and payloads',
        'Sovereign dedicated ground stations',
        'Military-grade radiation hardening sims',
        'Zero-trust cryptographic downlinks',
        'Custom FPGA edge compilation',
        'Dedicated mission director',
      ],
      ctaText: 'Contact Mission Control',
      ctaStyle: 'bg-surface-container hover:bg-surface-bright text-white border border-outline-variant/50',
      popular: false,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 relative" id="pricing">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-xs font-mono text-primary mb-3">
          FLEXIBLE DEPLOYMENT TIERS
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Transparent Pricing for Every Trajectory
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant mb-8 font-normal">
          Predictable cost structures scaling from single experimental CubeSats to sovereign constellations.
        </p>

        {/* Monthly / Annual Billing Toggle */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 backdrop-blur-md">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
              !isAnnual
                ? 'font-bold bg-surface-container text-white shadow-sm'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-1.5 rounded-full text-xs font-mono flex items-center gap-2 transition-all duration-200 ${
              isAnnual
                ? 'font-bold bg-surface-container text-white shadow-sm'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            <span>Annual</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-primary-container/20 text-primary border border-primary/30">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
        {tiers.map((tier) => {
          const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

          return (
            <div
              key={tier.id}
              className={`relative bg-surface-container-low/70 backdrop-blur-xl rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'border-2 border-primary/60 shadow-[0_0_40px_-10px_rgba(168,85,247,0.4),0_20px_48px_-8px_rgba(0,0,0,0.85)] lg:-translate-y-4 bg-surface-container-low/90'
                  : 'border border-outline-variant/30 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] hover:border-primary/40'
              }`}
            >
              <div className="hud-bracket-tl"></div>
              <div className="hud-bracket-tr"></div>
              {tier.popular && (
                <>
                  <div className="hud-bracket-bl"></div>
                  <div className="hud-bracket-br"></div>
                  {/* Most Popular Badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary text-[11px] font-mono font-bold uppercase tracking-wider shadow-[0_0_16px_rgba(168,85,247,0.6)] flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </div>
                </>
              )}

              <div>
                <div
                  className={`text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${
                    tier.popular ? 'text-primary' : 'text-outline'
                  }`}
                >
                  {tier.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{tier.description}</p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`text-4xl lg:text-5xl font-extrabold ${tier.popular ? 'text-primary' : 'text-white'}`}>
                    ${price.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-outline">
                    / month {isAnnual ? '(billed annually)' : ''}
                  </span>
                </div>

                <ul className="space-y-3.5 text-sm text-on-surface-variant mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          tier.popular ? 'text-primary' : 'text-secondary'
                        }`}
                      />
                      <span className="leading-snug text-on-surface">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectPlan(tier)}
                className={`w-full py-3.5 rounded-lg text-xs font-mono uppercase tracking-wider text-center transition-all duration-200 active:scale-95 cursor-pointer ${tier.ctaStyle}`}
              >
                {tier.ctaText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
