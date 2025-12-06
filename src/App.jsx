import React, { useState, useEffect, useRef } from 'react';

import { Terminal, Shield, Zap, Skull, Map as MapIcon, ChevronRight, Crosshair, AlertTriangle, Activity, ArrowLeft, Target, Coins, ExternalLink, MessageCircle, Copy, Check } from 'lucide-react';

// --- TOKEN CONFIGURATION ---
const TOKEN_CONFIG = {
  name: "CYBER QUEST",
  symbol: "$CQUEST",
  address: "8sF9...YOUR_SOLANA_CA_HERE...k2L9",
  supply: "1,000,000,000",
  telegram: "https://t.me/your_link",
  discord: "https://discord.gg/your_link",
  twitter: "https://x.com/your_link",
  website: "https://yourwebsite.com",
  dexScreener: "https://dexscreener.com/solana/your_pair",
  pump: "https://pump.fun/your_link"
};

export default function App() {
  const [glitch, setGlitch] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [view, setView] = useState('dashboard'); // dashboard, combat, map, token
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState({ level: 99, xp: 0, tokens: 420 });
  const [logs, setLogs] = useState([
    "C:\\USERS\\DEGEN\\> init_sequence.exe",
    "Loading assets... [OK]",
    "Connecting to blockchain... [OK]",
    "WARNING: High volatility detected",
    "Minting meme cannon...",
    "Successfully minted token #42069"
  ]);
  
  const scrollRef = useRef(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // Random glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const addLog = (msg, type = 'info') => {
    setLogs(prev => [...prev, msg]);
  };

  const handleCombatAction = () => {
    addLog(`> Initiating attack sequence...`);
    setTimeout(() => {
        const damage = Math.floor(Math.random() * 50) + 100;
        const isCrit = Math.random() > 0.7;
        const reward = Math.floor(Math.random() * 20) + 5;
        
        if (isCrit) {
            addLog(`CRITICAL HIT! Dealt ${damage * 2} DMG to Firewall!`, 'error');
        } else {
            addLog(`Hit target for ${damage} DMG`, 'success');
        }
        
        setStats(prev => ({
            ...prev,
            xp: prev.xp + (isCrit ? 50 : 25),
            tokens: prev.tokens + reward
        }));
        addLog(`Reward: ${reward} $DEGEN received.`);
    }, 400);
  };

  const handleScanAction = () => {
    addLog(`> Scanning sector grid...`);
    setTimeout(() => {
        const found = Math.random() > 0.6;
        if (found) {
            addLog(`SIGNAL DETECTED! Rare artifact found.`, 'success');
            setStats(prev => ({ ...prev, xp: prev.xp + 100 }));
        } else {
            addLog(`Sector empty. Background radiation normal.`);
        }
    }, 600);
  };

  const copyAddress = () => {
    const el = document.createElement('textarea');
    el.value = TOKEN_CONFIG.address;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    addLog(`> Contract address copied to clipboard`);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderDashboard = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="border border-green-800 bg-black/50 p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 bg-green-900/30">
            <Shield className="w-6 h-6" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-green-500 animate-pulse"></span>
            CHARACTER PROFILE
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Character Avatar */}
            <div className="w-full md:w-56 h-56 bg-green-900/20 border-2 border-green-700 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/paladin-avatar.png" 
                  alt="Paladin Avatar"
                  className="w-full h-full object-contain p-2 filter drop-shadow-[0_0_15px_rgba(0,255,0,0.6)]"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-green-900/90 text-center text-xs py-1.5 text-white font-bold border-t-2 border-green-700">
                LVL {stats.level}
                </div>
            </div>
            {/* The Stats */}
            <div className="space-y-4 flex-1">
                <div className="bg-green-900/10 p-4 border-l-2 border-green-600">
                    <p className="text-xs text-green-600 mb-1">IDENTITY_MATRIX</p>
                    
                    <div className="font-bold text-lg text-green-400 font-mono tracking-wide space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="text-green-700">{'>'}</span> 
                            <span className="opacity-70 w-20">CLASS:</span> 
                            <span className="text-white text-xl">DEGEN PALADIN</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-green-700">{'>'}</span> 
                            <span className="opacity-70 w-20">WEAPON:</span> 
                            <span className="text-white text-xl">MEME CANNON</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-green-700">{'>'}</span> 
                            <span className="opacity-70 w-20">XP:</span> 
                            <span className="text-white text-xl">{stats.xp} / 1000</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-green-900/20 p-2 border border-green-800">
                        <div className="text-xs text-green-600">STR</div>
                        <div className="font-bold text-white">MAX</div>
                    </div>
                    <div className="bg-green-900/20 p-2 border border-green-800">
                        <div className="text-xs text-green-600">INT</div>
                        <div className="font-bold text-white">NULL</div>
                    </div>
                    <div className="bg-green-900/20 p-2 border border-green-800">
                        <div className="text-xs text-green-600">$DEGEN</div>
                        <div className="font-bold text-white">{stats.tokens}</div>
                    </div>
                </div>
                
                {/* Weapon Display */}
                <div className="mt-4 bg-green-900/10 p-3 border-l-2 border-green-600">
                    <p className="text-xs text-green-600 mb-2">EQUIPPED_WEAPON</p>
                    <div className="flex items-center gap-3">
                        <img 
                          src="/rifle.png" 
                          alt="Energy Rifle"
                          className="w-16 h-16 object-contain filter drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                          style={{ imageRendering: 'pixelated' }}
                        />
                        <div>
                            <p className="text-sm font-bold text-green-400">MEME CANNON</p>
                            <p className="text-xs text-green-600">Energy Rifle Type-A</p>
                        </div>
                    </div>
                </div>
                
                {/* Collectible Card */}
                <div className="mt-4 relative">
                    <img 
                      src="/card.png" 
                      alt="Data Card"
                      className="w-full h-auto object-contain filter drop-shadow-[0_0_15px_rgba(0,255,0,0.6)] opacity-90 hover:opacity-100 transition-opacity"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-xs text-green-400 p-1 text-center font-bold">
                        ACCESS_CARD_ACTIVE
                    </div>
                </div>
            </div>
            </div>
        </div>
        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
            onClick={() => { setView('combat'); addLog('Entering Combat Simulation...'); }}
            onMouseEnter={() => setHoveredBtn('demo')}
            onMouseLeave={() => setHoveredBtn(null)}
            className="relative bg-green-600 hover:bg-green-500 text-black font-bold py-4 px-6 clip-path-polygon transition-all flex items-center justify-between group cursor-pointer"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 100%)' }}
            >
            <span className="flex items-center gap-2">
                <Zap size={18} fill="currentColor" />
                PLAY DEMO
            </span>
            <span className={`transition-transform duration-300 ${hoveredBtn === 'demo' ? 'translate-x-1' : ''}`}>
                {'>'}
            </span>
            </button>
            <button 
                onClick={() => { setView('map'); addLog('Loading Tactical Map...'); }}
                onMouseEnter={() => setHoveredBtn('map')}
                onMouseLeave={() => setHoveredBtn(null)}
                className="relative border-2 border-green-600 text-green-500 hover:bg-green-900/30 font-bold py-4 px-6 transition-all flex items-center justify-between group cursor-pointer"
            >
            <span className="flex items-center gap-2">
                <MapIcon size={18} />
                VIEW MAP
            </span>
            <span className={`transition-transform duration-300 ${hoveredBtn === 'map' ? 'translate-x-1' : ''}`}>
                {'>'}
            </span>
            </button>
            <button 
                onClick={() => { setView('token'); addLog('Accessing token information...'); }}
                onMouseEnter={() => setHoveredBtn('token')}
                onMouseLeave={() => setHoveredBtn(null)}
                className="relative border-2 border-green-600 text-green-500 hover:bg-green-900/30 font-bold py-4 px-6 transition-all flex items-center justify-between group cursor-pointer"
            >
            <span className="flex items-center gap-2">
                <Coins size={18} />
                TOKEN INFO
            </span>
            <span className={`transition-transform duration-300 ${hoveredBtn === 'token' ? 'translate-x-1' : ''}`}>
                {'>'}
            </span>
            </button>
        </div>
    </div>
  );

  const renderCombat = () => (
    <div className="border border-green-800 bg-black/50 p-6 animate-in zoom-in-95 duration-300 h-full flex flex-col justify-between">
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Crosshair className="text-red-500 animate-pulse" />
                    COMBAT SIMULATION
                </h2>
                <button onClick={() => setView('dashboard')} className="text-xs hover:text-white flex items-center gap-1">
                    <ArrowLeft size={12} /> RETURN
                </button>
            </div>
            
            <div className="aspect-video bg-green-900/10 border border-green-800 flex items-center justify-center relative overflow-hidden mb-6">
                 {/* Enemy Graphic */}
                 <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
                    {[...Array(144)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-green-500/10"></div>
                    ))}
                 </div>
                 <div className="relative z-10 text-center">
                    <img 
                      src="/rogue-ai-enemy.png" 
                      alt="Rogue AI Enemy"
                      className="mx-auto mb-3 h-32 md:h-40 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] animate-pulse"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    <p className="font-bold text-red-400 tracking-widest text-sm md:text-base">ROGUE_AI_V.9</p>
                    <div className="w-32 md:w-40 h-2 bg-red-900 mx-auto mt-2 rounded-full overflow-hidden">
                        <div className="w-[70%] h-full bg-red-500"></div>
                    </div>
                 </div>
            </div>
        </div>
        <button 
            onClick={handleCombatAction}
            className="w-full bg-red-600 hover:bg-red-500 text-black font-bold py-4 px-6 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
        >
            <Zap fill="currentColor" />
            EXECUTE ATTACK PROTOCOL
        </button>
    </div>
  );

  const renderMap = () => (
    <div className="border border-green-800 bg-black/50 p-6 animate-in zoom-in-95 duration-300 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <MapIcon className="text-blue-500" />
                SECTOR GRID
            </h2>
            <button onClick={() => setView('dashboard')} className="text-xs hover:text-white flex items-center gap-1">
                <ArrowLeft size={12} /> RETURN
            </button>
        </div>
        <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-2 mb-6">
            {[...Array(16)].map((_, i) => {
              const hasBox = i === 3 || i === 7 || i === 11; // Place boxes in some sectors
  return (
                <div key={i} className="border border-green-900 bg-green-900/5 hover:bg-green-500/20 transition-colors cursor-crosshair flex items-center justify-center group relative overflow-hidden">
                    <span className="text-[10px] absolute top-1 left-1 opacity-50 z-10">{i.toString(16).toUpperCase().padStart(2, '0')}</span>
                    {hasBox ? (
                      <img 
                        src="/box.png" 
                        alt="Crate"
                        className="w-full h-full object-contain p-1 opacity-60 group-hover:opacity-100 transition-opacity filter drop-shadow-[0_0_8px_rgba(0,255,0,0.4)]"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    ) : (
                      <div className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100"></div>
                    )}
                </div>
              );
            })}
        </div>
        <button 
            onClick={handleScanAction}
            className="w-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold py-4 px-6 flex items-center justify-center gap-2 transition-all"
        >
            <Target />
            SCAN SECTOR
        </button>
    </div>
  );

  const renderTokenInfo = () => (
    <div className="border border-green-800 bg-black/50 p-6 animate-in zoom-in-95 duration-300 h-full flex flex-col overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Coins className="text-yellow-500" />
                TOKEN INFORMATION
            </h2>
            <button onClick={() => setView('dashboard')} className="text-xs hover:text-white flex items-center gap-1">
                <ArrowLeft size={12} /> RETURN
            </button>
        </div>

        <div className="space-y-6 flex-1">
            {/* Token Header */}
            <div className="bg-green-900/20 p-6 border-2 border-green-700 rounded">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-green-900/50 border-2 border-green-600 flex items-center justify-center">
                        <Coins size={32} className="text-green-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{TOKEN_CONFIG.name}</h3>
                        <p className="text-green-400 text-lg">{TOKEN_CONFIG.symbol}</p>
                    </div>
                </div>
            </div>

            {/* Contract Address */}
            <div className="bg-green-900/10 p-4 border-l-4 border-green-600">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-green-600 uppercase tracking-widest">Contract Address</p>
                    <button
                        onClick={copyAddress}
                        className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 text-xs"
                    >
                        {copied ? (
                            <>
                                <Check size={14} />
                                <span>COPIED</span>
                            </>
                        ) : (
                            <>
                                <Copy size={14} />
                                <span>COPY</span>
                            </>
                        )}
                    </button>
                </div>
                <p className="text-white font-mono text-sm break-all bg-black/50 p-2 rounded border border-green-800">
                    {TOKEN_CONFIG.address}
                </p>
            </div>

            {/* Token Stats */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-900/10 p-4 border border-green-800">
                    <p className="text-xs text-green-600 mb-1">Total Supply</p>
                    <p className="text-white font-bold text-lg">{TOKEN_CONFIG.supply}</p>
                </div>
                <div className="bg-green-900/10 p-4 border border-green-800">
                    <p className="text-xs text-green-600 mb-1">Symbol</p>
                    <p className="text-white font-bold text-lg">{TOKEN_CONFIG.symbol}</p>
                </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
                <p className="text-xs text-green-600 uppercase tracking-widest">Community Links</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {TOKEN_CONFIG.telegram && (
                        <a
                            href={TOKEN_CONFIG.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-900/20 hover:bg-green-900/40 border border-green-800 p-4 rounded transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <MessageCircle size={20} className="text-green-400" />
                                <span className="text-white font-bold">Telegram</span>
                            </div>
                            <ExternalLink size={16} className="text-green-600 group-hover:text-green-400 transition-colors" />
                        </a>
                    )}

                    {TOKEN_CONFIG.discord && (
                        <a
                            href={TOKEN_CONFIG.discord}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-900/20 hover:bg-green-900/40 border border-green-800 p-4 rounded transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <MessageCircle size={20} className="text-green-400" />
                                <span className="text-white font-bold">Discord</span>
                            </div>
                            <ExternalLink size={16} className="text-green-600 group-hover:text-green-400 transition-colors" />
                        </a>
                    )}

                    {TOKEN_CONFIG.twitter && (
                        <a
                            href={TOKEN_CONFIG.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-900/20 hover:bg-green-900/40 border border-green-800 p-4 rounded transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <ExternalLink size={20} className="text-green-400" />
                                <span className="text-white font-bold">Twitter / X</span>
                            </div>
                            <ExternalLink size={16} className="text-green-600 group-hover:text-green-400 transition-colors" />
                        </a>
                    )}

                    {TOKEN_CONFIG.website && (
                        <a
                            href={TOKEN_CONFIG.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-900/20 hover:bg-green-900/40 border border-green-800 p-4 rounded transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <ExternalLink size={20} className="text-green-400" />
                                <span className="text-white font-bold">Website</span>
                            </div>
                            <ExternalLink size={16} className="text-green-600 group-hover:text-green-400 transition-colors" />
                        </a>
                    )}

                    {TOKEN_CONFIG.dexScreener && (
                        <a
                            href={TOKEN_CONFIG.dexScreener}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-900/20 hover:bg-green-900/40 border border-green-800 p-4 rounded transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <Activity size={20} className="text-green-400" />
                                <span className="text-white font-bold">DexScreener</span>
                            </div>
                            <ExternalLink size={16} className="text-green-600 group-hover:text-green-400 transition-colors" />
                        </a>
                    )}

                    {TOKEN_CONFIG.pump && (
                        <a
                            href={TOKEN_CONFIG.pump}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-900/20 hover:bg-green-900/40 border border-green-800 p-4 rounded transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <Zap size={20} className="text-green-400" />
                                <span className="text-white font-bold">Pump.fun</span>
                            </div>
                            <ExternalLink size={16} className="text-green-600 group-hover:text-green-400 transition-colors" />
                        </a>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-green-800">
                <p className="text-xs text-green-600 uppercase tracking-widest mb-3">Quick Actions</p>
                <div className="flex flex-wrap gap-2">
                    <a
                        href={TOKEN_CONFIG.pump || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-500 text-black font-bold py-2 px-4 text-sm transition-all flex items-center gap-2"
                    >
                        <Zap size={14} />
                        BUY NOW
                    </a>
                    <a
                        href={TOKEN_CONFIG.dexScreener || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-green-600 text-green-500 hover:bg-green-900/30 font-bold py-2 px-4 text-sm transition-all flex items-center gap-2"
                    >
                        <Activity size={14} />
                        VIEW CHART
                    </a>
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 overflow-x-hidden relative selection:bg-green-900 selection:text-green-100">
      
      {/* Background Grid & CRT Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }}>
      </div>
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center border-b-2 border-green-800 pb-4 mb-12">
          <div className="flex items-center gap-4">
            <img 
              src="/logo-cyber-quest.png" 
              alt="CYBER QUEST Logo"
              className="h-10 md:h-14 lg:h-16 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
              style={{ imageRendering: 'pixelated' }}
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Terminal size={16} className="animate-pulse text-green-500" />
                <span className="text-xs tracking-widest text-green-700">SYSTEM_READY</span>
              </div>
              <div className={`flex items-center gap-2 ${glitch ? 'translate-x-1' : ''}`}>
                <span className="text-xl md:text-3xl font-black tracking-tighter text-green-400">CYBER</span>
                <span className="text-xl md:text-3xl font-black tracking-tighter text-white">QUEST</span>
                <span className="text-lg md:text-2xl font-black tracking-tighter text-green-600">_2077</span>
              </div>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-xs text-green-700">CURRENT_USER</p>
            <p className="font-bold">GUEST_ADMIN</p>
            <div className="flex items-center justify-end gap-2 text-yellow-500 mt-1">
                <Coins size={14} />
                <span>{stats.tokens}</span>
            </div>
          </div>
        </header>
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-12 gap-8 h-[600px]">
          
          {/* Left Column: Switchable Views */}
          <div className="md:col-span-7 h-full">
            {view === 'dashboard' && renderDashboard()}
            {view === 'combat' && renderCombat()}
            {view === 'map' && renderMap()}
            {view === 'token' && renderTokenInfo()}
          </div>
          {/* Right Column: Console Log */}
          <div className="md:col-span-5 flex flex-col h-full">
             <div className="border border-green-800 bg-black flex-1 p-4 font-mono text-sm overflow-hidden flex flex-col relative">
                <div className="absolute top-0 left-0 right-0 bg-green-900/20 p-1 px-3 text-xs flex justify-between items-center border-b border-green-800">
                    <span>TERMINAL_OUTPUT</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                </div>
                
                <div 
                    ref={scrollRef}
                    className="mt-8 space-y-2 opacity-80 h-full overflow-y-auto custom-scrollbar font-mono"
                >
                    {logs.map((log, i) => (
                        <p key={i} className={`
                            ${log.includes('WARNING') ? 'text-yellow-500' : ''}
                            ${log.includes('CRITICAL') ? 'text-red-500 font-bold' : ''}
                            ${log.includes('SIGNAL') ? 'text-blue-400' : ''}
                            ${log.includes('C:\\') ? 'text-green-700' : ''}
                        `}>
                            {log.includes('C:\\') ? (
                                <span>C:\USERS\DEGEN\{'>'} init_sequence.exe</span>
                            ) : log}
                        </p>
                    ))}
                    <p className="text-white animate-pulse">_</p>
                </div>
             </div>
             <div className="mt-4 border border-green-900 p-4 bg-green-900/5">
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-green-600">
                    <Activity size={14} />
                    <span>Server Status:</span>
                    <span className="text-green-400 font-bold">ONLINE</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
