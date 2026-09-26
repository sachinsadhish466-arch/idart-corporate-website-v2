'use client';

import React, { useState } from 'react';
import { useAdmin, CertificateItem } from '@/context/AdminContext';
import { ShieldCheck, Award, FileCheck, CheckCircle2, Edit3, Trash2, Plus, ExternalLink } from 'lucide-react';

export default function AuthorizedCertificatesSection() {
  const { certificates, isAdmin, updateCertificate, deleteCertificate, addCertificate, setIsSettingsOpen } = useAdmin();
  const [editingCertId, setEditingCertId] = useState<string | null>(null);
  const [editDesc, setEditDesc] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [newCert, setNewCert] = useState({
    title: '',
    description: '',
    authority: '',
    certNumber: '',
    validity: 'Active / Verified',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
  });

  const handleStartEdit = (cert: CertificateItem) => {
    setEditingCertId(cert.id);
    setEditDesc(cert.description);
  };

  const handleSaveEdit = (id: string) => {
    updateCertificate(id, { description: editDesc });
    setEditingCertId(null);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCert.title || !newCert.description) return;
    addCertificate(newCert);
    setIsAddModalOpen(false);
    setNewCert({
      title: '',
      description: '',
      authority: '',
      certNumber: '',
      validity: 'Active / Verified',
      imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
    });
  };

  return (
    <section id="certificates" className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-engineering-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200 mb-4">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
              <span>Statutory Compliance & Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              AUTHORIZED <span className="text-orange-600">CERTIFICATES</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              PHENIX Safety Solutions operates in full alignment with international quality standards, Petroleum and Explosives Safety Organization (PESO) directives, and Bureau of Indian Standards (BIS) codes.
            </p>
          </div>

          {/* Admin Controls */}
          {isAdmin && (
            <div className="flex items-center gap-3 bg-white p-2.5 rounded-2xl border border-orange-200 shadow-md">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Certificate</span>
              </button>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
              >
                Open Admin Drawer
              </button>
            </div>
          )}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-orange-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/10 via-transparent to-transparent pointer-events-none" />

              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-orange-50 text-orange-600 border border-orange-200/80 group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {cert.validity}
                    </span>
                    <span className="font-mono text-xs text-slate-400 mt-1">
                      {cert.certNumber}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Description or Edit Mode */}
                {editingCertId === cert.id ? (
                  <div className="mt-4 space-y-2">
                    <textarea
                      rows={3}
                      value={editDesc}
                      onChange={(e) => setEditDesc(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-orange-300 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-orange-500/30"
                    />
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSaveEdit(cert.id)}
                        className="px-3 py-1.5 bg-orange-600 text-white rounded-lg text-xs font-bold"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingCertId(null)}
                        className="px-3 py-1.5 bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Footer info & Admin buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{cert.authority}</span>
                </div>

                {isAdmin && (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleStartEdit(cert)}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-orange-100 text-slate-600 hover:text-orange-700 transition-colors"
                      title="Edit Description"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => deleteCertificate(cert.id)}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-700 transition-colors"
                      title="Delete Certificate"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Add Certificate */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Add Authorized Certification
              </h3>
              <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. PESO Gas Manifold Installation Approval"
                    value={newCert.title}
                    onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Description</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Scope, technical standard (e.g. IS 6044 / ASTM B88), testing protocol..."
                    value={newCert.description}
                    onChange={(e) => setNewCert({ ...newCert, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Issuing Authority</label>
                    <input
                      type="text"
                      placeholder="e.g. Bureau of Indian Standards"
                      value={newCert.authority}
                      onChange={(e) => setNewCert({ ...newCert, authority: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Cert Number / Ref</label>
                    <input
                      type="text"
                      placeholder="e.g. BIS-6044-TN"
                      value={newCert.certNumber}
                      onChange={(e) => setNewCert({ ...newCert, certNumber: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none font-mono"
                    />
                  </div>
                </div>
                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold"
                  >
                    Save Certificate
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
