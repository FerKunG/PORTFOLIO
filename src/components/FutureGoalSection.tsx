'use client';

import React from 'react';
import { ROADMAP_DATA } from '../data/portfolioData';
import { Target, Flag, Rocket, CheckCircle2, ChevronRight, Award, Sparkles } from 'lucide-react';

export default function FutureGoalSection() {
  return (
    <section id="future-goal" className="py-24 relative overflow-hidden bg-[#06080e]/95">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-crimson-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/80 border border-crimson-500/30 text-crimson-300 text-xs font-mono tracking-wider">
            <Flag className="w-3.5 h-3.5 text-crimson-400" />
            <span>SECTION 08</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-kanit tracking-tight">
            MY FUTURE <span className="text-crimson-500">GOAL</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson-700 to-crimson-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base font-kanit pt-2">
            วิสัยทัศน์ แผนที่การเรียนรู้ และเป้าหมายการเป็นวิศวกรในอนาคต
          </p>
        </div>

        {/* Goal Statement Box */}
        <div className="mb-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0d111a] via-[#090c14] to-[#160a12] border border-white/10 shadow-2xl relative">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
            <div className="w-8 h-8 rounded-lg bg-crimson-900/60 border border-crimson-500/40 flex items-center justify-center">
              <Rocket className="w-4 h-4 text-crimson-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-kanit">Vision & Commitment</h3>
              <p className="text-xs text-gray-400 font-mono">CONTINUOUS SELF-IMPROVEMENT</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-200 font-kanit text-base sm:text-lg leading-relaxed">
            <p className="border-l-4 border-crimson-500 pl-4 py-1">
              &ldquo;เป้าหมายของผมคือการพัฒนาตนเอง ให้มีความรู้และทักษะด้านวิศวกรรมและเทคโนโลยี เพื่อนำความรู้ไปสร้างนวัตกรรมที่สามารถใช้งานได้จริง&rdquo;
            </p>
            <p className="border-l-4 border-amber-500/60 pl-4 py-1 text-gray-300 text-sm sm:text-base">
              &ldquo;ผมเชื่อว่าการเรียนรู้และการพัฒนาตนเองอย่างต่อเนื่อง จะช่วยให้ผมสามารถเติบโต และก้าวสู่การเป็นวิศวกรที่มีคุณภาพในอนาคต&rdquo;
            </p>
          </div>
        </div>

        {/* Roadmap Cards */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white font-kanit text-center mb-8">
            Academic & Career Roadmap (2026 - 2030)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROADMAP_DATA.map((step, idx) => {
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0d111a]/90 border border-white/10 glass-panel-hover flex flex-col justify-between group relative"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-crimson-950 text-crimson-400 border border-crimson-500/30 text-xs font-mono font-bold">
                        {step.year}
                      </span>
                      <span className="text-xs font-mono text-gray-400">PHASE 0{idx + 1}</span>
                    </div>

                    <h4 className="text-base font-bold text-white font-kanit group-hover:text-crimson-400 transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-300 font-kanit leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Target Milestones</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
