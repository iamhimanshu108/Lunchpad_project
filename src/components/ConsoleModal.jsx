import React, { useState } from 'react';
import { X, Terminal, Rocket, CheckCircle2, Shield, Radio, Send, Play } from 'lucide-react';

export default function ConsoleModal({ isOpen, onClose, mode, initialPlan }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState(mode || 'console');
  const [commandInput, setCommandInput] = useState('');
  const [logs, setLogs] = useState([
    '[INIT] Connecting to LEO Gateway Orbit-Alpha-09...',
    '[AUTH] Handshake validated via TLS 1.3 / AES-256-GCM.',
    '[STATUS] Satellites active: 452 | Ground stations synced: 4/4',
    '[OK] Telemetry stream online. Type "help" or "ping" for options.',
  ]);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    constellationSize: '1-10 satellites',
    orbitType: 'LEO (Low Earth Orbit)',
  });

  const handleCommand = (e) => {
    e.preventDefault();
    if (!commandInput.trim()) return;
    const cmd = commandInput.trim().toLowerCase();
    const newLogs = [...logs, `> ${commandInput}`];

    if (cmd === 'help') {
      newLogs.push('Available commands:');
      newLogs.push('  ping        - Check ground station ping & latency');
      newLogs.push('  status      - Display orbital constellation status');
      newLogs.push('  nodes       - List telemetry node identifiers');
      newLogs.push('  clear       - Clear terminal logs');
    } else if (cmd === 'ping') {
      newLogs.push('PING Svalbard Station (Polar): 11.2ms [0% loss]');
      newLogs.push('PING Singapore Relay (Equatorial): 14.8ms [0% loss]');
    } else if (cmd === 'status') {
      newLogs.push('UPLINK: 99.999% | LATENCY: 12ms | HEALTH: ALL SYSTEMS NOMINAL');
    } else if (cmd === 'nodes') {
      newLogs.push('Active nodes: SAT-402 (Primary), SAT-118 (Edge Synced), SAT-089 (Relay)');
    } else if (cmd === 'clear') {
      setLogs(['Terminal cleared.']);
      setCommandInput('');
      return;
    } else {
      newLogs.push(`Command not recognized: "${commandInput}". Type "help" for command list.`);
    }

    setLogs(newLogs);
    setCommandInput('');
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest/95 border border-primary/30 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.3),0_25px_50px_-12px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30 bg-surface-container-low/70">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-primary">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-sans">
                {activeTab === 'console' && 'LaunchPad Terminal Console'}
                {activeTab === 'demo' && 'Schedule Mission Demo'}
                {activeTab === 'checkout' && `Deploy ${initialPlan?.name || 'Selected Plan'}`}
              </h3>
              <p className="text-[11px] font-mono text-outline">
                {activeTab === 'console' && 'LIVE SECURE SHELL [TLS 1.3]'}
                {activeTab === 'demo' && 'DIRECT ACCESS TO AEROSPACE ARCHITECTS'}
                {activeTab === 'checkout' && 'ENTERPRISE SLA & PROVISIONING'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('console')}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'console' ? 'bg-primary text-on-primary font-bold' : 'text-outline hover:text-white'
              }`}
            >
              Console
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'demo' ? 'bg-primary text-on-primary font-bold' : 'text-outline hover:text-white'
              }`}
            >
              Demo Form
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-outline hover:text-white hover:bg-surface-container transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {activeTab === 'console' && (
            <div className="flex flex-col h-[340px]">
              <div className="flex-1 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 font-mono text-xs text-on-surface-variant overflow-y-auto space-y-1.5">
                {logs.map((log, i) => (
                  <div
                    key={i}
                    className={
                      log.startsWith('>')
                        ? 'text-primary font-semibold'
                        : log.startsWith('[OK]') || log.includes('NOMINAL')
                        ? 'text-status-nominal'
                        : log.startsWith('[AUTH]')
                        ? 'text-secondary'
                        : 'text-on-surface'
                    }
                  >
                    {log}
                  </div>
                ))}
              </div>

              <form onSubmit={handleCommand} className="mt-3 flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-2.5 font-mono text-xs text-primary">$</span>
                  <input
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    placeholder="Type command (help, ping, status, nodes, clear)..."
                    className="w-full bg-surface-container-low/80 border border-outline-variant/40 rounded-lg pl-7 pr-3 py-2 text-xs font-mono text-white placeholder-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-mono text-xs font-bold hover:shadow-[0_0_14px_rgba(168,85,247,0.5)] transition-all flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Run</span>
                </button>
              </form>
            </div>
          )}

          {(activeTab === 'demo' || activeTab === 'checkout') && (
            <div>
              {demoSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-status-nominal/20 border border-status-nominal/40 flex items-center justify-center text-status-nominal">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Mission Briefing Requested</h4>
                  <p className="text-sm text-on-surface-variant max-w-md font-mono">
                    Flight credentials and simulation link have been dispatched to{' '}
                    <span className="text-primary font-semibold">{formData.email || 'your email'}</span>.
                    Our orbital specialist will contact you within 15 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setDemoSubmitted(false);
                      onClose();
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-surface-container text-white font-mono text-xs hover:bg-surface-bright border border-outline-variant/40"
                  >
                    Return to LaunchPad
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-outline mb-1">MISSION DIRECTOR / NAME</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Evelyn Vance"
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-outline mb-1">AEROSPACE WORK EMAIL</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="evelyn@orbital.aero"
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-outline mb-1">ORGANIZATION</label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="NovaSpace Dynamics"
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-outline mb-1">CONSTELLATION FLEET</label>
                      <select
                        value={formData.constellationSize}
                        onChange={(e) => setFormData({ ...formData, constellationSize: e.target.value })}
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-primary"
                      >
                        <option>1-5 CubeSats (Experimental)</option>
                        <option>6-25 Satellites (Commercial)</option>
                        <option>26-100+ Nodes (Mega-Constellation)</option>
                        <option>Lunar / Deep Space Payload</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-on-primary bg-gradient-to-r from-primary-container via-inverse-primary to-secondary-container shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(192,132,252,0.8)] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Rocket className="w-4 h-4" />
                      <span>Request Live Flight Simulator Access</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
