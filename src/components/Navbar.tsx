'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Cpu, ChevronRight, User, FolderGit2, Award, Wrench, Mail, Compass, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenAiAnalyzer: () => void;
}

export default function Navbar({ onOpenAiAnalyzer }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'projects', 'activities', 'certificates', 'why-engineering', 'future-goal', 'ai-analyzer', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'หน้าแรก', icon: Cpu },
    { id: 'about', label: 'เกี่ยวกับฉัน', icon: User },
    { id: 'skills', label: 'ทักษะ', icon: Wrench },
    { id: 'projects', label: 'ผลงาน', icon: FolderGit2 },
    { id: 'activities', label: 'กิจกรรม', icon: Compass },
    { id: 'certificates', label: 'เกียรติบัตร', icon: Award },
    { id: 'why-engineering', label: 'วิศวกรรมศาสตร์', icon: Target },
    { id: 'contact', label: 'ติดต่อ', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-crimson-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-crimson-700 via-crimson to-crimson-900 flex items-center justify-center border border-crimson-400/30 shadow-lg shadow-crimson/30 group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-crimson-400 transition-colors font-kanit">
                NATTHAPHONG
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-mono tracking-widest bg-crimson-950/80 text-crimson-300 border border-crimson-500/30 rounded">
                KMITL ENG
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-kanit">วิศวกรรมศาสตร์ สจล. | ม.6/6</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-kanit transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-crimson-900/40 border border-crimson-500/40 shadow-sm shadow-crimson/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: AI Certificate Analyzer */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAiAnalyzer}
            className="relative group px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-crimson-800 to-crimson-600 hover:from-crimson-700 hover:to-crimson-500 text-white text-xs sm:text-sm font-kanit font-medium border border-crimson-400/40 shadow-lg shadow-crimson/30 hover:shadow-crimson/50 hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>AI Cert Analyzer</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-300"></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenAiAnalyzer}
            className="p-2 rounded-lg bg-crimson-950/80 border border-crimson-500/40 text-crimson-300 text-xs font-kanit flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>AI</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-kanit ${
                    isActive
                      ? 'bg-crimson-900/50 text-white border border-crimson-500/40'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 text-crimson-400" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiAnalyzer();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-crimson-800 to-crimson-600 text-white font-kanit text-sm flex items-center justify-center gap-2 shadow-lg shadow-crimson/30"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>เปิดระบบ AI Certificate Analyzer</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
