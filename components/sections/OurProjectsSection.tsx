'use client';

import React, { useState } from 'react';
import { useAdmin, ProjectItem } from '@/context/AdminContext';
import { Flame, Building2, MapPin, Calendar, CheckCircle2, Edit3, Trash2, Plus, ArrowRight, Filter } from 'lucide-react';

export default function OurProjectsSection() {
  const { projects, isAdmin, updateProject, deleteProject, addProject, setIsSettingsOpen } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [editDesc, setEditDesc] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const categories = ['All', 'LPG Pipeline', 'Industrial Gas', 'Safety Audit', 'Roof Truss', 'Compliance'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const [newProj, setNewProj] = useState({
    title: '',
    category: 'LPG Pipeline' as any,
    description: '',
    client: '',
    location: 'Coonoor, The Nilgiris',
    completedYear: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  });

  const handleStartEdit = (proj: ProjectItem) => {
    setEditingProjectId(proj.id);
    setEditDesc(proj.description);
  };

  const handleSaveEdit = (id: string) => {
    updateProject(id, { description: editDesc });
    setEditingProjectId(null);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProj.title || !newProj.description) return;
    addProject(newProj);
    setIsAddModalOpen(false);
    setNewProj({
      title: '',
      category: 'LPG Pipeline',
      description: '',
      client: '',
      location: 'Coonoor, The Nilgiris',
      completedYear: '2026',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    });
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200 mb-4">
              <Flame className="w-4 h-4 text-orange-600" />
              <span>Proven Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              OUR <span className="text-orange-600">PROJECTS</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore recent industrial gas manifold installations, commercial reticulated copper gas pipelines, statutory safety audits, and engineered structural sheds completed by PHENIX Safety Solutions.
            </p>
          </div>

          {/* Admin Controls */}
          {isAdmin && (
            <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-2xl border border-orange-200 shadow-md">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-colors"
              >
                Manage in Drawer
              </button>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-orange-500/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-600 text-white shadow-sm">
                    {proj.category}
                  </span>
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-sm text-slate-800 shadow-sm">
                    {proj.completedYear}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  {editingProjectId === proj.id ? (
                    <div className="mt-3 space-y-2">
                      <textarea
                        rows={3}
                        value={editDesc}
                        onChange={(e) => setEditDesc(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-orange-300 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-orange-500/30"
                      />
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleSaveEdit(proj.id)}
                          className="px-3 py-1 bg-orange-600 text-white rounded-lg text-xs font-bold"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingProjectId(null)}
                          className="px-3 py-1 bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span className="truncate">{proj.location}</span>
                </div>

                {isAdmin && (
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleStartEdit(proj)}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-orange-100 text-slate-600 hover:text-orange-700 transition-colors"
                      title="Edit Description"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => deleteProject(proj.id)}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-700 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Add Project */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Add New Engineering Project
              </h3>
              <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Project Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Commercial LPG Manifold for Hilltop Resort"
                    value={newProj.title}
                    onChange={(e) => setNewProj({ ...newProj, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Category</label>
                    <select
                      value={newProj.category}
                      onChange={(e) => setNewProj({ ...newProj, category: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
                    >
                      <option value="LPG Pipeline">LPG Pipeline</option>
                      <option value="Industrial Gas">Industrial Gas</option>
                      <option value="Safety Audit">Safety Audit</option>
                      <option value="Roof Truss">Roof Truss</option>
                      <option value="Compliance">Compliance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Coonoor, The Nilgiris"
                      value={newProj.location}
                      onChange={(e) => setNewProj({ ...newProj, location: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Scope & Engineering Details</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe piping dimensions, copper grade, pressure ratings, PRV skids..."
                    value={newProj.description}
                    onChange={(e) => setNewProj({ ...newProj, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none resize-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Project Photo URL</label>
                  <input
                    type="text"
                    placeholder="https://images.unsplash.com/... or /images/..."
                    value={newProj.imageUrl}
                    onChange={(e) => setNewProj({ ...newProj, imageUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none"
                  />
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
                    Save & Publish Project
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
