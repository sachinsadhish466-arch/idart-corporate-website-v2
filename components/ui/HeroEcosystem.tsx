"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Flame, Building2, Wrench, ShieldAlert, ArrowRight, Activity, FileCheck2, Gauge } from "lucide-react";

interface NodeData {
  id: string;
  title: string;
  desc: string;
  href: string;
  icon: any;
  color: string;
  x: number;
  y: number;
}

const NODES: NodeData[] = [
  {
    id: "safety",
    title: "LPG SAFETY",
    desc: "IS 6044 mandatory compliance inspection, leak vulnerability analysis & sensor systems.",
    href: "/mandatory-inspection",
    icon: ShieldCheck,
    color: "#FF6600",
    x: 50,
    y: 12
  },
  {
    id: "pipeline",
    title: "LPG PIPELINE",
    desc: "Heavy-gauge seamless copper reticulated gas manifolds, vaporizers & auto gas detection.",
    href: "/lpg-pipeline",
    icon: Flame,
    color: "#EA580C",
    x: 88,
    y: 38
  },
  {
    id: "industrial-gas",
    title: "INDUSTRIAL GAS",
    desc: "Commercial bulk & cylinder manifold systems engineered for zero-pressure drop.",
    href: "/why-us",
    icon: Gauge,
    color: "#0284C7",
    x: 75,
    y: 84
  },
  {
    id: "safety-audits",
    title: "SAFETY AUDITS",
    desc: "Statutory PESO audits, risk assessments & third-party engineering certifications.",
    href: "/#certificates",
    icon: FileCheck2,
    color: "#16A34A",
    x: 25,
    y: 84
  },
  {
    id: "compliance",
    title: "COMPLIANCE SUPPORT",
    desc: "Regulatory documentation, fire safety NOC clearance & turnkey compliance advisory.",
    href: "/#projects",
    icon: ShieldAlert,
    color: "#E11D48",
    x: 12,
    y: 38
  }
];

export default function HeroEcosystem() {
  const [activeNode, setActiveNode] = useState<NodeData>(NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const current = hoveredNode ? NODES.find((n) => n.id === hoveredNode) || activeNode : activeNode;

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center p-4">
      {/* Concentric Engineering Guidance Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[94%] h-[94%] rounded-full border border-dashed border-slate-200" />
        <div className="w-[74%] h-[74%] rounded-full border border-slate-200/80" />
        <div className="w-[52%] h-[52%] rounded-full border border-dashed border-orange-300 animate-spin [animation-duration:80s]" />
      </div>

      {/* SVG Connecting Lines with animated data pulses */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="ecoOrangeLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6600" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {NODES.map((node) => {
          const isHighlighted = hoveredNode === node.id || (!hoveredNode && activeNode.id === node.id);
          return (
            <g key={node.id}>
              {/* Static Background Guide Line */}
              <line
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke={isHighlighted ? "#FF6600" : "#CBD5E1"}
                strokeWidth={isHighlighted ? "1.75" : "0.75"}
                strokeDasharray={isHighlighted ? "none" : "2 2"}
                className="transition-all duration-300"
              />
              {/* Animated Packet Pulse */}
              {isHighlighted && (
                <circle r="1.6" fill="#FF6600">
                  <animateMotion
                    path={`M 50 50 L ${node.x} ${node.y}`}
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Center Core: PHENIX Hub with dynamic graphics */}
      <div className="relative z-20 flex flex-col items-center justify-center w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white border-2 border-orange-500 shadow-2xl shadow-orange-500/25 group cursor-default transition-all duration-300 hover:scale-105">
        {/* Animated outer glowing ring */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-orange-500/30 via-amber-400/20 to-orange-600/30 blur-sm animate-pulse pointer-events-none" />
        
        {/* Spinning technical dashed border */}
        <div className="absolute inset-1 rounded-full border border-dashed border-orange-400 animate-spin [animation-duration:25s] pointer-events-none" />

        {/* PHENIX LOGO in Center Core */}
        <div className="relative z-10 flex flex-col items-center px-2">
          <img
            src="/images/phenix-logo.png"
            alt="PHENIX Safety Solutions"
            className="h-14 sm:h-16 w-auto object-contain max-w-[100px] drop-shadow-sm"
          />
          <div className="mt-1 flex items-center gap-1 text-[8px] text-slate-500 font-mono font-bold tracking-wider">
            <Activity className="w-2.5 h-2.5 text-emerald-500 animate-pulse" />
            LIVE NETWORK
          </div>
        </div>
      </div>

      {/* 5 Interconnected Service Nodes */}
      {NODES.map((node) => {
        const Icon = node.icon;
        const isHovered = hoveredNode === node.id;
        const isActive = activeNode.id === node.id;

        return (
          <div
            key={node.id}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)"
            }}
            className="absolute z-30 flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setActiveNode(node)}
          >
            <div
              className={`flex items-center justify-center rounded-2xl transition-all duration-300 shadow-md ${
                isHovered || isActive
                  ? "w-14 h-14 bg-orange-600 text-white scale-110 shadow-orange-600/40 ring-4 ring-orange-100"
                  : "w-11 h-11 bg-white text-slate-700 border border-slate-200 hover:border-orange-400 hover:text-orange-600"
              }`}
            >
              <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span
              className={`mt-1.5 text-[10px] sm:text-[11px] font-bold tracking-tight whitespace-nowrap px-2.5 py-0.5 rounded-full transition-colors ${
                isHovered || isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 shadow-xs"
              }`}
            >
              {node.title}
            </span>
          </div>
        );
      })}

      {/* Interactive Floating Info Card (Bottom-Center) */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%] bg-white/95 backdrop-blur-md border border-slate-200 p-3.5 rounded-xl shadow-lg shadow-slate-200/50 z-40 transition-all duration-300">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide truncate">
                {current.title}
              </h4>
            </div>
            <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
              {current.desc}
            </p>
          </div>
          <Link
            href={current.href}
            className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white rounded-lg text-xs font-bold transition-colors"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
