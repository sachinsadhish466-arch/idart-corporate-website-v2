"use client";

import React, { useState, useEffect } from "react";
import { Shield, Sparkles, CheckCircle2, Flame, Cpu } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Progress counter animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 120);

    // Fade out and unmount
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const closeTimer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white transition-all duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Engineering Blueprint & Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse [animation-delay:1s]" />

      <div className="relative z-10 max-w-lg w-full px-6 flex flex-col items-center text-center">
        {/* Dynamic Graphic Container for Phenix Logo */}
        <div className="relative mb-6 flex items-center justify-center">
          {/* Animated Flame Aura & Rotating Energy Rings behind Phenix Logo */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-orange-600/40 via-amber-500/30 to-emerald-500/20 blur-xl animate-pulse pointer-events-none" />
          
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            {/* Outer Rotating SVG Tech Ring */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin [animation-duration:18s] pointer-events-none opacity-80"
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="92"
                fill="none"
                stroke="url(#phenixGlowGrad)"
                strokeWidth="2.5"
                strokeDasharray="14 10 35 15"
              />
              <circle
                cx="100"
                cy="100"
                r="78"
                fill="none"
                stroke="#FF6600"
                strokeWidth="1.5"
                strokeOpacity="0.5"
                strokeDasharray="6 8"
              />
              <defs>
                <linearGradient id="phenixGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF4500" />
                  <stop offset="50%" stopColor="#FFA500" />
                  <stop offset="100%" stopColor="#00E5FF" />
                </linearGradient>
              </defs>
            </svg>

            {/* Pulsing Core Safety Shield Ring */}
            <div className="absolute inset-4 rounded-full border border-orange-500/30 bg-gradient-to-b from-orange-500/10 to-slate-900/40 shadow-inner" />

            {/* PHENIX LOGO - Made noticeably bigger with graphic shine */}
            <div className="relative z-10 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl shadow-orange-500/30 border border-orange-400/40 transform transition-transform duration-500 hover:scale-105">
              <img
                src="/images/phenix-logo.png"
                alt="PHENIX Safety Solutions"
                className="h-24 sm:h-28 w-auto object-contain drop-shadow-[0_4px_14px_rgba(234,88,12,0.4)]"
              />
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Company Title & Brand Tagline */}
        <div className="space-y-1.5 mb-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-white flex items-center justify-center gap-2">
            <span>PHENIX</span>
            <span className="text-orange-500">SAFETY SOLUTIONS</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400">
            LPG &bull; Industrial Gas &bull; Safety Audits &bull; Compliance Support
          </p>
        </div>

        {/* Powered by SB Business Solution Badge (with 3D Metallic SB Logo) */}
        <div className="w-full my-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm relative overflow-hidden group">
          {/* Subtle cyan/green glow behind SB logo matching image */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative flex items-center justify-center gap-4">
            {/* Official 3D Metallic SB Logo with glowing cyan halo */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-cyan-400/40 via-emerald-400/40 to-teal-400/40 blur-md animate-pulse" />
              <div className="relative p-1.5 rounded-xl bg-slate-950/90 border border-cyan-500/50 shadow-lg shadow-cyan-500/20">
                <img
                  src="/images/sb-logo.png"
                  alt="SB Business Solution"
                  className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_0_14px_rgba(0,242,254,0.6)]"
                />
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase text-cyan-400">
                <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin [animation-duration:10s]" />
                ENTERPRISE ARCHITECTURE
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wide">
                Powered by <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">SB Business Solution</span>
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">
                Industrial Gas &amp; Safety Compliance Platform
              </p>
            </div>
          </div>
        </div>

        {/* Precision Progress Bar */}
        <div className="w-full max-w-xs mt-3 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {progress < 40 && "INITIALIZING SYSTEM..."}
              {progress >= 40 && progress < 80 && "LOADING SAFETY PROTOCOLS..."}
              {progress >= 80 && "SYSTEM VERIFIED & READY"}
            </span>
            <span className="font-bold text-orange-400">{Math.min(progress, 100)}%</span>
          </div>

          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 transition-all duration-150 ease-out shadow-lg shadow-orange-500/30"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Quick Skip button */}
        <button
          onClick={() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 200);
          }}
          className="mt-5 text-[11px] font-mono uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-colors"
        >
          Enter Website &rarr;
        </button>
      </div>
    </div>
  );
}
