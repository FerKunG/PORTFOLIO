'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CircuitCanvas from '../components/CircuitCanvas';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import CertificatesSection from '../components/CertificatesSection';
import WhyEngineeringSection from '../components/WhyEngineeringSection';
import FutureGoalSection from '../components/FutureGoalSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AiCertificateAnalyzer from '../components/AiCertificateAnalyzer';
import { INITIAL_CERTIFICATES, CertificateItem } from '../data/portfolioData';

export default function Home() {
  const [certificates, setCertificates] = useState<CertificateItem[]>(INITIAL_CERTIFICATES);
  const [isAiAnalyzerOpen, setIsAiAnalyzerOpen] = useState<boolean>(false);

  // Load persistent certificates if exists
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kmitl_portfolio_certificates');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCertificates(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load certificates from storage', e);
    }
  }, []);

  // Save persistent certificates
  const handleAddCertificate = (newCert: CertificateItem) => {
    setCertificates((prev) => {
      const updated = [newCert, ...prev];
      try {
        localStorage.setItem('kmitl_portfolio_certificates', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save to storage', e);
      }
      return updated;
    });

    // Scroll to certificates section smoothly
    setTimeout(() => {
      const certEl = document.getElementById('certificates');
      if (certEl) {
        certEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <main className="min-h-screen bg-[#07090e] text-white relative selection:bg-crimson-600 selection:text-white">
      {/* Background Interactive Particles & Circuit Nodes */}
      <CircuitCanvas />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenAiAnalyzer={() => setIsAiAnalyzerOpen(true)} />

      {/* Section 1: Hero */}
      <HeroSection onOpenAiAnalyzer={() => setIsAiAnalyzerOpen(true)} />

      {/* Section 2: About Me */}
      <AboutSection />

      {/* Section 3: Skills */}
      <SkillsSection />

      {/* Section 4: Projects (LNWMATH AI Platform) */}
      <ProjectsSection />

      {/* Section 5: Activities (Oral Presentation at KPRU, Port 69, SMT) */}
      <ActivitiesSection />

      {/* Section 6: Certificates & Achievements (Gallery & Modal) */}
      <CertificatesSection
        certificates={certificates}
        onOpenAiAnalyzer={() => setIsAiAnalyzerOpen(true)}
      />

      {/* Section 7: Why Engineering? */}
      <WhyEngineeringSection />

      {/* Section 8: Future Goal */}
      <FutureGoalSection />

      {/* Section 9: Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* AI Certificate Analyzer Modal */}
      <AiCertificateAnalyzer
        isOpen={isAiAnalyzerOpen}
        onClose={() => setIsAiAnalyzerOpen(false)}
        onAddCertificate={handleAddCertificate}
      />
    </main>
  );
}
