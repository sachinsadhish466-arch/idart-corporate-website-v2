'use client';

import React from 'react';
import Link from 'next/link';
import { useAdmin } from '@/context/AdminContext';
import { ShieldCheck, MapPin, Phone, Mail, Award, Clock, ArrowRight, Settings } from 'lucide-react';

export default function Footer() {
  const { siteSettings, setIsSettingsOpen } = useAdmin();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      {/* Top Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-orange-950/20 via-slate-950 to-orange-950/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-white">
              {siteSettings.companyName}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {siteSettings.tagline}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteSettings.phone}`}
              className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors"
            >
              Emergency Helpline: {siteSettings.phone}
            </a>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Address */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative group inline-block">
              {/* Glowing flame aura behind footer logo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 via-amber-400/20 to-orange-600/20 rounded-2xl blur-lg opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2 rounded-2xl bg-white shadow-xl border border-orange-200">
                <img
                  src={siteSettings.logoUrl}
                  alt={siteSettings.companyName}
                  className="h-16 sm:h-20 w-auto object-contain max-w-[280px]"
                />
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized in high-pressure LPG reticulation, industrial gas manifold engineering, statutory PESO audits, and safety compliance advisory across South India.
            </p>
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteSettings.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`tel:${siteSettings.phone}`} className="hover:text-orange-400 transition-colors">
                  +91 {siteSettings.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`mailto:${siteSettings.email}`} className="hover:text-orange-400 transition-colors truncate">
                  {siteSettings.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-orange-400">
              Core Divisions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/lpg-pipeline" className="hover:text-white transition-colors">
                  LPG Pipeline & Reticulation Systems
                </Link>
              </li>
              <li>
                <Link href="/mandatory-inspection" className="hover:text-white transition-colors">
                  Mandatory Consumer Safety Inspections
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-white transition-colors">
                  Industrial Gas Manifolds & Vaporizers
                </Link>
              </li>
              <li>
                <Link href="/mandatory-inspection" className="hover:text-white transition-colors">
                  Commercial Gas Leak Telemetry
                </Link>
              </li>
              <li>
                <Link href="/roof-truss" className="hover:text-white transition-colors">
                  Engineered Roof Truss & Sheds
                </Link>
              </li>
              <li>
                <Link href="/startup-solutions" className="hover:text-white transition-colors">
                  Commercial Kitchen Project Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-orange-400">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#entrepreneur" className="hover:text-white transition-colors">
                  Entrepreneur Profile
                </Link>
              </li>
              <li>
                <Link href="/#certificates" className="hover:text-white transition-colors">
                  Authorized Certificates
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-white transition-colors">
                  Branch Directory
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Statutory Compliance */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-orange-400">
              Compliance & Verification
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">GSTIN (Verified)</span>
                <span className="font-mono text-white text-xs">{siteSettings.gstin}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Corporate ID (CIN)</span>
                <span className="font-mono text-white text-xs">{siteSettings.cin}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Quality Standard</span>
                <span className="text-emerald-400 text-xs font-bold">ISO 9001:2015 Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-900 py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {siteSettings.companyName}. All Rights Reserved.
          Headquartered at {siteSettings.address}.
        </p>
      </div>
    </footer>
  );
}
