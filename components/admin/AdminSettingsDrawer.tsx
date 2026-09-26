'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import {
  Settings, X, Shield, Building2, FileText, Image as ImageIcon,
  Plus, Trash2, Edit3, Check, RotateCcw, Phone, Mail, MapPin, Eye, AlertCircle
} from 'lucide-react';

export default function AdminSettingsDrawer() {
  const {
    isAdmin, toggleAdmin,
    isSettingsOpen, setIsSettingsOpen,
    siteSettings, updateSiteSettings,
    certificates, addCertificate, updateCertificate, deleteCertificate,
    projects, addProject, updateProject, deleteProject,
    resetAllToDefaults
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<'general' | 'certificates' | 'projects' | 'media'>('general');

  // Form states for new items
  const [newCert, setNewCert] = useState({
    title: '',
    description: '',
    authority: '',
    certNumber: '',
    validity: 'Active',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
  });

  const [newProj, setNewProj] = useState({
    title: '',
    category: 'LPG Pipeline' as any,
    description: '',
    client: '',
    location: '',
    completedYear: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  });

  // Local state for editing fields
  const [tempSettings, setTempSettings] = useState(siteSettings);
  const [saveNotice, setSaveNotice] = useState(false);

  // Sync temp settings when drawer opens
  const handleOpenDrawer = () => {
    setTempSettings(siteSettings);
    setIsSettingsOpen(true);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(tempSettings);
    setSaveNotice(true);
    setTimeout(() => setSaveNotice(false), 2500);
  };

  const handleCreateCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCert.title || !newCert.description) return;
    addCertificate(newCert);
    setNewCert({
      title: '',
      description: '',
      authority: '',
      certNumber: '',
      validity: 'Active',
      imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
    });
    setSaveNotice(true);
    setTimeout(() => setSaveNotice(false), 2000);
  };

  const handleCreateProj = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProj.title || !newProj.description) return;
    addProject(newProj);
    setNewProj({
      title: '',
      category: 'LPG Pipeline',
      description: '',
      client: '',
      location: '',
      completedYear: '2026',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    });
    setSaveNotice(true);
    setTimeout(() => setSaveNotice(false), 2000);
  };

  return (
    <>
      {/* Floating Toggle Pill (Always Visible for Site Owner/Admin) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <button
          onClick={handleOpenDrawer}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-orange-600 shadow-xl border border-slate-700/80 text-xs font-bold transition-all transform hover:scale-105"
          title="Open Admin Settings & Content Editor"
        >
          <Settings className="w-4 h-4 text-orange-400 animate-spin-slow" />
          <span>Admin Settings</span>
          {isAdmin && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          )}
        </button>

        {/* Quick Admin Mode Toggle */}
        <button
          onClick={toggleAdmin}
          className={`px-3 py-2.5 rounded-full text-xs font-bold shadow-lg border transition-all ${
            isAdmin
              ? 'bg-emerald-600 text-white border-emerald-500'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
          }`}
          title={isAdmin ? 'Admin Edit Mode is Active' : 'Switch to Admin Edit Mode'}
        >
          {isAdmin ? 'Edit Mode ON' : 'Client View'}
        </button>
      </div>

      {/* Slide-out Settings Column / Drawer */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 overflow-hidden animate-slide-left">
            {/* Header */}
            <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    PHENIX Management Panel
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Real-time CMS for Address, GSTIN, Projects & Certificates
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-slate-200 bg-white px-4 text-xs font-bold overflow-x-auto">
              <button
                onClick={() => setActiveTab('general')}
                className={`py-3 px-3.5 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === 'general'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Company & Address</span>
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`py-3 px-3.5 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === 'certificates'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Certificates ({certificates.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-3 px-3.5 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === 'projects'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Our Projects ({projects.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('media')}
                className={`py-3 px-3.5 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === 'media'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Photos</span>
              </button>
            </div>

            {/* Notification alert */}
            {saveNotice && (
              <div className="m-4 p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-2 animate-fade-in">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Changes saved and updated across website in realtime!</span>
              </div>
            )}

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {/* TAB 1: GENERAL SETTINGS */}
              {activeTab === 'general' && (
                <form onSubmit={handleSaveSettings} className="space-y-4">
                  <div className="bg-orange-50/70 p-3.5 rounded-xl border border-orange-200 text-xs text-orange-950">
                    <p className="font-semibold mb-1">Live Synchronization Active</p>
                    <p className="text-[11px] text-orange-800">
                      Changes made here instantly update the header, footer, contact pages, and entrepreneur profile without server restarts.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company Brand Name
                    </label>
                    <input
                      type="text"
                      value={tempSettings.companyName}
                      onChange={(e) => setTempSettings({ ...tempSettings, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-orange-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company Tagline / Services
                    </label>
                    <input
                      type="text"
                      value={tempSettings.tagline}
                      onChange={(e) => setTempSettings({ ...tempSettings, tagline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-orange-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        GSTIN Number
                      </label>
                      <input
                        type="text"
                        value={tempSettings.gstin}
                        onChange={(e) => setTempSettings({ ...tempSettings, gstin: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-orange-500 outline-none uppercase font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        CIN Number
                      </label>
                      <input
                        type="text"
                        value={tempSettings.cin}
                        onChange={(e) => setTempSettings({ ...tempSettings, cin: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-orange-500 outline-none uppercase font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Official Registered Address
                    </label>
                    <textarea
                      rows={2}
                      value={tempSettings.address}
                      onChange={(e) => setTempSettings({ ...tempSettings, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-orange-500 outline-none resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Phone
                      </label>
                      <input
                        type="text"
                        value={tempSettings.phone}
                        onChange={(e) => setTempSettings({ ...tempSettings, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-orange-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Email
                      </label>
                      <input
                        type="email"
                        value={tempSettings.email}
                        onChange={(e) => setTempSettings({ ...tempSettings, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <h3 className="text-xs font-black uppercase text-slate-800 tracking-wider mb-3">
                      Entrepreneur Profile Details
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Name</label>
                        <input
                          type="text"
                          value={tempSettings.leaderName}
                          onChange={(e) => setTempSettings({ ...tempSettings, leaderName: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Designation</label>
                        <input
                          type="text"
                          value={tempSettings.leaderTitle}
                          onChange={(e) => setTempSettings({ ...tempSettings, leaderTitle: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Location</label>
                        <input
                          type="text"
                          value={tempSettings.leaderLocation}
                          onChange={(e) => setTempSettings({ ...tempSettings, leaderLocation: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Entrepreneur Phone</label>
                        <input
                          type="text"
                          value={tempSettings.leaderPhone}
                          onChange={(e) => setTempSettings({ ...tempSettings, leaderPhone: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4" />
                      <span>Save All Settings</span>
                    </button>
                    <button
                      type="button"
                      onClick={resetAllToDefaults}
                      className="text-xs text-slate-500 hover:text-red-600 flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset to Original</span>
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 2: CERTIFICATES MANAGER */}
              {activeTab === 'certificates' && (
                <div className="space-y-6">
                  {/* Create New Certificate */}
                  <form onSubmit={handleCreateCert} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-orange-600" />
                      <span>Add New Authorized Certificate</span>
                    </h3>
                    <div>
                      <input
                        type="text"
                        placeholder="Certificate Title (e.g. PESO Class-I Approval)"
                        required
                        value={newCert.title}
                        onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-900 outline-none"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={2}
                        placeholder="Description of certification, scope, and technical testing compliance..."
                        required
                        value={newCert.description}
                        onChange={(e) => setNewCert({ ...newCert, description: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-900 outline-none resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Issuing Authority"
                        value={newCert.authority}
                        onChange={(e) => setNewCert({ ...newCert, authority: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-900 outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Cert Number / Ref"
                        value={newCert.certNumber}
                        onChange={(e) => setNewCert({ ...newCert, certNumber: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-900 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Certificate Image URL (e.g. /images/iso-cert.jpg)"
                        value={newCert.imageUrl}
                        onChange={(e) => setNewCert({ ...newCert, imageUrl: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-900 outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 bg-slate-900 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      + Save & Publish Certificate
                    </button>
                  </form>

                  {/* List & Edit Existing Certificates */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-800">
                      Existing Certificates ({certificates.length})
                    </h3>
                    {certificates.map((cert) => (
                      <div key={cert.id} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-bold text-slate-900">{cert.title}</h4>
                          <button
                            onClick={() => deleteCertificate(cert.id)}
                            className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            title="Delete certificate"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Description:</label>
                          <textarea
                            rows={2}
                            value={cert.description}
                            onChange={(e) => updateCertificate(cert.id, { description: e.target.value })}
                            className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-50 border border-slate-200 text-slate-800 outline-none focus:bg-white resize-none"
                          />
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span>{cert.authority}</span>
                          <span className="font-mono text-orange-600 font-semibold">{cert.certNumber}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: PROJECTS MANAGER */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  {/* Create New Project */}
                  <form onSubmit={handleCreateProj} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-orange-600" />
                      <span>Add New Project</span>
                    </h3>
                    <input
                      type="text"
                      placeholder="Project Name / Installation Title"
                      required
                      value={newProj.title}
                      onChange={(e) => setNewProj({ ...newProj, title: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-900 outline-none"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={newProj.category}
                        onChange={(e) => setNewProj({ ...newProj, category: e.target.value as any })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-800 outline-none"
                      >
                        <option value="LPG Pipeline">LPG Pipeline</option>
                        <option value="Industrial Gas">Industrial Gas</option>
                        <option value="Safety Audit">Safety Audit</option>
                        <option value="Roof Truss">Roof Truss</option>
                        <option value="Compliance">Compliance</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Location (e.g. Coonoor)"
                        value={newProj.location}
                        onChange={(e) => setNewProj({ ...newProj, location: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-900 outline-none"
                      />
                    </div>
                    <textarea
                      rows={2}
                      placeholder="Project Scope, installation details, equipment specifications..."
                      required
                      value={newProj.description}
                      onChange={(e) => setNewProj({ ...newProj, description: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-900 outline-none resize-none"
                    />
                    <input
                      type="text"
                      placeholder="Image URL (Unsplash or local /images/...)"
                      value={newProj.imageUrl}
                      onChange={(e) => setNewProj({ ...newProj, imageUrl: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-900 outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-slate-900 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      + Save & Publish Project
                    </button>
                  </form>

                  {/* List & Edit Existing Projects */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-800">
                      Existing Projects ({projects.length})
                    </h3>
                    {projects.map((proj) => (
                      <div key={proj.id} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-50 text-orange-700 border border-orange-200 mb-1 inline-block">
                              {proj.category}
                            </span>
                            <h4 className="text-xs font-bold text-slate-900">{proj.title}</h4>
                          </div>
                          <button
                            onClick={() => deleteProject(proj.id)}
                            className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            title="Delete project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Project Description:</label>
                          <textarea
                            rows={2}
                            value={proj.description}
                            onChange={(e) => updateProject(proj.id, { description: e.target.value })}
                            className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-50 border border-slate-200 text-slate-800 outline-none focus:bg-white resize-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Image URL:</label>
                          <input
                            type="text"
                            value={proj.imageUrl}
                            onChange={(e) => updateProject(proj.id, { imageUrl: e.target.value })}
                            className="w-full px-2.5 py-1 text-xs rounded-lg bg-slate-50 border border-slate-200 text-slate-800 outline-none"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: PHOTOS & MEDIA */}
              {activeTab === 'media' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <h3 className="text-xs font-bold text-slate-900">Company Logo</h3>
                    <div className="flex items-center gap-4">
                      <img
                        src={tempSettings.logoUrl}
                        alt="Logo"
                        className="h-14 w-auto object-contain p-1 bg-white rounded-lg border border-slate-200 shadow-sm"
                      />
                      <div className="flex-1">
                        <label className="text-[10px] text-slate-500 font-semibold block mb-1">Path / URL</label>
                        <input
                          type="text"
                          value={tempSettings.logoUrl}
                          onChange={(e) => setTempSettings({ ...tempSettings, logoUrl: e.target.value })}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-white border border-slate-200 text-slate-800 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <h3 className="text-xs font-bold text-slate-900">Entrepreneur Business Card Photo</h3>
                    <div className="flex items-center gap-4">
                      <img
                        src={tempSettings.cardImageUrl}
                        alt="Card"
                        className="h-16 w-28 object-cover rounded-lg border border-slate-200 shadow-sm"
                      />
                      <div className="flex-1">
                        <label className="text-[10px] text-slate-500 font-semibold block mb-1">Path / URL</label>
                        <input
                          type="text"
                          value={tempSettings.cardImageUrl}
                          onChange={(e) => setTempSettings({ ...tempSettings, cardImageUrl: e.target.value })}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-white border border-slate-200 text-slate-800 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSaveSettings}
                    className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
                  >
                    Save Photo Changes
                  </button>
                </div>
              )}
            </div>

            {/* Footer Bar */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Status: LocalStorage Synchronized</span>
              </span>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
