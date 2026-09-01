'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { CertificateItem } from '../data/portfolioData';
import { PRESET_CERTIFICATES, analyzeCertificateImage, generateDescriptions, AnalysisResult } from '../utils/aiAnalyzer';
import { getAssetPath } from '../utils/pathHelper';
import {
  Sparkles,
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertTriangle,
  RotateCw,
  Plus,
  X,
  Star,
  Cpu,
  Layers,
  ShieldCheck,
  Tag,
  Wrench,
  HelpCircle,
  Eye,
  Sliders
} from 'lucide-react';

interface AiCertificateAnalyzerProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCertificate: (cert: CertificateItem) => void;
}

export default function AiCertificateAnalyzer({
  isOpen,
  onClose,
  onAddCertificate
}: AiCertificateAnalyzerProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisStep, setAnalysisStep] = useState<string>('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [activeTone, setActiveTone] = useState<'Formal' | 'Professional' | 'Engineering Focus' | 'Academic'>('Engineering Focus');
  const [isAdded, setIsAdded] = useState<boolean>(false);

  // Editable form fields
  const [formTitle, setFormTitle] = useState('');
  const [formAchievement, setFormAchievement] = useState('');
  const [formOrg, setFormOrg] = useState('');
  const [formYear, setFormYear] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formSkills, setFormSkills] = useState('');
  const [formShortDesc, setFormShortDesc] = useState('');
  const [formPortfolioDesc, setFormPortfolioDesc] = useState('');
  const [formEngConnection, setFormEngConnection] = useState('');
  const [formRanking, setFormRanking] = useState<'Highly Relevant' | 'Relevant' | 'Supporting'>('Highly Relevant');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  // Process analysis
  const handleAnalyze = async (fileOrPreset: File | { presetId: string }, imageSrc: string) => {
    setIsAnalyzing(true);
    setResult(null);
    setIsAdded(false);

    setAnalysisStep('STEP 1: OCR & Text Extraction กำลังอ่านข้อความและโครงสร้างเกียรติบัตร...');
    await new Promise(r => setTimeout(r, 600));

    setAnalysisStep('STEP 2: AI Multi-Skill & Category Analysis กำลังจำแนกหมวดหมู่วิศวกรรม...');
    await new Promise(r => setTimeout(r, 600));

    setAnalysisStep('STEP 3: Generating Descriptions & Engineering Connections...');
    await new Promise(r => setTimeout(r, 600));

    const analysis = await analyzeCertificateImage(fileOrPreset, activeTone);

    setResult(analysis);
    setFormTitle(analysis.title);
    setFormAchievement(analysis.achievement);
    setFormOrg(analysis.organization);
    setFormYear(analysis.year);
    setFormCategory(analysis.category);
    setFormSkills(analysis.skills.join(', '));
    setFormShortDesc(analysis.short_description);
    setFormPortfolioDesc(analysis.portfolio_description);
    setFormEngConnection(analysis.engineering_connection);
    setFormRanking(analysis.ranking);

    setIsAnalyzing(false);
  };

  // Handle Preset 1-Click test
  const handleSelectPreset = (presetId: string) => {
    const preset = PRESET_CERTIFICATES.find(p => p.id === presetId);
    if (!preset) return;
    setPreviewUrl(preset.image);
    setSelectedFile(null);
    handleAnalyze({ presetId }, preset.image);
  };

  // Handle User File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    handleAnalyze(file, objectUrl);
  };

  // Regenerate Description with selected tone
  const handleRegenerateTone = (tone: 'Formal' | 'Professional' | 'Engineering Focus' | 'Academic') => {
    setActiveTone(tone);
    const skillsList = formSkills.split(',').map(s => s.trim()).filter(Boolean);
    const updated = generateDescriptions(
      {
        title: formTitle,
        achievement: formAchievement,
        organization: formOrg,
        year: formYear,
        category: formCategory,
        skills: skillsList.length ? skillsList : ['Engineering', 'Technology', 'Problem Solving'],
      },
      tone
    );

    setFormShortDesc(updated.shortDesc);
    setFormPortfolioDesc(updated.portfolioDesc);
    setFormEngConnection(updated.engConnection);
  };

  // Add to Portfolio action
  const handleAddToPortfolio = () => {
    const newCert: CertificateItem = {
      id: `cert-ai-${Date.now()}`,
      image: previewUrl || '/certificates/cert_kpru_international_conference.jpg',
      file_url: previewUrl || '/certificates/cert_kpru_international_conference.jpg',
      title: formTitle || 'เกียรติบัตรที่วิเคราะห์ด้วย AI',
      achievement: formAchievement || 'Certificate of Achievement',
      organization: formOrg || 'สถาบันการศึกษา / องค์กร',
      date: result?.date || 'ปีการศึกษา 2568',
      year: formYear || '2026',
      category: formCategory || 'Technology & Web Development',
      ranking: formRanking,
      skills: formSkills.split(',').map(s => s.trim()).filter(Boolean),
      short_description: formShortDesc,
      portfolio_description: formPortfolioDesc,
      engineering_connection: formEngConnection,
      ai_confidence: result?.ai_confidence || 0.95,
      status: 'Verified',
      created_at: new Date().toISOString(),
      recommendedForPortfolio: formRanking === 'Highly Relevant'
    };

    onAddCertificate(newCert);
    setIsAdded(true);

    // Trigger celebration confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-5xl max-h-[94vh] overflow-y-auto rounded-3xl bg-[#090c13] border border-crimson-500/50 shadow-2xl p-6 sm:p-8 space-y-6 text-white tech-corner-top-left tech-corner-bottom-right">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-950 border border-crimson-500/40 text-crimson-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>AI VISION & OCR CERTIFICATE ANALYZER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-kanit">
              ระบบวิเคราะห์เกียรติบัตรอัจฉริยะ (AI Certificate Analyzer)
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-kanit">
              ตรวจจับข้อความ OCR, จำแนกทักษะ, เชื่อมโยงสู่หลักสูตรวิศวกรรมศาสตร์ สจล. และเพิ่มเข้าพอร์ตโฟลิโออัตโนมัติ
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Upload & Quick Preset Selection Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Drag & Drop Zone */}
          <div className="lg:col-span-6 space-y-3">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-crimson-500/40 hover:border-crimson-400/80 rounded-2xl p-6 sm:p-8 text-center bg-[#0d111a]/70 hover:bg-[#121724] transition-all cursor-pointer group relative overflow-hidden"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,application/pdf"
                className="hidden"
                onChange={handleFileUpload}
              />

              <div className="w-14 h-14 rounded-2xl bg-crimson-950/80 border border-crimson-500/40 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-7 h-7 text-crimson-400" />
              </div>

              <h3 className="text-base font-bold text-white font-kanit mb-1">
                Upload Your Certificate
              </h3>
              <p className="text-xs text-gray-400 font-kanit mb-3">
                ลากไฟล์มาวางที่นี่ หรือคลิกเพื่อเลือกไฟล์ (รองรับ JPG / PNG / PDF)
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/60 border border-white/10 text-[11px] font-mono text-gray-300">
                <span>AI Vision OCR Enabled</span>
              </div>
            </div>
          </div>

          {/* Right: 1-Click Instant Test Presets (User's 5 Real Certificates) */}
          <div className="lg:col-span-6 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-crimson-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                ทดสอบแบบ 1-Click (เกียรติบัตรจริง 5 รายการของผู้สมัคร)
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {PRESET_CERTIFICATES.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset.id)}
                  className="p-2.5 rounded-xl bg-[#0d111a] hover:bg-[#141b2c] border border-white/10 hover:border-crimson-500/40 text-left transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-crimson-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-kanit group-hover:text-crimson-400 transition-colors">
                        {preset.name}
                      </p>
                      <p className="text-[11px] text-gray-400 font-kanit line-clamp-1">
                        {preset.previewText}
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-crimson-950/80 text-crimson-300 border border-crimson-500/30 text-[10px] font-mono whitespace-nowrap">
                    วิเคราะห์ทันที →
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Loading Progress State */}
        {isAnalyzing && (
          <div className="p-6 rounded-2xl bg-crimson-950/40 border border-crimson-500/40 text-center space-y-3 animate-pulse">
            <div className="w-10 h-10 border-3 border-crimson-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-base font-bold text-white font-kanit">AI is analyzing your certificate...</p>
            <p className="text-xs font-mono text-crimson-300">{analysisStep}</p>
          </div>
        )}

        {/* Analysis Result Split View */}
        {result && !isAnalyzing && (
          <div className="pt-4 border-t border-white/10 space-y-6">
            
            {/* Split Screen Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Image Preview + OCR Raw Output */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-black/90 shadow-2xl">
                  {previewUrl ? (
                    <Image
                      src={getAssetPath(previewUrl)}
                      alt="Analyzed Certificate"
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 font-mono text-xs">
                      No Preview
                    </div>
                  )}

                  {/* Ranking Tag Overlay */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500 text-black text-xs font-kanit font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{formRanking}</span>
                  </div>
                </div>

                {/* AI Confidence & Status Indicator */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs font-kanit">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">ระดับความมั่นใจของ AI:</span>
                    <span className="font-mono font-bold text-emerald-400">
                      {(result.ai_confidence * 100).toFixed(0)}% ({result.status})
                    </span>
                  </div>
                  {result.status === 'Needs Review' && (
                    <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-500/40 text-amber-300 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>ไม่สามารถระบุข้อมูลบางส่วนได้ชัดเจน กรุณาตรวจสอบและแก้ไขข้อมูลในช่องด้านขวา</span>
                    </div>
                  )}
                </div>

                {/* Raw OCR Text Toggle Box */}
                <div className="p-3 rounded-xl bg-[#06080e] border border-white/5 space-y-1.5">
                  <p className="text-[11px] font-mono text-gray-400 uppercase">OCR RAW EXTRACTION LOG</p>
                  <pre className="text-[10px] text-gray-300 font-mono whitespace-pre-wrap max-h-28 overflow-y-auto bg-black/60 p-2 rounded">
                    {result.ocrRawText}
                  </pre>
                </div>
              </div>

              {/* Right Column: Editable Fields & AI Generation Form */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Ranking Level & Category Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">หมวดหมู่ผลงาน (CATEGORY)</label>
                    <input
                      type="text"
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0d111a] border border-white/10 text-white text-xs sm:text-sm font-kanit focus:border-crimson-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">AI RANKING FOR ENGINEERING</label>
                    <select
                      value={formRanking}
                      onChange={(e) => setFormRanking(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0d111a] border border-white/10 text-amber-300 text-xs sm:text-sm font-kanit focus:border-crimson-500 focus:outline-none"
                    >
                      <option value="Highly Relevant">Highly Relevant (แนะนำอย่างยิ่งสำหรับพอร์ตฯ)</option>
                      <option value="Relevant">Relevant (เกี่ยวข้องและส่งเสริมศักยภาพ)</option>
                      <option value="Supporting">Supporting (กิจกรรมสนับสนุนทั่วไป)</option>
                    </select>
                  </div>
                </div>

                {/* Title & Achievement */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">ชื่อกิจกรรมหรือการแข่งขัน (TITLE)</label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0d111a] border border-white/10 text-white text-xs sm:text-sm font-kanit focus:border-crimson-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">รางวัล / ผลการเรียน (ACHIEVEMENT)</label>
                    <input
                      type="text"
                      value={formAchievement}
                      onChange={(e) => setFormAchievement(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0d111a] border border-white/10 text-white text-xs sm:text-sm font-kanit focus:border-crimson-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">หน่วยงานที่จัด / สถาบัน (ORGANIZATION)</label>
                    <input
                      type="text"
                      value={formOrg}
                      onChange={(e) => setFormOrg(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0d111a] border border-white/10 text-white text-xs sm:text-sm font-kanit focus:border-crimson-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Skills Developed */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">ทักษะที่ได้รับ (SKILLS DEVELOPED - คั่นด้วยจุลภาค)</label>
                  <input
                    type="text"
                    value={formSkills}
                    onChange={(e) => setFormSkills(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0d111a] border border-white/10 text-white text-xs sm:text-sm font-kanit focus:border-crimson-500 focus:outline-none"
                  />
                </div>

                {/* Tone Selector & Regenerate Button */}
                <div className="p-3.5 rounded-xl bg-crimson-950/30 border border-crimson-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-crimson-400" />
                      ปรับโทนภาษาของคำอธิบาย (AI Description Tone):
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(['Engineering Focus', 'Professional', 'Formal', 'Academic'] as const).map((tone) => (
                      <button
                        key={tone}
                        type="button"
                        onClick={() => handleRegenerateTone(tone)}
                        className={`px-3 py-1 rounded-lg text-xs font-kanit transition-all flex items-center gap-1 ${
                          activeTone === tone
                            ? 'bg-crimson-600 text-white font-bold shadow-md'
                            : 'bg-black/50 text-gray-400 hover:text-white border border-white/10'
                        }`}
                      >
                        <RotateCw className="w-3 h-3" />
                        <span>{tone}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 1. Short Description */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">
                    1. SHORT DESCRIPTION (1-2 ประโยคสำหรับแสดงใต้รูป):
                  </label>
                  <textarea
                    rows={2}
                    value={formShortDesc}
                    onChange={(e) => setFormShortDesc(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0d111a] border border-white/10 text-white text-xs font-kanit focus:border-crimson-500 focus:outline-none"
                  />
                </div>

                {/* 2. Portfolio Description */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">
                    2. PORTFOLIO DESCRIPTION (1 ย่อหน้าสำหรับพอร์ตฯ มหาวิทยาลัย):
                  </label>
                  <textarea
                    rows={3}
                    value={formPortfolioDesc}
                    onChange={(e) => setFormPortfolioDesc(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0d111a] border border-white/10 text-white text-xs font-kanit focus:border-crimson-500 focus:outline-none"
                  />
                </div>

                {/* 3. Engineering Connection */}
                <div>
                  <label className="block text-xs font-mono text-crimson-400 font-bold mb-1">
                    3. ENGINEERING CONNECTION (ความเชื่อมโยงกับคณะวิศวกรรมศาสตร์):
                  </label>
                  <textarea
                    rows={2}
                    value={formEngConnection}
                    onChange={(e) => setFormEngConnection(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-crimson-950/40 border border-crimson-500/40 text-white text-xs font-kanit focus:border-crimson-400 focus:outline-none"
                  />
                </div>

              </div>

            </div>

            {/* Bottom Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs text-gray-400 font-kanit">
                {isAdded ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    เพิ่มเกียรติบัตรเข้าพอร์ตโฟลิโอเรียบร้อยแล้ว!
                  </span>
                ) : (
                  <span>สามารถแก้ไขข้อมูลทุกส่วนได้ตามต้องการก่อนกดยืนยัน</span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs sm:text-sm font-kanit border border-white/10"
                >
                  ยกเลิก
                </button>

                <button
                  type="button"
                  onClick={handleAddToPortfolio}
                  disabled={isAdded}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-crimson-700 via-crimson to-crimson-600 hover:from-crimson-600 hover:to-crimson-500 text-white text-xs sm:text-sm font-kanit font-bold border border-crimson-400/50 shadow-xl shadow-crimson-950/40 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>ADD TO PORTFOLIO (เพิ่มเข้าพอร์ตโฟลิโอ)</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
