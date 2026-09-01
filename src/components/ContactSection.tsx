'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, ExternalLink, Github, Facebook, Instagram, Globe, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const socialLinks = [
    {
      name: 'Email',
      value: PERSONAL_INFO.contact.email,
      href: `mailto:${PERSONAL_INFO.contact.email}`,
      icon: Mail,
      color: 'text-crimson-400',
      action: 'Email Me'
    },
    {
      name: 'GitHub',
      value: PERSONAL_INFO.contact.github,
      href: PERSONAL_INFO.contact.githubUrl,
      icon: Github,
      color: 'text-white',
      action: 'View Profile'
    },
    {
      name: 'Facebook',
      value: PERSONAL_INFO.contact.facebook,
      href: PERSONAL_INFO.contact.facebookUrl,
      icon: Facebook,
      color: 'text-blue-400',
      action: 'Connect'
    },
    {
      name: 'Instagram',
      value: PERSONAL_INFO.contact.instagram,
      href: PERSONAL_INFO.contact.instagramUrl,
      icon: Instagram,
      color: 'text-pink-400',
      action: 'Follow'
    },
    {
      name: 'Portfolio Web',
      value: PERSONAL_INFO.contact.website,
      href: '#hero',
      icon: Globe,
      color: 'text-emerald-400',
      action: 'Visit'
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-crimson-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/80 border border-crimson-500/30 text-crimson-300 text-xs font-mono tracking-wider">
            <Mail className="w-3.5 h-3.5 text-crimson-400" />
            <span>SECTION 09</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-kanit tracking-tight">
            LET&apos;S <span className="text-crimson-500">CONNECT</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson-700 to-crimson-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base font-kanit pt-2">
            ช่องทางการติดต่อ สำหรับคณะกรรมการคัดเลือก อาจารย์ และผู้ที่สนใจ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#0d111a]/95 border border-crimson-500/40 shadow-xl space-y-4 relative overflow-hidden tech-corner-top-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-crimson-300 uppercase tracking-wider">DIRECT EMAIL</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-300 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-crimson-950 border border-crimson-500/40 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-crimson-400" />
                </div>
                <div>
                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                    className="text-lg font-bold text-white hover:text-crimson-400 transition-colors font-kanit break-all"
                  >
                    {PERSONAL_INFO.contact.email}
                  </a>
                  <p className="text-xs text-gray-400 font-kanit">ติดต่อเพื่อการศึกษาและการสัมภาษณ์</p>
                </div>
              </div>
            </div>

            {/* Other Channels List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.slice(1).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl bg-[#0d111a]/80 hover:bg-[#131929] border border-white/10 hover:border-crimson-500/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-mono">{item.name}</p>
                        <p className="text-xs sm:text-sm font-bold text-white font-kanit group-hover:text-crimson-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* School Address Box */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3 text-xs text-gray-300 font-kanit">
              <MapPin className="w-5 h-5 text-crimson-400 flex-shrink-0" />
              <span>{PERSONAL_INFO.contact.location}</span>
            </div>

          </div>

          {/* Right Column: Quick Contact Message Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d111a]/95 border border-white/10 shadow-2xl space-y-4">
              
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white font-kanit flex items-center gap-2">
                  <Send className="w-4 h-4 text-crimson-400" />
                  ส่งข้อความติดต่อ (Send a Message)
                </h3>
                <p className="text-xs text-gray-400 font-kanit">
                  ส่งข้อความถึง นายณัฐพงษ์ ดวงรัตน์ โดยตรง
                </p>
              </div>

              {formSent ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <p className="text-base font-bold text-white font-kanit">ส่งข้อความสำเร็จ!</p>
                  <p className="text-xs text-gray-300 font-kanit">
                    ขอบพระคุณสำหรับข้อความ ระบบจะส่งต่อเข้าสู่อีเมลของข้าพเจ้าโดยเร็วที่สุดครับ
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">ชื่อผู้ติดต่อ / อาจารย์ / หน่วยงาน</label>
                    <input
                      type="text"
                      required
                      placeholder="เช่น อ. ดร. วิศวกรรมศาสตร์ สจล."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07090e] border border-white/10 text-white text-xs sm:text-sm font-kanit focus:border-crimson-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">อีเมลติดต่อกลับ</label>
                    <input
                      type="email"
                      required
                      placeholder="example@university.ac.th"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07090e] border border-white/10 text-white text-xs sm:text-sm font-kanit focus:border-crimson-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">ข้อความ / คำถามเพิ่มเติม</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="พิมพ์ข้อความที่นี่..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07090e] border border-white/10 text-white text-xs sm:text-sm font-kanit focus:border-crimson-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-crimson-700 via-crimson to-crimson-600 hover:from-crimson-600 hover:to-crimson-500 text-white font-kanit font-semibold text-sm border border-crimson-400/40 shadow-lg shadow-crimson-950/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>ส่งข้อความ (SEND MESSAGE)</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
