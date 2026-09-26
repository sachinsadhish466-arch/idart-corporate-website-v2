'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAdmin } from '@/context/AdminContext';
import { Phone, Mail, Menu, X, Shield, Settings, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const { siteSettings, isAdmin, toggleAdmin, setIsSettingsOpen } = useAdmin();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Certificates', href: '/#certificates' },
    { label: 'LPG Pipeline', href: '/lpg-pipeline' },
    { label: 'Safety Audits', href: '/mandatory-inspection' },
    { label: 'Roof Truss', href: '/roof-truss' },
    { label: 'Branches', href: '/branches' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-[11px] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 truncate">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>GSTIN: <strong className="text-white font-mono">{siteSettings.gstin}</strong></span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3 h-3 text-orange-400" />
              <a href={`tel:${siteSettings.phone}`} className="hover:text-orange-400 transition-colors">
                {siteSettings.phone}
              </a>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3 h-3 text-orange-400" />
              <a href={`mailto:${siteSettings.email}`} className="hover:text-orange-400 transition-colors">
                {siteSettings.email}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Admin Settings Action */}
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-semibold transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Admin Panel</span>
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={toggleAdmin}
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-colors ${
                isAdmin ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {isAdmin ? 'Admin Edit ON' : 'Admin Login'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-auto flex items-center">
              <img
                src={siteSettings.logoUrl}
                alt={siteSettings.companyName}
                className="h-12 w-auto object-contain max-w-[200px]"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-orange-600 transition-colors py-2 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <span>Get Quotation</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs shadow-sm"
            >
              Get Quotation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
