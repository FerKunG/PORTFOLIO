import type { Metadata } from 'next';
import { Kanit, Inter } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-kanit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | นายณัฐพงษ์ ดวงรัตน์ (แสตมป์) - คณะวิศวกรรมศาสตร์ สจล. (KMITL)',
  description: 'Portfolio ส่วนตัวสำหรับนักเรียนชั้นมัธยมศึกษาปีที่ 6 โรงเรียนคลองขลุงราษฎร์รังสรรค์ เพื่อใช้ยื่นสมัครเข้าศึกษาต่อคณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL) พร้อมระบบ AI Certificate Analyzer',
  keywords: [
    'Portfolio วิศวกรรมศาสตร์',
    'นายณัฐพงษ์ ดวงรัตน์',
    'แสตมป์ ณัฐพงษ์',
    'วิศวะ ลาดกระบัง',
    'KMITL Engineering',
    'โรงเรียนคลองขลุงราษฎร์รังสรรค์',
    'SMT KKRS',
    'LNWMATH',
    'AI Certificate Analyzer',
    'Web Application Developer'
  ],
  authors: [{ name: 'นายณัฐพงษ์ ดวงรัตน์ (Natthaphong Duangrat)' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07090e',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${kanit.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#07090e] text-white font-kanit antialiased selection:bg-crimson-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
