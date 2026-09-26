'use client';

import React from 'react';
import Link from 'next/link';
import { useAdmin } from '@/context/AdminContext';
import HeroEcosystem from '@/components/ui/HeroEcosystem';
import { Shield, ArrowRight, Award, CheckCircle2, ChevronRight, Phone, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const { siteSettings } = useAdmin();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
      {/* Precision Blueprint Grid */}
      <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />

      {/* Ambient Radial Highlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Enterprise Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Operational Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span>{siteSettings.tagline}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] uppercase">
              {siteSettings.companyName.split(' ')[0]} <br />
              <span className="text-orange-600">
                {siteSettings.companyName.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              High-integrity LPG reticulated pipelines, industrial gas manifold engineering, statutory PESO safety audits, and compliance clearances for hospitality, residential, and manufacturing sectors.
            </p>

            {/* Key Micro Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Standard</span>
                <span className="text-xs font-bold text-slate-800">IS 6044 / PESO</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Certification</span>
                <span className="text-xs font-bold text-slate-800">ISO 9001:2015</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Headquarters</span>
                <span className="text-xs font-bold text-slate-800 truncate block">Coonoor, Nilgiris</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
              >
                <span>Request Safety Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/lpg-pipeline"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <span>Pipeline Systems</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Quick Contact line */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>Direct Entrepreneur Desk: </span>
              <a href={`tel:${siteSettings.phone}`} className="font-bold text-slate-800 hover:text-orange-600 transition-colors">
                +91 {siteSettings.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Hero Interactive 5-Node Ecosystem */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <HeroEcosystem />
          </div>
        </div>
      </div>
    </section>
  );
}
