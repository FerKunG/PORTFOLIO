'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { getAssetPath } from '../utils/pathHelper';
import { FolderGit2, ExternalLink, Github, Sparkles, CheckCircle2, X, Layers, Cpu, Code2, ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & Web', 'Robotics & IoT', 'Academic & Research'];

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-crimson-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/80 border border-crimson-500/30 text-crimson-300 text-xs font-mono tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5 text-crimson-400" />
            <span>SECTION 04</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-kanit tracking-tight">
            MY <span className="text-crimson-500">PROJECTS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson-700 to-crimson-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base font-kanit pt-2">
            ผลงานการพัฒนา Web Application, ปัญญาประดิษฐ์ (AI) และโครงงานวิศวกรรมฮาร์ดแวร์
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

        {/* Featured Project Showcase: LNWMATH */}
        {filteredProjects.find(p => p.featured) && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e1320] via-[#090c14] to-[#150a10] border border-crimson-500/40 shadow-2xl relative overflow-hidden tech-corner-top-left tech-corner-bottom-right">
            
            {/* Ambient Red Neon Corner */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Info & Details */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-crimson-950 text-crimson-400 border border-crimson-500/40 text-xs font-mono font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    FEATURED PROJECT
                  </span>
                  <span className="text-xs font-mono text-gray-400">2025 - 2026</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-kanit tracking-tight">
                    LNWMATH
                  </h3>
                  <p className="text-sm font-medium text-crimson-400 font-kanit">
                    AI-Powered Mathematics Learning Platform & Step-by-Step Solver
                  </p>
                </div>

                <p className="text-gray-300 text-sm sm:text-base font-kanit leading-relaxed">
                  &ldquo;Web Application ที่พัฒนาขึ้นเพื่อช่วยในการเรียนรู้คณิตศาสตร์ โดยนำเทคโนโลยี Artificial Intelligence มาประยุกต์ใช้ในการช่วยอธิบายและสนับสนุนการเรียนรู้อย่างเป็นระบบ&rdquo;
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL / MySQL', 'AI'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-black/60 border border-crimson-500/30 text-gray-200 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setSelectedProject(PROJECTS_DATA[0])}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-crimson-700 to-crimson-600 hover:from-crimson-600 hover:to-crimson-500 text-white text-sm font-kanit font-semibold border border-crimson-400/40 shadow-lg shadow-crimson-950/40 hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm font-kanit border border-white/10 flex items-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(PROJECTS_DATA[0])}
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm font-kanit border border-white/10 flex items-center gap-2 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-crimson-400" />
                    <span>Demo Preview</span>
                  </button>
                </div>
              </div>

              {/* Right Column: High Quality Preview Image */}
              <div className="lg:col-span-6">
                <div
                  onClick={() => setSelectedProject(PROJECTS_DATA[0])}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-crimson-500/30 shadow-2xl cursor-pointer group bg-black/80"
                >
                  <Image
                    src={getAssetPath('/images/lnwmath_preview.jpg')}
                    alt="LNWMATH AI Platform UI"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-crimson-500/40 text-xs font-kanit text-white flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-crimson-400" />
                    <span>คลิกเพื่อดูรายละเอียดแบบเต็ม</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#0d111a]/90 border border-white/10 glass-panel-hover flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Thumbnail */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative aspect-video overflow-hidden cursor-pointer bg-black/50"
                  >
                    <Image
                      src={getAssetPath(project.imageUrl)}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-crimson-300">
                      {project.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white font-kanit group-hover:text-crimson-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-kanit line-clamp-1">{project.subtitle}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 font-kanit line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/5 text-gray-300 text-[11px] font-mono border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 px-4 rounded-xl bg-crimson-950/70 hover:bg-crimson-900/90 text-crimson-200 hover:text-white border border-crimson-500/30 text-xs sm:text-sm font-kanit font-medium flex items-center justify-center gap-2 transition-all"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d111a] border border-crimson-500/50 shadow-2xl p-6 sm:p-8 space-y-6 text-white">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="px-2.5 py-1 rounded bg-crimson-950 text-crimson-400 border border-crimson-500/30 text-xs font-mono">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-kanit mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-kanit">{selectedProject.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src={getAssetPath(selectedProject.imageUrl)}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Detailed Description */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-crimson-400 font-kanit flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                รายละเอียดโครงการ (Project Overview)
              </h4>
              <p className="text-sm text-gray-200 font-kanit leading-relaxed">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-crimson-400 font-kanit flex items-center gap-2">
                <Layers className="w-4 h-4" />
                ฟีเจอร์เด่นของระบบ (Key Features)
              </h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 font-kanit">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Takeaways */}
            <div className="p-4 rounded-xl bg-crimson-950/40 border border-crimson-500/30 space-y-1.5">
              <h4 className="text-xs sm:text-sm font-bold text-amber-400 font-kanit flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                ความเชื่อมโยงกับทักษะวิศวกรรม (Engineering Takeaways)
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 font-kanit leading-relaxed">
                {selectedProject.engineeringTakeaways}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-gray-400 uppercase">TECH STACK & TOOLS</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-black/60 border border-crimson-500/30 text-gray-200 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
              <a
                href={selectedProject.githubUrl || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-kanit border border-white/10 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white text-xs sm:text-sm font-kanit font-semibold"
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
