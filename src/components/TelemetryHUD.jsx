import React, { useState, useEffect } from 'react';
import { Radar, RefreshCw, Cpu, Zap, Wifi, Compass, Layers, ShieldCheck } from 'lucide-react';

export default function TelemetryHUD() {
  const [selectedSat, setSelectedSat] = useState('SAT-402');
  const [freqBars, setFreqBars] = useState([40, 60, 55, 80, 95, 75, 65, 45, 30]);
  const [doppler, setDoppler] = useState(-14.2);
  const [busVoltage, setBusVoltage] = useState(28.4);
  const [packetCount, setPacketCount] = useState(14892);
  const [isLive, setIsLive] = useState(true);

  // Live telemetry pulse simulation
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setFreqBars((prev) =>
        prev.map((val) => Math.min(100, Math.max(20, val + (Math.random() * 16 - 8))))
      );
      setDoppler((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(2));
      setBusVoltage((prev) => +(28.2 + Math.random() * 0.4).toFixed(1));
      setPacketCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 1800);
    return () => clearInterval(interval);
  }, [isLive]);

  const satData = {
    'SAT-402': {
      alt: '540 km',
      uplink: '98.4%',
      latency: '11.8 ms',
      downlink: '4.8 Gbps',
      azimuth: '142.8°',
      elevation: '68.2°',
      status: 'LOCK ACTIVE',
      cluster: 'Alpha Polar',
    },
    'SAT-118': {
      alt: '562 km',
      uplink: '99.1%',
      latency: '9.4 ms',
      downlink: '5.2 Gbps',
      azimuth: '210.4°',
      elevation: '74.1°',
      status: 'EDGE SYNCED',
      cluster: 'Equatorial Relay',
    },
    'SAT-089': {
      alt: '535 km',
      uplink: '97.9%',
      latency: '14.1 ms',
      downlink: '3.9 Gbps',
      azimuth: '088.3°',
      elevation: '52.7°',
      status: 'TRANSIT LOCK',
      cluster: 'Sun-Sync Mesh',
    },
  };

  const current = satData[selectedSat] || satData['SAT-402'];

  return (
    <div
      id="telemetry-hud-container"
      className="w-full max-w-6xl rounded-2xl bg-surface-container-lowest/90 backdrop-blur-2xl border border-primary/25 shadow-[0_0_40px_-10px_rgba(168,85,247,0.25),0_20px_48px_-8px_rgba(0,0,0,0.85)] p-6 relative overflow-hidden text-left"
    >
      {/* Reticle micro-crosshairs in container corners */}
      <div className="hud-bracket-tl"></div>
      <div className="hud-bracket-tr"></div>
      <div className="hud-bracket-bl"></div>
      <div className="hud-bracket-br"></div>

      {/* Top Accent HUD Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent"></div>

      {/* HUD Console Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-outline-variant/30 mb-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            {isLive && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            )}
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="font-mono text-xs md:text-sm text-on-surface tracking-wider font-semibold">
            LIVE TELEMETRY NODE: <span className="text-primary">{selectedSat}</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-surface-container-high text-primary border border-primary/30">
            LEO {current.alt}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:gap-5 font-mono text-xs text-on-surface-variant">
          <span className="hidden sm:inline">AZ: {current.azimuth}</span>
          <span className="hidden sm:inline">EL: {current.elevation}</span>
          <span className="text-primary font-bold">DOPPLER: {doppler} kHz</span>
          <span className="px-2.5 py-1 rounded bg-secondary-container/40 text-secondary border border-secondary/30 font-semibold tracking-wider">
            {current.status}
          </span>
          <button
            onClick={() => setIsLive(!isLive)}
            title={isLive ? 'Pause Stream' : 'Resume Stream'}
            className="p-1 rounded bg-surface-container hover:bg-surface-bright text-outline hover:text-primary transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLive ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          </button>
        </div>
      </div>

      {/* Console Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Orbit Vector Map (7 Cols) */}
        <div className="lg:col-span-7 bg-surface-container-low/70 rounded-xl p-5 border border-outline-variant/30 relative flex flex-col justify-between min-h-[300px]">
          <div className="flex justify-between items-center text-xs font-mono text-outline mb-2">
            <span className="flex items-center gap-1.5 text-primary">
              <Radar className="w-4 h-4 animate-spin text-primary" style={{ animationDuration: '8s' }} />
              ORBITAL TRAJECTORY MESH
            </span>
            <span className="text-xs text-outline">EPOCH 2026.270.16:15</span>
          </div>

          {/* Trajectory Visualizer Graphic */}
          <div className="relative w-full h-44 flex items-center justify-center my-2 overflow-hidden rounded-lg bg-surface-container-lowest/40">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full border border-primary/20 pulse-orbit"></div>
              <div className="w-80 h-32 rounded-[100%] border border-secondary/30 -rotate-12"></div>
              <div className="w-72 h-24 rounded-[100%] border border-dashed border-outline/30 rotate-45"></div>
              {/* Radial radar sweep line */}
              <div
                className="absolute w-36 h-36 rounded-full border border-primary/10 border-t-primary/60 animate-spin"
                style={{ animationDuration: '4s' }}
              ></div>
            </div>

            {/* Clickable Satellite Node Badges */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* SAT-402 */}
              <button
                onClick={() => setSelectedSat('SAT-402')}
                className={`absolute top-6 left-12 flex items-center gap-2 group cursor-pointer transition-transform duration-200 ${
                  selectedSat === 'SAT-402' ? 'scale-110 z-20' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_#A855F7]"></span>
                <span
                  className={`font-mono text-[11px] px-2.5 py-1 rounded border transition-all ${
                    selectedSat === 'SAT-402'
                      ? 'bg-primary-container/30 border-primary text-primary font-bold shadow-[0_0_14px_rgba(168,85,247,0.4)]'
                      : 'bg-surface-container-lowest/80 border-outline-variant/40 text-on-surface-variant hover:border-primary/50'
                  }`}
                >
                  SAT-402 (Uplink 98.4%)
                </span>
              </button>

              {/* SAT-118 */}
              <button
                onClick={() => setSelectedSat('SAT-118')}
                className={`absolute bottom-8 right-16 flex items-center gap-2 group cursor-pointer transition-transform duration-200 ${
                  selectedSat === 'SAT-118' ? 'scale-110 z-20' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_10px_#6366F1]"></span>
                <span
                  className={`font-mono text-[11px] px-2.5 py-1 rounded border transition-all ${
                    selectedSat === 'SAT-118'
                      ? 'bg-secondary-container/40 border-secondary text-secondary font-bold shadow-[0_0_14px_rgba(99,102,241,0.4)]'
                      : 'bg-surface-container-lowest/80 border-outline-variant/40 text-on-surface-variant hover:border-secondary/50'
                  }`}
                >
                  SAT-118 (Edge Synced)
                </span>
              </button>

              {/* SAT-089 */}
              <button
                onClick={() => setSelectedSat('SAT-089')}
                className={`absolute top-1/2 left-2/3 -translate-y-1/2 flex items-center gap-2 group cursor-pointer transition-transform duration-200 ${
                  selectedSat === 'SAT-089' ? 'scale-110 z-20' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-tertiary shadow-[0_0_8px_#C084FC]"></span>
                <span
                  className={`font-mono text-[11px] px-2 py-0.5 rounded border transition-all ${
                    selectedSat === 'SAT-089'
                      ? 'bg-tertiary-container/30 border-tertiary text-tertiary font-bold'
                      : 'bg-surface-container-lowest/80 border-outline-variant/40 text-outline'
                  }`}
                >
                  SAT-089 (Relay)
                </span>
              </button>
            </div>
          </div>

          {/* Lower Trajectory Metadata */}
          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-outline pt-3 border-t border-outline-variant/20 gap-2">
            <span className="flex items-center gap-1 text-on-surface">
              <Wifi className="w-3.5 h-3.5 text-primary" />
              DOWNLINK: <span className="text-primary font-bold">{current.downlink}</span>
            </span>
            <span className="flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-secondary" />
              ATTITUDE: <span className="text-on-surface">NOMINAL (P:0.02° Y:-0.01°)</span>
            </span>
            <span className="text-outline">PKTS: {packetCount.toLocaleString()}</span>
          </div>
        </div>

        {/* Right Telemetry Gauges (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          {/* Doppler Shift Graph Card */}
          <div className="bg-surface-container-low/70 rounded-xl p-4 border border-outline-variant/30 flex-1">
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-xs text-outline flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-primary" /> CARRIER FREQUENCY SHIFT
              </span>
              <span className="font-mono text-xs text-primary font-semibold">+0.002% DRIFT</span>
            </div>
            {/* Live Visualizer Bars */}
            <div className="h-16 flex items-end gap-1.5 pt-2 px-1">
              {freqBars.map((height, idx) => (
                <div
                  key={idx}
                  className={`flex-1 rounded-t transition-all duration-300 ${
                    idx === 4
                      ? 'bg-primary-container shadow-[0_0_12px_#A855F7]'
                      : idx % 2 === 0
                      ? 'bg-primary/50'
                      : 'bg-secondary/40'
                  }`}
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-outline mt-2 pt-2 border-t border-outline-variant/20">
              <span>BANDWIDTH: 800 MHz</span>
              <span className="text-status-nominal font-medium">SNR: 24.8 dB (EXCELLENT)</span>
            </div>
          </div>

          {/* Quick Telemetry Readout Deck */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-container-low/70 rounded-xl p-3.5 border border-outline-variant/30 hover:border-primary/40 transition-colors">
              <div className="text-xs font-mono text-outline mb-1 flex items-center gap-1">
                <Zap className="w-3 h-3 text-status-warning" /> BUS VOLTAGE
              </div>
              <div className="text-xl font-bold font-sans text-on-surface">
                {busVoltage} <span className="text-xs font-mono text-primary font-normal">VDC</span>
              </div>
              <div className="text-[11px] font-mono text-on-surface-variant flex items-center gap-1.5 mt-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-status-nominal animate-pulse"></span>
                Solar Array B Nom.
              </div>
            </div>

            <div className="bg-surface-container-low/70 rounded-xl p-3.5 border border-outline-variant/30 hover:border-secondary/40 transition-colors">
              <div className="text-xs font-mono text-outline mb-1 flex items-center gap-1">
                <Cpu className="w-3 h-3 text-secondary" /> EDGE WORKLOAD
              </div>
              <div className="text-xl font-bold font-sans text-secondary">
                34 <span className="text-xs font-mono text-secondary font-normal">NODES</span>
              </div>
              <div className="text-[11px] font-mono text-on-surface-variant flex items-center gap-1.5 mt-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                0 Anomaly Events
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
