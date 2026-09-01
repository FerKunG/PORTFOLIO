'use client';

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Cpu, ArrowUp, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060a] border-t border-white/10 text-white relative overflow-hidden py-14">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-crimson-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Brand & Faculty Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-crimson-700 to-crimson-900 border border-crimson-400/40 flex items-center justify-center shadow-lg shadow-crimson-950/50">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-wider font-kanit">
                  {PERSONAL_INFO.nameEn}
                </h3>
                <p className="text-xs text-crimson-400 font-kanit font-medium">
                  {PERSONAL_INFO.nameTh} ({PERSONAL_INFO.nickname})
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-mono pt-1">
              PORTFOLIO FOR ENGINEERING FACULTY
            </p>
            <p className="text-xs font-semibold text-gray-200 font-kanit">
              KING MONGKUT&apos;S INSTITUTE OF TECHNOLOGY LADKRABANG (KMITL)
            </p>
          </div>

          {/* SMT School Badge & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="px-3.5 py-1.5 rounded-lg bg-crimson-950/70 border border-crimson-500/30 text-xs font-mono text-crimson-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SMT QUALITY CLASSROOM • KKRS</span>
            </div>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-kanit text-gray-300 hover:text-white flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>กลับสู่ด้านบนสุด</span>
              <ArrowUp className="w-4 h-4 text-crimson-400" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono text-center sm:text-left">
          <p>© 2026 ALL RIGHTS RESERVED • NATTHAPHONG DUANGRAT</p>
          <p className="text-gray-400 font-kanit">
            โรงเรียนคลองขลุงราษฎร์รังสรรค์ จ.กำแพงเพชร
          </p>
        </div>

      </div>
    </footer>
  );
}
