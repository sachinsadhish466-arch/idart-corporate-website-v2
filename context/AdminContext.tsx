'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CertificateItem {
  id: string;
  title: string;
  description: string;
  authority: string;
  certNumber: string;
  validity: string;
  imageUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'LPG Pipeline' | 'Industrial Gas' | 'Safety Audit' | 'Roof Truss' | 'Compliance';
  description: string;
  client: string;
  location: string;
  completedYear: string;
  imageUrl: string;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  address: string;
  gstin: string;
  cin: string;
  phone: string;
  email: string;
  leaderName: string;
  leaderTitle: string;
  leaderLocation: string;
  leaderPhone: string;
  leaderEmail: string;
  logoUrl: string;
  cardImageUrl: string;
}

const DEFAULT_SETTINGS: SiteSettings = {
  companyName: "PHENIX Safety Solutions",
  tagline: "LPG - Industrial Gas - Safety Audits - Compliance Support",
  address: "3/573 Kk Nagar Hubbathalai Coonoor The Nilgiris 643202",
  gstin: "33AAQCA1658M1ZA",
  cin: "U01100TZ2017PTC029601",
  phone: "9500848051",
  email: "gowtham.s.kumar.07@gmail.com",
  leaderName: "S GOWTHAM KUMAR",
  leaderTitle: "ENTREPRENEUR",
  leaderLocation: "Coonoor, The Nilgiris",
  leaderPhone: "9500848051",
  leaderEmail: "gowtham.s.kumar.07@gmail.com",
  logoUrl: "/images/phenix-logo.png",
  cardImageUrl: "/images/entrepreneur-card.jpg"
};

const DEFAULT_CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-1",
    title: "ISO 9001:2015 Quality Management Accreditation",
    description: "Accredited for technical safety inspections, industrial gas reticulation management, risk audits, and safety compliance advisory.",
    authority: "IAF - International Accreditation Forum (IAF - 22IQLU17)",
    certNumber: "22IQLU17-QMS",
    validity: "Active / Verified",
    imageUrl: "/images/iso-cert.jpg"
  },
  {
    id: "cert-2",
    title: "Petroleum & Explosives Safety (PESO) Regulatory Compliance",
    description: "Design validation, pressure relief calculations, and testing protocols aligned strictly with Petroleum and Explosives Safety Organization norms.",
    authority: "PESO / IS 6044 Adherence Directorate",
    certNumber: "PESO-COMP-2024",
    validity: "Statutory Adherence",
    imageUrl: "/images/peso-badge.jpg"
  },
  {
    id: "cert-3",
    title: "Bureau of Indian Standards (BIS) Copper Reticulation Compliance",
    description: "Material certification for seamless Cu-DHP copper piping, high-tensile silver brazing, and ASTM B88 standard hydro-testing procedures.",
    authority: "BIS Standards Certification Division",
    certNumber: "IS 6044 (Part 1 & 2)",
    validity: "Engineering Standard",
    imageUrl: "/images/bis-cert.jpg"
  },
  {
    id: "cert-4",
    title: "Commercial Gas Leak Detection & Safety Audit Authority",
    description: "Certified protocol for combustible hydrocarbon sensor calibration, third-party facility hazard analysis, and issuance of safety clearance stickers.",
    authority: "National Safety Council Approved Framework",
    certNumber: "NSC-AUD-9912",
    validity: "Annual Recertification",
    imageUrl: "/images/safety-badge.jpg"
  }
];

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Commercial Central Gas Manifold & Dual-Stage PRV Skid",
    category: "Industrial Gas",
    description: "Engineered high-capacity 47.5kg LOT manifold bank with automatic changeover regulators, copper pipeline headers, and gas detector interlocks for luxury hill-resort kitchen.",
    client: "Heritage Hospitality Resort",
    location: "Coonoor, The Nilgiris",
    completedYear: "2025",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-2",
    title: "Multi-Storey Residential Reticulated LPG Infrastructure",
    category: "LPG Pipeline",
    description: "Designed, installed, and hydro-tested 150-unit domestic reticulated gas supply network with individual digital metering, emergency shutoff valves, and fire-safe risers.",
    client: "Highland Residences",
    location: "Ooty & Coonoor",
    completedYear: "2025",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-3",
    title: "Industrial Fabrication Unit Cryogenic Vaporizer & Manifold",
    category: "Industrial Gas",
    description: "Turnkey industrial pipeline with thermal vaporization skid, stainless steel secondary distribution line, and electronic pressure monitoring alarms for manufacturing facility.",
    client: "Nilgiri Agro Processing Unit",
    location: "The Nilgiris Industrial Estate",
    completedYear: "2024",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-4",
    title: "Comprehensive Hospitality LPG Safety Audit & Leak Telemetry",
    category: "Safety Audit",
    description: "Multi-point diagnostic safety assessment, combustible gas detector testing, burner efficiency tuning, and issuance of authorized compliance safety certification.",
    client: "Nilgiris Tea Country Club & Canteen",
    location: "Coonoor",
    completedYear: "2026",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-5",
    title: "Engineered High-Tensile Steel Roof Truss & Warehouse Shed",
    category: "Roof Truss",
    description: "Structural tubular steel roof truss fabrication engineered to IS 800 standards with 28-meter clear span, turbo roof ventilators, and anti-corrosion Galvalume cladding.",
    client: "Hillside Logistics & Storage Hub",
    location: "Mettupalayam - Coonoor Highway",
    completedYear: "2024",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-6",
    title: "Statutory OMC Consumer Safety Awareness & Training Drive",
    category: "Compliance",
    description: "Conducted technical training workshops for domestic consumers and commercial kitchen operators on emergency regulator isolation, cylinder handling, and fire containment.",
    client: "District Consumer Protection Cell",
    location: "The Nilgiris District",
    completedYear: "2026",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
  }
];

