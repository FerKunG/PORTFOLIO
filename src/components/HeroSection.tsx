'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Sparkles, Download, Mail, CheckCircle2, Award, BookOpen, Code2, Cpu, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  onOpenAiAnalyzer: () => void;
}

export default function HeroSection({ onOpenAiAnalyzer }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-navy-600/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Engineering & University Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-crimson-950/70 border border-crimson-500/40 text-crimson-300 text-xs sm:text-sm font-kanit shadow-lg shadow-crimson-950/40 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-ping" />
              <span className="font-semibold text-white">PORTFOLIO FOR ENGINEERING FACULTY</span>
              <span className="text-crimson-400">|</span>
              <span className="text-gray-300">KMITL 2026</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-gray-400 font-mono">
                {PERSONAL_INFO.nameEn}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-kanit tracking-tight leading-[1.15]">
                {PERSONAL_INFO.nameTh}
                <span className="block text-2xl sm:text-3xl font-medium text-crimson-400 mt-2">
                  (แสตมป์ • Stamp)
                </span>
              </h1>
            </div>

            {/* School & Program Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200 text-xs sm:text-sm font-kanit">
                🎓 {PERSONAL_INFO.education}
              </div>
              <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200 text-xs sm:text-sm font-kanit">
                🏫 {PERSONAL_INFO.school}
              </div>
            </div>

            {/* Highlight Concept String */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-crimson-950/60 via-navy-800/50 to-transparent border-l-4 border-crimson-500 border-y border-r border-white/5 backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-crimson-200 to-crimson-400 font-kanit">
                &ldquo;Future Engineer | Technology | Innovation | Artificial Intelligence&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 font-kanit">
                มุ่งมั่นสร้างสรรค์นวัตกรรม แก้ไขปัญหาด้วยระบบวิศวกรรมคอมพิวเตอร์ และพัฒนา Web & AI เพื่อยกระดับสังคม
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-crimson-700 via-crimson to-crimson-600 hover:from-crimson-600 hover:to-crimson-500 text-white font-kanit font-semibold text-sm sm:text-base border border-crimson-400/40 shadow-xl shadow-crimson-900/40 hover:shadow-crimson/50 hover:scale-[1.02] transition-all flex items-center gap-2 group"
              >
                <span>VIEW MY PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-kanit font-medium text-sm sm:text-base border border-white/15 hover:border-white/30 backdrop-blur-sm hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-crimson-400" />
                <span>CONTACT ME</span>
              </a>

              <button
                onClick={onOpenAiAnalyzer}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600/20 to-crimson-900/40 hover:from-amber-600/30 hover:to-crimson-900/60 text-amber-300 font-kanit font-medium text-sm sm:text-base border border-amber-500/40 hover:border-amber-400/60 shadow-lg shadow-amber-950/20 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                <span>AI CERT ANALYZER</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div className="p-3 rounded-lg bg-[#0d111a]/80 border border-white/5 text-center">
                <p className="text-xl sm:text-2xl font-bold font-mono text-crimson-400">3.91</p>
                <p className="text-[11px] text-gray-400 font-kanit">GPAX (ห้องเรียน SMT)</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0d111a]/80 border border-white/5 text-center">
                <p className="text-xl sm:text-2xl font-bold font-mono text-white">1st</p>
                <p className="text-[11px] text-gray-400 font-kanit">International Speaker</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0d111a]/80 border border-white/5 text-center">
                <p className="text-xl sm:text-2xl font-bold font-mono text-white">5+</p>
                <p className="text-[11px] text-gray-400 font-kanit">Tech & AI Projects</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0d111a]/80 border border-white/5 text-center">
                <p className="text-xl sm:text-2xl font-bold font-mono text-amber-400">KMITL</p>
                <p className="text-[11px] text-gray-400 font-kanit">Target Engineering</p>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Futuristic Profile Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow & Circuit Accents */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-crimson-600 via-crimson-800 to-amber-600 opacity-40 blur-xl animate-pulse" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-[#0d111a]/90 border border-crimson-500/30 p-4 sm:p-5 shadow-2xl backdrop-blur-xl tech-corner-top-left tech-corner-bottom-right">
                
                {/* Tech Status Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-400 font-kanit">พร้อมยื่นศึกษาต่อ</span>
                  </div>
                  <span className="text-crimson-300">ID: KKRS-SMT-66</span>
                </div>

                {/* Profile Image Container */}
                <div className="relative my-4 aspect-[4/5] rounded-xl overflow-hidden border border-crimson-500/30 bg-gradient-to-b from-[#131826] via-[#0b0e17] to-[#06080e] group shadow-inner">
                  {/* Subtle Inner Radial Glow for Portrait */}
                  <div className="absolute inset-0 bg-crimson-radial opacity-60 pointer-events-none" />
                  
                  <Image
                    src="/images/profile.png"
                    alt="นายณัฐพงษ์ ดวงรัตน์ (แสตมป์)"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 relative z-10"
                    priority
                  />

                  {/* Tech HUD Overlay Elements */}
                  <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-crimson-500/40 text-[10px] font-mono text-crimson-300 shadow-md">
                    ENGINEERING APPLICANT
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 z-20 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-lg">
                    <div>
                      <p className="text-xs font-bold text-white font-kanit">นายณัฐพงษ์ ดวงรัตน์ (แสตมป์)</p>
                      <p className="text-[10px] text-gray-300 font-kanit">โรงเรียนคลองขลุงราษฎร์รังสรรค์</p>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-crimson-900/80 border border-crimson-500/50 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-crimson-300" />
                    </div>
                  </div>
                </div>

                {/* Badges on Card */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-xs font-kanit">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                    <Award className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-gray-200 text-[11px]">SMT Quality Class</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-crimson-400 flex-shrink-0" />
                    <span className="text-gray-200 text-[11px]">Full-Stack & AI Web</span>
                  </div>
                </div>

                {/* University Target Footer */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-kanit text-gray-400">
                  <span>เป้าหมายการศึกษา:</span>
                  <span className="font-semibold text-crimson-400">คณะวิศวกรรมศาสตร์ สจล.</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
