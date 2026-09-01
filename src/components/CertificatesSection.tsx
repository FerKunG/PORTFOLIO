'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CertificateItem } from '../data/portfolioData';
import { Award, Sparkles, ExternalLink, X, ZoomIn, CheckCircle2, AlertCircle, Plus, ShieldCheck, Tag, Star } from 'lucide-react';

interface CertificatesSectionProps {
  certificates: CertificateItem[];
  onOpenAiAnalyzer: () => void;
}

export default function CertificatesSection({ certificates, onOpenAiAnalyzer }: CertificatesSectionProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [rankingFilter, setRankingFilter] = useState<string>('All');

  const categories = [
    'All',
    'Academic & Research Conference',
    'Academic Excellence',
    'Technology & Web Development'
  ];

  const filteredCerts = certificates.filter((cert) => {
    const matchesCat = activeCategory === 'All' || cert.category === activeCategory;
    const matchesRank = rankingFilter === 'All' || 
      (rankingFilter === 'Recommended' && cert.ranking === 'Highly Relevant') ||
      cert.ranking === rankingFilter;
    return matchesCat && matchesRank;
  });

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-crimson-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/80 border border-crimson-500/30 text-crimson-300 text-xs font-mono tracking-wider">
            <Award className="w-3.5 h-3.5 text-crimson-400" />
            <span>SECTION 06</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-kanit tracking-tight">
            CERTIFICATES & <span className="text-crimson-500">ACHIEVEMENTS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson-700 to-crimson-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base font-kanit pt-2">
            เกียรติบัตรและรางวัลความสำเร็จที่ผ่านการวิเคราะห์ด้วยระบบ AI พร้อมความเชื่อมโยงสู่คณะวิศวกรรมศาสตร์
          </p>
        </div>

        {/* Filter Controls & AI Action Button */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-kanit transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-crimson-600 text-white shadow-lg shadow-crimson-900/40 border border-crimson-400 font-semibold'
                    : 'bg-[#0d111a] text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat === 'All' ? 'ทั้งหมด (All)' : cat}
              </button>
            ))}
          </div>

          {/* Ranking & Add Button */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setRankingFilter(rankingFilter === 'Recommended' ? 'All' : 'Recommended')}
              className={`px-3 py-1.5 rounded-xl text-xs font-kanit flex items-center gap-1.5 transition-all ${
                rankingFilter === 'Recommended'
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-amber-950/40 text-amber-300 border border-amber-500/30 hover:bg-amber-900/40'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Recommended for Engineering</span>
            </button>

            <button
              onClick={onOpenAiAnalyzer}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-crimson-800 to-crimson-600 hover:from-crimson-700 hover:to-crimson-500 text-white text-xs font-kanit font-medium border border-crimson-400/40 shadow-md flex items-center gap-1.5 hover:scale-105 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>+ วิเคราะห์เกียรติบัตรด้วย AI</span>
            </button>
          </div>

        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const isHighlyRelevant = cert.ranking === 'Highly Relevant';

            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="rounded-2xl bg-[#0d111a]/95 border border-white/10 glass-panel-hover flex flex-col justify-between overflow-hidden cursor-pointer group relative"
              >
                {/* Recommended Badge on Top */}
                {isHighlyRelevant && (
                  <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-amber-500 text-black text-[10px] font-kanit font-bold flex items-center gap-1 shadow-lg shadow-amber-500/30">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Recommended for Engineering</span>
                  </div>
                )}

                <div>
                  {/* Certificate Thumbnail with Hover Zoom */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/60 border-b border-white/10">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-3 py-1.5 rounded-lg bg-crimson-600/90 text-white text-xs font-kanit flex items-center gap-1.5 shadow-lg">
                        <ZoomIn className="w-4 h-4" />
                        <span>คลิกดูรายละเอียดฉบับเต็ม</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                      <span className="px-2 py-0.5 rounded bg-crimson-950/80 text-crimson-300 border border-crimson-500/30 text-[10px]">
                        {cert.category}
                      </span>
                      <span>{cert.year}</span>
                    </div>

                    <h3 className="text-base font-bold text-white font-kanit group-hover:text-crimson-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-amber-400 font-kanit font-medium">
                      🏆 {cert.achievement}
                    </p>

                    <p className="text-xs text-gray-400 font-kanit">
                      🏛️ {cert.organization}
                    </p>

                    <p className="text-xs text-gray-300 font-kanit line-clamp-2 leading-relaxed pt-1">
                      {cert.short_description}
                    </p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="p-5 pt-0 border-t border-white/5 flex items-center justify-between text-[11px] font-kanit text-gray-400 mt-2">
                  <div className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>AI Verified</span>
                  </div>
                  <span className="text-crimson-400 font-medium group-hover:translate-x-1 transition-transform">
                    อ่านเพิ่มเติม →
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 p-4 rounded-xl bg-white/5 border border-white/5 text-center text-xs text-gray-400 font-kanit">
          💡 <span className="text-gray-300">ข้อแนะนำ:</span> ระบบ Ranking เป็นการวิเคราะห์ความสอดคล้องกับเกณฑ์การรับเข้าศึกษาต่อคณะวิศวกรรมศาสตร์ สจล. เพื่อช่วยจัดลำดับผลงานที่โดดเด่นที่สุด
        </div>

      </div>

      {/* Full Certificate Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0d111a] border border-crimson-500/60 shadow-2xl p-6 sm:p-8 space-y-6 text-white">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-crimson-950 text-crimson-300 border border-crimson-500/30 text-xs font-mono">
                    {selectedCert.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-amber-500 text-black text-xs font-kanit font-bold">
                    ★ {selectedCert.ranking}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-kanit mt-1">
                  {selectedCert.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-kanit">
                  {selectedCert.organization} • {selectedCert.date}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Split View: Left Image Preview / Right Full Data */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Zoomable Image Preview */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/15 bg-black/90 shadow-xl">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-400 font-mono flex items-center justify-between">
                  <span>AI Confidence Score:</span>
                  <span className="text-emerald-400 font-bold">{(selectedCert.ai_confidence * 100).toFixed(0)}% (Verified)</span>
                </div>
              </div>

              {/* Right Column: AI Analysis & University Descriptions */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Achievement Badge */}
                <div className="p-3.5 rounded-xl bg-crimson-950/40 border border-crimson-500/30">
                  <p className="text-xs text-crimson-300 font-mono uppercase">ACHIEVEMENT / ความสำเร็จ</p>
                  <p className="text-base font-bold text-white font-kanit mt-0.5">{selectedCert.achievement}</p>
                </div>

                {/* Skills Developed */}
                <div className="space-y-1.5">
                  <p className="text-xs text-gray-400 font-mono uppercase flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-crimson-400" />
                    ทักษะที่ได้รับการพัฒนา (SKILLS DEVELOPED)
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200 text-xs font-kanit"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio Description */}
                <div className="space-y-1.5">
                  <p className="text-xs text-gray-400 font-mono uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    คำอธิบายสำหรับใช้ในพอร์ตโฟลิโอ (PORTFOLIO DESCRIPTION)
                  </p>
                  <p className="text-xs sm:text-sm text-gray-200 font-kanit leading-relaxed bg-[#07090e]/60 p-3 rounded-xl border border-white/5">
                    {selectedCert.portfolio_description}
                  </p>
                </div>

                {/* Engineering Connection */}
                <div className="space-y-1.5">
                  <p className="text-xs text-crimson-400 font-mono uppercase font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-crimson-400" />
                    ความเชื่อมโยงกับคณะวิศวกรรมศาสตร์ (ENGINEERING CONNECTION)
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 font-kanit leading-relaxed bg-crimson-950/30 p-3 rounded-xl border border-crimson-500/20">
                    {selectedCert.engineering_connection}
                  </p>
                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-6 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white text-xs sm:text-sm font-kanit font-semibold"
              >
                ปิดหน้าต่าง
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