interface AdminContextType {
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  toggleAdmin: () => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (val: boolean) => void;
  siteSettings: SiteSettings;
  updateSiteSettings: (partial: Partial<SiteSettings>) => void;
  certificates: CertificateItem[];
  addCertificate: (cert: Omit<CertificateItem, 'id'>) => void;
  updateCertificate: (id: string, cert: Partial<CertificateItem>) => void;
  deleteCertificate: (id: string) => void;
  projects: ProjectItem[];
  addProject: (proj: Omit<ProjectItem, 'id'>) => void;
  updateProject: (id: string, proj: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;
  resetAllToDefaults: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const STORAGE_KEY = 'phenix_safety_solutions_data_v1';

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [certificates, setCertificates] = useState<CertificateItem[]>(DEFAULT_CERTIFICATES);
  const [projects, setProjects] = useState<ProjectItem[]>(DEFAULT_PROJECTS);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.siteSettings) setSiteSettings(parsed.siteSettings);
        if (parsed.certificates) setCertificates(parsed.certificates);
        if (parsed.projects) setProjects(parsed.projects);
      }
    } catch (e) {
      console.error('Error loading stored site data:', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          siteSettings,
          certificates,
          projects,
          updatedAt: new Date().toISOString()
        })
      );
    } catch (e) {
      console.error('Error saving site data:', e);
    }
  }, [siteSettings, certificates, projects, isLoaded]);

  const toggleAdmin = () => setIsAdmin((prev) => !prev);

  const updateSiteSettings = (partial: Partial<SiteSettings>) => {
    setSiteSettings((prev) => ({ ...prev, ...partial }));
  };

  const addCertificate = (cert: Omit<CertificateItem, 'id'>) => {
    const newCert: CertificateItem = {
      ...cert,
      id: `cert-${Date.now()}`
    };
    setCertificates((prev) => [newCert, ...prev]);
  };

  const updateCertificate = (id: string, updated: Partial<CertificateItem>) => {
    setCertificates((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteCertificate = (id: string) => {
    setCertificates((prev) => prev.filter((item) => item.id !== id));
  };

  const addProject = (proj: Omit<ProjectItem, 'id'>) => {
    const newProj: ProjectItem = {
      ...proj,
      id: `proj-${Date.now()}`
    };
    setProjects((prev) => [newProj, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<ProjectItem>) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((item) => item.id !== id));
  };

  const resetAllToDefaults = () => {
    setSiteSettings(DEFAULT_SETTINGS);
    setCertificates(DEFAULT_CERTIFICATES);
    setProjects(DEFAULT_PROJECTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        toggleAdmin,
        isSettingsOpen,
        setIsSettingsOpen,
        siteSettings,
        updateSiteSettings,
        certificates,
        addCertificate,
        updateCertificate,
        deleteCertificate,
        projects,
        addProject,
        updateProject,
        deleteProject,
        resetAllToDefaults
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
