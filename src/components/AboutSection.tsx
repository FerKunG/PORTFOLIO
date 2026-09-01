'use client';

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { User, School, BookOpen, Compass, Target, Sparkles, Cpu, Lightbulb, CheckCircle, BrainCircuit } from 'lucide-react';

export default function AboutSection() {
  const cards = [
    {
      icon: User,
      label: 'ชื่อ-นามสกุล',
      value: `${PERSONAL_INFO.nameTh} (${PERSONAL_INFO.nickname})`,
      subValue: PERSONAL_INFO.nameEn,
      color: 'from-crimson-500/20 to-crimson-800/10',
      border: 'border-crimson-500/30'
    },
    {
      icon: School,
      label: 'ระดับการศึกษา',
      value: PERSONAL_INFO.education,
      subValue: `เกรดเฉลี่ยสะสม: ${PERSONAL_INFO.gpax}`,
      color: 'from-amber-500/20 to-amber-800/10',
      border: 'border-amber-500/30'
    },
    {
      icon: BookOpen,
      label: 'สถานศึกษา',
      value: PERSONAL_INFO.school,
      subValue: `อ.คลองขลุง จ.กำแพงเพชร`,
      color: 'from-blue-500/20 to-blue-800/10',
      border: 'border-blue-500/30'
    },
    {
      icon: Compass,
      label: 'ความสนใจเฉพาะด้าน',
      value: 'Web Development & AI Architecture',
      subValue: 'Engineering Problem Solving, IoT, Data Modeling',
      color: 'from-emerald-500/20 to-emerald-800/10',
      border: 'border-emerald-500/30'
    },
    {
      icon: Target,
      label: 'เป้าหมายการศึกษาต่อ',
      value: PERSONAL_INFO.targetFaculty,
      subValue: PERSONAL_INFO.targetUniversity,
      color: 'from-crimson-600/20 to-purple-800/10',
      border: 'border-crimson-500/40',
      highlight: true
    },
  ];

  const pillars = [
    {
      title: 'Problem-Solving Mindset',
      desc: 'มองปัญหาเป็นโจทย์วิศวกรรมที่สามารถย่อยและแก้ไขได้ด้วยกระบวนการคิดเชิงตรรกะและอัลกอริทึม',
      icon: Lightbulb
    },
    {
      title: 'Full-Stack & AI Synergy',
      desc: 'เชื่อมโยงความรู้ด้าน Web Development กับ AI และ Database เพื่อสร้างแอปพลิเคชันที่ใช้งานได้จริง',
      icon: BrainCircuit
    },
    {
      title: 'Continuous Innovation',
      desc: 'เรียนรู้เทคโนโลยีใหม่อย่างไม่หยุดยั้ง พร้อมทดลองและพัฒนาตนเองเพื่อสร้างคุณค่าสู่สังคม',
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Blueprint Grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/80 border border-crimson-500/30 text-crimson-300 text-xs font-mono tracking-wider">
            <User className="w-3.5 h-3.5 text-crimson-400" />
            <span>SECTION 02</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-kanit tracking-tight">
            ABOUT <span className="text-crimson-500">ME</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson-700 to-crimson-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base font-kanit pt-2">
            แนะนำตัวและประวัติส่วนตัวในรูปแบบ Professional สำหรับการยื่นเข้าศึกษาต่อ
          </p>
        </div>

        {/* Bio Narrative Box */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#0d111a]/80 border border-white/10 shadow-2xl backdrop-blur-xl relative tech-corner-top-left tech-corner-bottom-right">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
            <div className="w-8 h-8 rounded-lg bg-crimson-900/60 border border-crimson-500/40 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-crimson-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-kanit">Professional Statement</h3>
              <p className="text-xs text-gray-400 font-mono">PHILOSOPHY & PASSION</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-200 font-kanit text-base sm:text-lg leading-relaxed">
            <p>
              &ldquo;ผมมีความสนใจด้านวิศวกรรม เทคโนโลยี การเขียนโปรแกรม และการพัฒนา Web Application ผมชื่นชอบการนำความรู้มาประยุกต์ใช้เพื่อสร้างนวัตกรรม และแก้ไขปัญหาในชีวิตจริง&rdquo;
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              &ldquo;ผมมีความสนใจในการพัฒนาเว็บไซต์ การเขียนโปรแกรม และเทคโนโลยีปัญญาประดิษฐ์ โดยมีเป้าหมายที่จะศึกษาต่อและพัฒนาตนเอง สู่การเป็นวิศวกรในอนาคต&rdquo;
            </p>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-xl bg-gradient-to-br ${card.color} bg-[#0c101a]/90 border ${card.border} glass-panel-hover transition-all duration-300 ${
                  card.highlight ? 'md:col-span-2 lg:col-span-2 shadow-lg shadow-crimson-950/40' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-crimson-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">{card.label}</p>
                    <p className="text-base sm:text-lg font-bold text-white font-kanit">{card.value}</p>
                    <p className="text-xs sm:text-sm text-gray-300 font-kanit">{card.subValue}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Mindset Pillars */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-xl font-bold text-white font-kanit text-center mb-8">
            Engineering Mindset & Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#0d111a]/70 border border-white/10 hover:border-crimson-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-crimson-950 border border-crimson-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-crimson-400" />
                  </div>
                  <h4 className="text-base font-bold text-white font-kanit mb-2">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-kanit leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
