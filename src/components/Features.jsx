import React, { useState, useEffect } from 'react';
import { Satellite, Layers, Cpu, Server, CheckCircle2, Shield, Radio, Activity } from 'lucide-react';

export default function Features() {
  const [pipelineProgress, setPipelineProgress] = useState(65);
  const [activeStage, setActiveStage] = useState(2);
  const [timerSeconds, setTimerSeconds] = useState(252); // T-04:12

  // Simulate countdown and pipeline updates
  useEffect(() => {
    const timer = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (totalSec) => {
    const mins = Math.floor(totalSec / 60).toString().padStart(2, '0');
    const secs = (totalSec % 60).toString().padStart(2, '0');
    return `T-${mins}:${secs}`;
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 relative" id="telemetry">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-xs font-mono text-primary mb-3">
          MISSION ARCHITECTURE
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Engineered for Orbital Scale
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant font-normal leading-relaxed">
          Mission-critical SaaS tools designed for satellite operators, aerospace startups, and defense contractors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1: Real-Time Orbital Telemetry */}
        <div className="relative bg-surface-container-low/70 backdrop-blur-xl border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_-4px_rgba(168,85,247,0.2)]">
          <div className="hud-bracket-tl"></div>
          <div className="hud-bracket-tr"></div>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 via-secondary/20 to-transparent"></div>

          <div>
            <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-6 shadow-[0_0_16px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
              <Satellite className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Real-Time Orbital Telemetry</h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              Continuous telemetry stream with sub-second Doppler correction, autonomous attitude adjustment, and anomaly detection models.
            </p>
          </div>

          {/* Feature Graphic: Mini Waveform & Latency Gauge */}
          <div className="bg-surface-container-lowest/80 rounded-xl p-4 border border-outline-variant/30">
            <div className="flex items-center justify-between text-xs font-mono text-outline mb-2">
              <span className="flex items-center gap-1">
                <Radio className="w-3.5 h-3.5 text-primary" /> LEO SIGNAL WAVEFORM
              </span>
              <span className="text-primary font-bold">11.4 ms</span>
            </div>
            <div className="h-10 flex items-center gap-1.5 px-1">
              <div className="h-2 w-full bg-primary/20 rounded animate-pulse"></div>
              <div className="h-5 w-full bg-primary/40 rounded"></div>
              <div className="h-8 w-full bg-primary rounded shadow-[0_0_8px_#A855F7]"></div>
              <div className="h-4 w-full bg-primary/40 rounded"></div>
              <div className="h-7 w-full bg-primary/80 rounded"></div>
              <div className="h-3 w-full bg-primary/20 rounded"></div>
              <div className="h-9 w-full bg-secondary rounded shadow-[0_0_8px_#6366F1]"></div>
              <div className="h-2 w-full bg-primary/30 rounded"></div>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-on-surface-variant mt-2 pt-2 border-t border-outline-variant/20">
              <span>99.98% SN-Ratio</span>
              <span className="text-status-nominal flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-status-nominal animate-ping"></span>
                Synced
              </span>
            </div>
          </div>
        </div>

        {/* Feature 2: Automated Payload Staging */}
        <div
          id="payload-staging"
          className="relative bg-surface-container-low/70 backdrop-blur-xl border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_-4px_rgba(168,85,247,0.2)]"
        >
          <div className="hud-bracket-tl"></div>
          <div className="hud-bracket-tr"></div>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 via-secondary/20 to-transparent"></div>

          <div>
            <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-6 shadow-[0_0_16px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Automated Payload Staging</h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              Programmatic launch manifests, cleanroom environmental monitoring, and robotic deployment simulation APIs.
            </p>
          </div>

          {/* Feature Graphic: Multi-stage pipeline & payload weight badge */}
          <div className="bg-surface-container-lowest/80 rounded-xl p-4 border border-outline-variant/30">
            <div className="flex items-center justify-between text-xs font-mono text-outline mb-3">
              <span>DEPLOY STAGING PIPELINE</span>
              <span className="px-2 py-0.5 rounded text-[11px] bg-surface-container text-tertiary border border-outline-variant/30 font-semibold">
                240 kg MAX
              </span>
            </div>
            <div className="space-y-2.5 font-mono text-xs">
              <div>
                <div className="flex items-center justify-between text-on-surface mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-status-nominal"></span>
                    Stage 1: Integration
                  </span>
                  <span className="text-status-nominal font-medium text-[11px]">COMPLETE</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-status-nominal h-full w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-on-surface mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse"></span>
                    Stage 2: Fairing Separation
                  </span>
                  <span className="text-secondary font-medium text-[11px]">{formatCountdown(timerSeconds)}</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-secondary h-full w-[65%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Constellation Edge Compute */}
        <div
          id="edge-compute"
          className="relative bg-surface-container-low/70 backdrop-blur-xl border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_-4px_rgba(168,85,247,0.2)]"
        >
          <div className="hud-bracket-tl"></div>
          <div className="hud-bracket-tr"></div>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 via-secondary/20 to-transparent"></div>

          <div>
            <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-6 shadow-[0_0_16px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Constellation Edge Compute</h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              Containerized microservices executed directly in Low Earth Orbit (LEO), enabling on-orbit sensor processing without ground-station lag.
            </p>
          </div>

          {/* Feature Graphic: Node topology & throughput metric */}
          <div className="bg-surface-container-lowest/80 rounded-xl p-4 border border-outline-variant/30">
            <div className="flex items-center justify-between text-xs font-mono text-outline mb-2">
              <span>LEO MESH TOPOLOGY</span>
              <span className="text-secondary font-bold">18.4 Tb/s ROUTING</span>
            </div>
            <div className="flex items-center justify-around py-2">
              <div className="text-center group-hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-primary/40 text-primary mx-auto mb-1">
                  <Server className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-mono text-outline">Node A</span>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-primary via-secondary to-primary mx-2"></div>
              <div className="text-center group-hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-secondary/40 text-secondary mx-auto mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-mono text-outline">Node B</span>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-secondary via-primary to-secondary mx-2"></div>
              <div className="text-center group-hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-tertiary/40 text-tertiary mx-auto mb-1">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-mono text-outline">Node C</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-on-surface-variant pt-2 border-t border-outline-variant/20">
              <span>Active Clusters: 12</span>
              <span className="text-primary font-semibold">Zero-Loss</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
