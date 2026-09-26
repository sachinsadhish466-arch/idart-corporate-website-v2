'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Phone, Mail, MapPin, Award, ShieldCheck, CheckCircle2, Send } from 'lucide-react';

export default function CeoMessageSection() {
  const { siteSettings } = useAdmin();

  return (
    <section id="entrepreneur" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-engineering-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Official Entrepreneur Visiting Card & Visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-2xl bg-white p-3 shadow-2xl border border-slate-200 overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                <img
                  src={siteSettings.cardImageUrl}
                  alt={siteSettings.leaderName}
                  className="w-full h-auto rounded-xl object-contain shadow-inner"
                />
              </div>

              {/* Badge underneath */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-slate-900 tracking-wide uppercase">
                    {siteSettings.leaderName}
                  </h4>
                  <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">
                    {siteSettings.leaderTitle}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>{siteSettings.leaderLocation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Direct Entrepreneur Contact Desk */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
              <Award className="w-4 h-4 text-orange-600" />
              <span>Leadership Profile & Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              MEET THE <span className="text-orange-600">ENTREPRENEUR</span>
            </h2>

            <p className="text-lg font-bold text-slate-800">
              {siteSettings.leaderName} — {siteSettings.leaderTitle}, {siteSettings.companyName}
            </p>

            <blockquote className="border-l-4 border-orange-600 pl-4 py-1 text-slate-700 italic text-base leading-relaxed bg-orange-50/40 rounded-r-2xl">
              "At PHENIX Safety Solutions, our ambition is straightforward — building an enterprise where LPG engineering, combustible gas hazard mitigation, statutory compliance, and customer trust come together to protect human lives and enterprise assets."
            </blockquote>

            <p className="text-sm text-slate-600 leading-relaxed">
              Based out of Coonoor in The Nilgiris, {siteSettings.leaderName} has spearheaded turn-key industrial gas manifold networks, hotel reticulated piping systems, and compliance safety audits across the region with an unyielding dedication to zero-defect installations.
            </p>

            {/* Direct Connect Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href={`tel:${siteSettings.leaderPhone}`}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-500/40 hover:shadow-md transition-all flex items-center gap-3.5 group"
              >
                <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Direct Mobile</span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    +91 {siteSettings.leaderPhone}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteSettings.leaderEmail}`}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-500/40 hover:shadow-md transition-all flex items-center gap-3.5 group"
              >
                <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Direct Email</span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate block max-w-[210px]">
                    {siteSettings.leaderEmail}
                  </span>
                </div>
              </a>
            </div>

            {/* Address callout */}
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Registered Office: </strong>
                {siteSettings.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
