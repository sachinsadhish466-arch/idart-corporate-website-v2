'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ScaleSection from '@/components/sections/ScaleSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import PipelineVisualizer from '@/components/ui/PipelineVisualizer';
import PipelineCrossSection from '@/components/ui/PipelineCrossSection';
import ResidentialVsCommercial from '@/components/ui/ResidentialVsCommercial';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import TrussVisualizer from '@/components/ui/TrussVisualizer';
import InspectionChecklist from '@/components/ui/InspectionChecklist';
import SouthIndiaMap from '@/components/ui/SouthIndiaMap';
import CeoMessageSection from '@/components/sections/CeoMessageSection';
import IsoQualityGraphic from '@/components/ui/IsoQualityGraphic';
import ProjectGallery from '@/components/ui/ProjectGallery';
import FaqSection from '@/components/ui/FaqSection';
import SignaturePipelineLine from '@/components/ui/SignaturePipelineLine';
import CtaBanner from '@/components/sections/CtaBanner';
import AuthorizedCertificatesSection from '@/components/sections/AuthorizedCertificatesSection';
import OurProjectsSection from '@/components/sections/OurProjectsSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. HERO - Interactive Ecosystem */}
      <HeroSection />

      {/* Signature Animated Traveling Line */}
      <SignaturePipelineLine label="ACTIVE TELEMETRY GRID" metric="IS 6044 / PESO COMPLIANT" />

      {/* 2. SCALE - Animated Once-Only Statistics */}
      <ScaleSection />

      {/* 3. CORE SERVICES - 8 Large Interactive Cards */}
      <ServicesOverview />

      {/* 4. OUR PROJECTS - Dynamic with Real-time Admin Add/Edit/Delete */}
      <OurProjectsSection />

      {/* 5. AUTHORIZED CERTIFICATES - Statutory Compliance with Real-time Admin Add/Edit/Delete */}
      <AuthorizedCertificatesSection />

      {/* Signature Traveling Line */}
      <SignaturePipelineLine label="GAS RETICULATION CORE" metric="ASTM B88 SEAMLESS COPPER" />

      {/* 6. LPG PIPELINE - 6-Step Engineering Schematic */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PipelineVisualizer />
        </div>
      </section>

      {/* 7. PIPELINE CROSS-SECTION - Interactive Particle Flow */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PipelineCrossSection />
        </div>
      </section>

      {/* 8. RESIDENTIAL VS COMMERCIAL SWITCH */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResidentialVsCommercial />
        </div>
      </section>

      {/* 9. BEFORE / AFTER COMPARISON SLIDER */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 10. ROOF TRUSS - 3D-Style Interactive Visualizer */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrussVisualizer />
        </div>
      </section>

      {/* 11. MANDATORY SAFETY INSPECTION CHECKLIST */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InspectionChecklist />
        </div>
      </section>

      {/* 12. SOUTH INDIA NETWORK MAP */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SouthIndiaMap />
        </div>
      </section>

      {/* 13. ENTREPRENEUR PROFILE - S. Gowtham Kumar with Official Visiting Card */}
      <CeoMessageSection />

      {/* 14. ISO QUALITY GRAPHIC & CONTINUOUS PDCA CYCLE */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IsoQualityGraphic />
        </div>
      </section>

      {/* 15. PROJECT GALLERY LIGHTBOX */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGallery />
        </div>
      </section>

      {/* 16. INTERACTIVE FAQ ACCORDION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection />
        </div>
      </section>

      {/* 17. FINAL ACTION CTA BANNER */}
      <CtaBanner
        title="Upgrade Your Facility with PHENIX Safety Solutions"
        subtitle="Connect with our Coonoor engineering headquarters or schedule a comprehensive LPG safety audit."
        primaryBtnText="Consult Engineering Desk"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
