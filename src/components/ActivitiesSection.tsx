'use client';

import React, { useState } from 'react';
import { ACTIVITIES_DATA, ActivityItem } from '../data/portfolioData';
import { Compass, Calendar, Building, Award, CheckCircle2, ChevronRight, Sparkles, Filter } from 'lucide-react';

export default function ActivitiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'International Conference', 'Bootcamp & Workshop', 'Academic Competition'];

  const filteredActivities = ACTIVITIES_DATA.filter(
    (act) => activeCategory === 'All' || act.category === activeCategory
  );

  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-[#07090e]/95">
      {/* Background Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid-crimson opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/80 border border-crimson-500/30 text-crimson-300 text-xs font-mono tracking-wider">
            <Compass className="w-3.5 h-3.5 text-crimson-400" />
            <span>SECTION 05</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-kanit tracking-tight">
            ACTIVITIES & <span className="text-crimson-500">EXPERIENCES</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson-700 to-crimson-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base font-kanit pt-2">
            กิจกรรมและการเข้าร่วมการประชุมวิชาการ ค่ายนวัตกรรม และการพัฒนาทักษะเชิงปฏิบัติการ
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-kanit transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-crimson-600 text-white shadow-lg shadow-crimson-900/40 border border-crimson-400 font-semibold'
                  : 'bg-[#0d111a] text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Component */}
        <div className="relative border-l-2 border-crimson-500/30 ml-4 sm:ml-8 md:ml-32 space-y-12 pb-6">
          {filteredActivities.map((act, idx) => {
            return (
              <div key={act.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot with Pulse */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-crimson-600 border-2 border-[#07090e] group-hover:scale-125 group-hover:bg-crimson-400 transition-all shadow-md shadow-crimson-500" />

                {/* Left Year Label for Desktop */}
                <div className="hidden md:block absolute -left-32 top-1 w-24 text-right">
                  <span className="text-xs font-mono font-bold text-crimson-400 bg-crimson-950/60 px-2 py-0.5 rounded border border-crimson-500/30">
                    {act.year}
                  </span>
                </div>

                {/* Main Card */}
                <div className="p-6 rounded-2xl bg-[#0d111a]/90 border border-white/10 glass-panel-hover relative space-y-4">
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-crimson-950 text-crimson-300 border border-crimson-500/30 text-[11px] font-mono font-medium">
                          {act.category}
                        </span>
                        <span className="md:hidden text-xs font-mono text-crimson-400 font-bold">
                          {act.year}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-500/30 text-[11px] font-kanit">
                          ★ {act.badge}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white font-kanit group-hover:text-crimson-400 transition-colors">
                        {act.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-crimson-400" />
                      <span>{act.date}</span>
                    </div>
                  </div>

                  {/* Organization and Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-kanit text-gray-300">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-crimson-400 flex-shrink-0" />
                      <span><strong>หน่วยงาน:</strong> {act.organization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span><strong>บทบาท:</strong> {act.role}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-200 font-kanit leading-relaxed">
                    {act.description}
                  </p>

                  {/* Highlight Box */}
                  <div className="p-3 rounded-xl bg-black/40 border-l-2 border-amber-400 text-xs font-kanit text-amber-200 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong>จุดเด่น:</strong> {act.highlight}</span>
                  </div>

                  {/* Engineering Impact */}
                  <div className="p-3 rounded-xl bg-crimson-950/30 border border-crimson-500/20 text-xs font-kanit text-gray-300 space-y-1">
                    <p className="font-bold text-crimson-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      คุณค่าและการนำไปใช้ในคณะวิศวกรรมศาสตร์:
                    </p>
                    <p className="leading-relaxed">{act.engineeringImpact}</p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
