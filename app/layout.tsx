import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { AdminProvider } from '@/context/AdminContext';
import AdminSettingsDrawer from '@/components/admin/AdminSettingsDrawer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PHENIX Safety Solutions | LPG, Industrial Gas, Safety Audits & Compliance Support',
  description: 'PHENIX Safety Solutions - Premier LPG reticulated pipelines, industrial gas manifold engineering, statutory PESO audits, and compliance support across South India.',
  keywords: [
    'PHENIX Safety Solutions',
    'LPG Pipeline Installation',
    'Industrial Gas Manifold',
    'Safety Audits',
    'Compliance Support',
    'Coonoor Gas Piping',
    'The Nilgiris Safety Audits',
    'IS 6044 LPG Reticulation'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
        <AdminProvider>
          <LoadingScreen />
          <Navbar />
          <main className="flex-1 w-full bg-white">
            {children}
          </main>
          <Footer />
          <AdminSettingsDrawer />
        </AdminProvider>
      </body>
    </html>
  );
}
