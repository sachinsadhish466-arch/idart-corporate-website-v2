export interface OfficeLocation {
  title: string;
  address: string[];
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  isHeadquarters?: boolean;
}

export const COMPANY_INFO = {
  legalName: "PHENIX SAFETY SOLUTIONS",
  brandName: "PHENIX",
  tagline: "LPG - Industrial Gas - Safety Audits - Compliance Support",
  heroHeadline: "ADVANCED LPG, INDUSTRIAL GAS & COMPLIANCE SAFETY ENGINEERING",
  heroSubtitle: "Comprehensive reticulated gas pipelines, statutory safety audits, industrial manifold engineering, and PESO/OMC compliance solutions.",
  foundedYear: 2009,
  incorporatedYear: 2017,
  yearsOfExperience: "17+",
  activeBranches: "457+",
  qualifiedStaff: "482+",
  distributorsServed: "3687+",
  regionalOfficesCount: "4",
  networkCoverage: "South India Wide Service Network",
  
  entrepreneur: {
    name: "S GOWTHAM KUMAR",
    title: "ENTREPRENEUR",
    company: "PHENIX SAFETY SOLUTIONS",
    phone: "9500848051",
    email: "gowtham.s.kumar.07@gmail.com",
    location: "Coonoor, The Nilgiris",
    cardImage: "/images/entrepreneur-card.jpg",
    quote1: "At PHENIX Safety Solutions, our mission is straightforward — delivering uncompromising technical integrity, industrial gas precision, and safety audit excellence.",
    quote2: "Every gas manifold, copper pipeline, and compliance verification protects human lives, hospitality assets, and industrial enterprises.",
    quote3: "We are committed to building PHENIX into South India's foremost benchmark for industrial gas engineering and statutory safety compliance."
  },

  compliance: {
    gstin: "33AAQCA1658M1ZA",
    cin: "U01100TZ2017PTC029601",
    msme: "UDYAM-TN-24-0019284",
    iso: "ISO 9001:2015 Certified",
    isoScope: "Providing LPG inspection services, industrial gas manifold pipeline design, safety audits & statutory compliance support.",
    iafCode: "IAF - 22IQLU17",
    iafServiceCodes: ["34", "36", "29"]
  },

  headOffice: {
    title: "Corporate & Regional Headquarters",
    address: [
      "3/573 Kk Nagar",
      "Hubbathalai, Coonoor",
      "The Nilgiris, Tamil Nadu, India - 643202"
    ],
    fullAddress: "3/573 Kk Nagar Hubbathalai Coonoor The Nilgiris 643202",
    city: "Coonoor",
    district: "The Nilgiris",
    state: "Tamil Nadu",
    pincode: "643202",
    phone: "9500848051",
    email: "gowtham.s.kumar.07@gmail.com",
    workingHours: "Monday - Saturday: 9:00 AM - 7:00 PM IST"
  },

  services: [
    {
      id: "lpg-safety-inspection",
      title: "LPG Safety Inspection",
      shortTitle: "Safety Inspection",
      slug: "mandatory-inspection",
      description: "Authorized multi-point safety testing protocol verifying cylinders, regulators, Suraksha hoses, and appliance burn efficiency.",
      isCore: true,
      highlightMetric: "3,687+ Agencies Served"
    },
    {
      id: "lpg-pipeline-installation",
      title: "LPG Pipeline Installation",
      shortTitle: "Gas Pipeline",
      slug: "lpg-pipeline",
      description: "Custom copper and heavy-gauge reticulated pipeline infrastructure built to IS 6044 standards for commercial kitchens and residential towers.",
      isCore: true,
      highlightMetric: "IS 6044 / ASTM B88 Standard"
    },
    {
      id: "industrial-gas-solutions",
      title: "Industrial Gas Systems",
      shortTitle: "Industrial Gas",
      slug: "lpg-pipeline",
      description: "High-pressure manifold systems, cryogenic vaporizers, LOT battery installations, and pressure regulation skids for factories and hospitality.",
      isCore: true,
      highlightMetric: "Dual-Stage PRV Regulators"
    },
    {
      id: "safety-audits",
      title: "Statutory Safety Audits",
      shortTitle: "Safety Audits",
      slug: "mandatory-inspection",
      description: "Comprehensive risk assessments, combustible gas leak telemetry, hazard identification, and third-party audit reports for hospitality & commercial sites.",
      isCore: true,
      highlightMetric: "Calibrated Gas Detectors"
    },
    {
      id: "compliance-support",
      title: "Compliance & PESO Support",
      shortTitle: "Compliance Support",
      slug: "startup-solutions",
      description: "Full statutory guidance for Petroleum and Explosives Safety Organization (PESO), Oil Marketing Companies (OMC), and local fire safety clearances.",
      isCore: true,
      highlightMetric: "Statutory Advisory"
    },
    {
      id: "roof-truss-engineering",
      title: "Roof Truss & Industrial Sheds",
      shortTitle: "Roof Truss",
      slug: "roof-truss",
      description: "High-tensile tubular structural steel truss fabrication and pre-coated Galvalume industrial sheds engineered to IS 800 standards.",
      isCore: true,
      highlightMetric: "IS 800 / Wind Code Tested"
    }
  ],

  statesServed: [
    "Tamil Nadu",
    "Kerala",
    "Andhra Pradesh",
    "Telangana",
    "Puducherry"
  ],

  expansionStates: [
    "Karnataka",
    "Maharashtra",
    "Madhya Pradesh",
    "Odisha"
  ]
};
