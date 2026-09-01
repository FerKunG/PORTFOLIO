'use client';

import React, { useState } from 'react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';
import { Wrench, Code2, Cpu, Laptop, Layers, Sparkles, CheckCircle2, Search, Zap } from 'lucide-react';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Programming', 'Technology & AI', 'Tools & Design', 'Engineering & Hard Skills'];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#06080e]/90">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-crimson-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/80 border border-crimson-500/30 text-crimson-300 text-xs font-mono tracking-wider">
            <Wrench className="w-3.5 h-3.5 text-crimson-400" />
            <span>SECTION 03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-kanit tracking-tight">
            MY <span className="text-crimson-500">SKILLS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson-700 to-crimson-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base font-kanit pt-2">
            ทักษะความสามารถด้านการเขียนโปรแกรม เทคโนโลยี เครื่องมือ และกระบวนการคิดเชิงวิศวกรรม
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-kanit transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-crimson-600 text-white shadow-lg shadow-crimson-900/40 border border-crimson-400 font-semibold'
                    : 'bg-[#0d111a] text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ค้นหาทักษะ (เช่น AI, PHP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0d111a] border border-white/10 text-white text-xs sm:text-sm font-kanit placeholder-gray-500 focus:outline-none focus:border-crimson-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => {
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0d111a]/90 border border-white/10 glass-panel-hover group relative overflow-hidden"
              >
                {/* Highlight banner if primary skill */}
                {skill.highlight && (
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-crimson-600/30 rotate-45 border-b border-crimson-400/50" />
                )}

                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-crimson-950 to-navy-800 border border-crimson-500/30 flex items-center justify-center text-crimson-400 group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5 text-crimson-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-kanit group-hover:text-crimson-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-gray-400">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold font-mono text-crimson-400">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/5 rounded-full h-2 mb-3 overflow-hidden border border-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-crimson-800 via-crimson to-crimson-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-gray-300 font-kanit mb-3 leading-relaxed">
                  {skill.description}
                </p>

                {/* Footer Tag: Projects applied */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>นำไปใช้ในโครงการ</span>
                  <span className="px-2 py-0.5 rounded bg-crimson-950/80 text-crimson-300 border border-crimson-500/20">
                    {skill.projectsCount} Projects
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Skill Frameworks Badge Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-crimson-950/40 via-[#0d111a] to-navy-900/40 border border-white/10 text-center space-y-3">
          <p className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-widest">
            CORE TECH STACK FOR KMITL ENGINEERING
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {['HTML5', 'CSS3 / Tailwind', 'JavaScript (ES6+)', 'PHP Backend', 'MySQL Database', 'AI Prompt Engineering', 'ESP32 / IoT', 'Git & GitHub', 'Figma Prototyping', 'Calculus & Physics'].map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-black/50 border border-crimson-500/20 text-gray-200 text-xs font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
