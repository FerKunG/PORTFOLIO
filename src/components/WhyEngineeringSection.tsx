'use client';

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Target, Cpu, Binary, Compass, Sparkles, CheckCircle2, Award, Zap, Code2 } from 'lucide-react';

export default function WhyEngineeringSection() {
  const pillars = [
    {
      icon: Binary,
      title: 'คณิตศาสตร์และวิทยาศาสตร์ประยุกต์',
      desc: 'นำทฤษฎีทางคณิตศาสตร์ แคลคูลัส และฟิสิกส์มาใช้จำลองโมเดลและวิเคราะห์ระบบที่ซับซ้อน'
    },
    {
      icon: Code2,
      title: 'นวัตกรรมซอฟต์แวร์และ AI',
      desc: 'สร้างสรรค์ Web Application และปัญญาประดิษฐ์เพื่อยกระดับการทำงานและคุณภาพชีวิต'
    },
    {
      icon: Zap,
      title: 'การแก้ปัญหาเชิงวิศวกรรม',
      desc: 'มีกระบวนการคิดที่เป็นระบบ (Systematic Problem Solving) เพื่อแก้ปัญหาจริงในสังคม'
    }
  ];

  return (
    <section id="why-engineering" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 blueprint-grid-crimson opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/80 border border-crimson-500/30 text-crimson-300 text-xs font-mono tracking-wider">
            <Target className="w-3.5 h-3.5 text-crimson-400" />
            <span>SECTION 07</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-kanit tracking-tight">
            WHY <span className="text-crimson-500">ENGINEERING?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson-700 to-crimson-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base font-kanit pt-2">
            แรงบันดาลใจและเหตุผลในการมุ่งมั่นศึกษาต่อคณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          </p>
        </div>

        {/* Blueprint Inspired Feature Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0e121d]/90 via-[#07090e]/95 to-[#170c14]/90 border border-crimson-500/40 shadow-2xl relative overflow-hidden tech-corner-top-left tech-corner-bottom-right">
          
          {/* Blueprint Watermark Pattern */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-white">
            <Cpu className="w-96 h-96 text-crimson-400" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            
            {/* Quote Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crimson-950 border border-crimson-500/40 text-crimson-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>ENGINEERING PHILOSOPHY & INSPIRATION</span>
            </div>

            {/* Main Text Quotes */}
            <div className="space-y-6 text-gray-100 font-kanit text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
              <p className="border-l-4 border-crimson-500 pl-4 py-1">
                &ldquo;ผมสนใจในศาสตร์ของวิศวกรรม เพราะวิศวกรรมเป็นศาสตร์ที่นำความรู้ด้านวิทยาศาสตร์ คณิตศาสตร์ และเทคโนโลยีมาประยุกต์ใช้ เพื่อแก้ไขปัญหาและสร้างสรรค์สิ่งใหม่ ๆ&rdquo;
              </p>
              
              <p className="border-l-4 border-amber-500/60 pl-4 py-1 text-gray-300 text-base sm:text-lg">
                &ldquo;ผมต้องการพัฒนาความรู้ด้านเทคโนโลยี และนำความสามารถไปสร้างนวัตกรรม ที่สามารถช่วยแก้ไขปัญหาและสร้างประโยชน์ให้กับสังคม&rdquo;
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 hover:border-crimson-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-crimson-950 border border-crimson-500/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-crimson-400" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-kanit">{item.title}</h4>
                    <p className="text-xs text-gray-400 font-kanit leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* University Target Affirmation */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-crimson-950/60 via-black/40 to-transparent border border-crimson-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-xs font-mono text-crimson-300">DEDICATION TO KMITL</p>
                <p className="text-sm font-bold text-white font-kanit">
                  มุ่งมั่นนำความรู้มาพัฒนาตนเองใน คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                </p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-crimson-600 text-white text-xs font-mono font-bold tracking-wider flex-shrink-0 shadow-lg shadow-crimson-900/40">
                KMITL ENGINEERING 2026
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
