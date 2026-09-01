export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Web' | 'Robotics & IoT' | 'Academic & Research';
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  engineeringTakeaways: string;
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  year: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  year: string;
  date: string;
  category: 'International Conference' | 'Bootcamp & Workshop' | 'Academic Competition' | 'School & Leadership';
  description: string;
  highlight: string;
  engineeringImpact: string;
  imageUrl?: string;
  badge: string;
}

export interface CertificateItem {
  id: string;
  image: string;
  file_url: string;
  title: string;
  achievement: string;
  organization: string;
  date: string;
  year: string;
  category: string;
  ranking: 'Highly Relevant' | 'Relevant' | 'Supporting';
  skills: string[];
  short_description: string;
  portfolio_description: string;
  engineering_connection: string;
  ai_confidence: number;
  status: 'Verified' | 'Needs Review';
  created_at: string;
  recommendedForPortfolio?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Technology & AI' | 'Tools & Design' | 'Engineering & Hard Skills';
  level: number; // 1-100
  icon: string;
  description: string;
  projectsCount: number;
  highlight?: boolean;
}

export const PERSONAL_INFO = {
  nameTh: "นายณัฐพงษ์ ดวงรัตน์",
  nameEn: "NATTHAPHONG DUANGRAT",
  nickname: "แสตมป์ (Stamp)",
  title: "Future Engineer | Technology | Innovation | AI",
  education: "นักเรียนชั้นมัธยมศึกษาปีที่ 6/6 (ห้องเรียนคุณภาพ SMT)",
  school: "โรงเรียนคลองขลุงราษฎร์รังสรรค์",
  province: "กำแพงเพชร",
  targetFaculty: "คณะวิศวกรรมศาสตร์",
  targetUniversity: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL)",
  gpax: "3.91 (SMT Quality Classroom)",
  bio: `ผมมีความสนใจด้านวิศวกรรม เทคโนโลยี การเขียนโปรแกรม และการพัฒนา Web Application ผมชื่นชอบการนำความรู้มาประยุกต์ใช้เพื่อสร้างนวัตกรรม และแก้ไขปัญหาในชีวิตจริง

ผมมีความสนใจในการพัฒนาเว็บไซต์ การเขียนโปรแกรม และเทคโนโลยีปัญญาประดิษฐ์ โดยมีเป้าหมายที่จะศึกษาต่อและพัฒนาตนเอง สู่การเป็นวิศวกรในอนาคตที่มีคุณภาพและสร้างสรรค์คุณประโยชน์ให้แก่สังคม`,
  whyEngineering: `ผมสนใจในศาสตร์ของวิศวกรรม เพราะวิศวกรรมเป็นศาสตร์ที่นำความรู้ด้านวิทยาศาสตร์ คณิตศาสตร์ และเทคโนโลยีมาประยุกต์ใช้ เพื่อแก้ไขปัญหาและสร้างสรรค์สิ่งใหม่ ๆ 

ผมต้องการพัฒนาความรู้ด้านเทคโนโลยี และนำความสามารถไปสร้างนวัตกรรม ที่สามารถช่วยแก้ไขปัญหาและสร้างประโยชน์ให้กับสังคม โดยเฉพาะการศึกษาต่อที่คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL) ซึ่งเป็นสถาบันชั้นนำระดับประเทศที่มีสภาพแวดล้อมและหลักสูตรที่ผลักดันศักยภาพด้านวิศวกรรมอย่างแท้จริง`,
  futureGoal: `เป้าหมายของผมคือการพัฒนาตนเอง ให้มีความรู้และทักษะด้านวิศวกรรมและเทคโนโลยี เพื่อนำความรู้ไปสร้างนวัตกรรมที่สามารถใช้งานได้จริง

ผมเชื่อว่าการเรียนรู้และการพัฒนาตนเองอย่างต่อเนื่อง จะช่วยให้ผมสามารถเติบโต และก้าวสู่การเป็นวิศวกรที่มีคุณภาพในอนาคต พร้อมรับมือกับการเปลี่ยนแปลงทางเทคโนโลยีในยุค AI และนำความรู้ไปต่อยอดสร้างสรรค์ประโยชน์ให้แก่ประเทศชาติ`,
  contact: {
    email: "natthaphong.duangrat@gmail.com",
    phone: "098-XXX-XXXX",
    facebook: "Natthaphong Duangrat",
    facebookUrl: "https://facebook.com",
    instagram: "@stamp_natthaphong",
    instagramUrl: "https://instagram.com",
    github: "github.com/natthaphong-eng",
    githubUrl: "https://github.com",
    website: "natthaphong-portfolio.kmitl.ac.th",
    location: "โรงเรียนคลองขลุงราษฎร์รังสรรค์ อ.คลองขลุง จ.กำแพงเพชร",
  }
};

export const INITIAL_CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-kpru-2026",
    image: "/certificates/cert_kpru_international_conference.jpg",
    file_url: "/certificates/cert_kpru_international_conference.jpg",
    title: "The 3rd KPRU International Research Conference on Science, Mathematics and Technology",
    achievement: "Oral Presentation Presenter (Certificate of Achievement)",
    organization: "Faculty of Science and Technology, Kamphaeng Phet Rajabhat University in collaboration with PTTEP and Georgia Gwinnett College",
    date: "27 มิถุนายน 2569 (27 June 2026)",
    year: "2026",
    category: "Academic & Research Conference",
    ranking: "Highly Relevant",
    skills: ["Research & Data Analysis", "Oral Presentation", "Science & Mathematics", "Technology Application", "English Communication", "Team Collaboration"],
    short_description: "เกียรติบัตรการนำเสนอผลงานวิจัยแบบบรรยาย (Oral Presentation) ในการประชุมวิชาการระดับนานาชาติ The 3rd KPRU International Research Conference",
    portfolio_description: "ได้รับคัดเลือกให้นำเสนอผลงานวิจัยแบบบรรยาย (Oral Presentation) ในงานประชุมวิชาการระดับนานาชาติ The 3rd KPRU International Research Conference on Science, Mathematics and Technology ซึ่งร่วมจัดโดยคณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏกำแพงเพชร ร่วมกับ บมจ.ปตท.สผ. (PTTEP) และ Georgia Gwinnett College ประเทศสหรัฐอเมริกา โดยได้แสดงศักยภาพในการค้นคว้า วิจัย วิเคราะห์ข้อมูล และสื่อสารทางวิชาการได้อย่างเป็นมืออาชีพ",
    engineering_connection: "สะท้อนถึงทักษะการทำวิจัย การคิดเชิงวิเคราะห์ (Analytical Thinking) และการสังเคราะห์องค์ความรู้ด้านวิทยาศาสตร์และเทคโนโลยี ซึ่งเป็นหัวใจสำคัญของวิศวกรในการค้นคว้า พัฒนานวัตกรรม และถ่ายทอดแนวคิดทางวิศวกรรมสู่สากล",
    ai_confidence: 0.98,
    status: "Verified",
    created_at: "2026-06-27T00:00:00.000Z",
    recommendedForPortfolio: true
  },
  {
    id: "cert-gpa-391-m5",
    image: "/certificates/cert_gpa_391_m5_term2.jpg",
    file_url: "/certificates/cert_gpa_391_m5_term2.jpg",
    title: "ผลการเรียนระดับดีเยี่ยม เกรดเฉลี่ย 3.91 ภาคเรียนที่ 2 ปีการศึกษา 2568",
    achievement: "ผลการเรียนระดับดีเยี่ยม (GPA 3.91)",
    organization: "โรงเรียนคลองขลุงราษฎร์รังสรรค์ (ห้องเรียนคุณภาพ SMT)",
    date: "23 พฤษภาคม 2569",
    year: "2569 / 2026",
    category: "Academic Excellence",
    ranking: "Highly Relevant",
    skills: ["Mathematics", "Physics", "Science & Technology", "Discipline & Consistency", "Analytical Thinking"],
    short_description: "เกียรติบัตรผลการเรียนระดับดีเยี่ยม เกรดเฉลี่ย 3.91 ภาคเรียนที่ 2/2568 ประเภทห้องเรียนคุณภาพ วิทยาศาสตร์-คณิตศาสตร์-เทคโนโลยี (SMT)",
    portfolio_description: "ได้รับเกียรติบัตรแสดงผลการเรียนระดับดีเยี่ยม เกรดเฉลี่ย 3.91 ในภาคเรียนที่ 2 ปีการศึกษา 2568 แผนการเรียนห้องเรียนคุณภาพ SMT (Science, Mathematics, and Technology) โรงเรียนคลองขลุงราษฎร์รังสรรค์ ยืนยันถึงความมุ่งมั่น ความรับผิดชอบ และความพร้อมทางวิชาการระดับสูงอย่างต่อเนื่อง",
    engineering_connection: "พื้นฐานคณิตศาสตร์และวิทยาศาสตร์ที่แข็งแกร่งเป็นรากฐานสำคัญสำหรับการศึกษาวิศวกรรมศาสตร์ในระดับมหาวิทยาลัย เพื่อใช้คำนวณ วิเคราะห์โครงสร้าง และประมวลผลระบบทางวิศวกรรมที่ซับซ้อน",
    ai_confidence: 0.99,
    status: "Verified",
    created_at: "2026-05-23T00:00:00.000Z",
    recommendedForPortfolio: true
  },
  {
    id: "cert-gpa-394-m5-term1",
    image: "/certificates/cert_gpa_394_m5_term1.jpg",
    file_url: "/certificates/cert_gpa_394_m5_term1.jpg",
    title: "ผลการเรียนระดับดีเยี่ยม เกรดเฉลี่ย 3.94 ภาคเรียนที่ 1 ปีการศึกษา 2568",
    achievement: "ผลการเรียนระดับดีเยี่ยม (GPA 3.94)",
    organization: "โรงเรียนคลองขลุงราษฎร์รังสรรค์ (ห้องเรียนคุณภาพ SMT)",
    date: "22 พฤศจิกายน 2568",
    year: "2568 / 2025",
    category: "Academic Excellence",
    ranking: "Highly Relevant",
    skills: ["Mathematics Mastery", "Advanced Science", "Problem Solving", "Time Management"],
    short_description: "เกียรติบัตรผลการเรียนระดับยอดเยี่ยม เกรดเฉลี่ย 3.94 แผนการเรียนห้องเรียนคุณภาพ SMT ม.5/6",
    portfolio_description: "ได้รับเกียรติบัตรผลการเรียนยอดเยี่ยม เกรดเฉลี่ย 3.94 ประจำภาคเรียนที่ 1 ปีการศึกษา 2568 ในโครงการห้องเรียนคุณภาพ SMT โรงเรียนคลองขลุงราษฎร์รังสรรค์ แสดงถึงความมุ่งมั่นทุ่มเทในการศึกษาและรักษามาตรฐานทางวิชาการในระดับสูงสุด",
    engineering_connection: "การมีผลการเรียนที่โดดเด่นในกลุ่มวิชา STEM แสดงถึงศักยภาพการเรียนรู้ที่รวดเร็ว ความสามารถในการเข้าใจทฤษฎีเชิงลึก ซึ่งจำเป็นต่อหลักสูตรวิศวกรรมศาสตร์ สจล.",
    ai_confidence: 0.99,
    status: "Verified",
    created_at: "2025-11-22T00:00:00.000Z",
    recommendedForPortfolio: true
  },
  {
    id: "cert-hamster-hub-port69",
    image: "/certificates/cert_hamster_hub_port69.jpg",
    file_url: "/certificates/cert_hamster_hub_port69.jpg",
    title: "Certificate of Participation - Port 69 Season 2",
    achievement: "Participant & Technology Workshop Graduate",
    organization: "HAMSTER HUB",
    date: "19 - 21 เมษายน 2568 (19 - 21 April 2025)",
    year: "2025",
    category: "Technology & Web Development",
    ranking: "Highly Relevant",
    skills: ["Web Development", "UI/UX Design", "Project Architecture", "Software Engineering Concepts", "Teamwork"],
    short_description: "เกียรติบัตรเข้าร่วมการอบรมเชิงปฏิบัติการพัฒนาทักษะด้านเทคโนโลยีและพอร์ตฟอลิโอ Port 69 Season 2 โดย Hamster Hub",
    portfolio_description: "เข้าร่วมกิจกรรมเชิงปฏิบัติการ Port 69 Season 2 จัดโดย Hamster Hub เพื่อเสริมสร้างทักษะทางเทคโนโลยี การวางโครงสร้างผลงาน การพัฒนาเว็บไซต์ และการประยุกต์ใช้ความคิดสร้างสรรค์ร่วมกับทักษะทางวิศวกรรมซอฟต์แวร์",
    engineering_connection: "ส่งเสริมทักษะการปฏิบัติการจริง (Hands-on Engineering Practice) การวางแผนพัฒนาโซลูชัน และการสื่อสารเทคโนโลยีอย่างเป็นระบบตามแนวทางของวิศวกรยุคใหม่",
    ai_confidence: 0.96,
    status: "Verified",
    created_at: "2025-04-21T00:00:00.000Z",
    recommendedForPortfolio: true
  },
  {
    id: "cert-gpa-377-m4",
    image: "/certificates/cert_gpa_377_m4_term1.jpg",
    file_url: "/certificates/cert_gpa_377_m4_term1.jpg",
    title: "ผลการเรียนระดับดีเยี่ยม เกรดเฉลี่ย 3.77 ภาคเรียนที่ 1 ปีการศึกษา 2567",
    achievement: "ผลการเรียนระดับดีเยี่ยม (GPA 3.77)",
    organization: "โรงเรียนคลองขลุงราษฎร์รังสรรค์ (ห้องเรียนคุณภาพ SMT โดย ผอ.รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย รักษาราชการแทน)",
    date: "16 พฤศจิกายน 2567",
    year: "2567 / 2024",
    category: "Academic Excellence",
    ranking: "Relevant",
    skills: ["STEM Fundamentals", "Computer Science Basics", "Mathematics", "Science"],
    short_description: "เกียรติบัตรผลการเรียนระดับดีเยี่ยม เกรดเฉลี่ย 3.77 ระดับชั้น ม.4/1 ห้องเรียนคุณภาพ SMT",
    portfolio_description: "ได้รับเกียรติบัตรผลการเรียนดีเยี่ยม เกรดเฉลี่ย 3.77 ในระดับชั้นมัธยมศึกษาปีที่ 4 ภาคเรียนที่ 1 โครงการห้องเรียนคุณภาพ SMT แสดงถึงการเริ่มต้นเส้นทางสายวิทย์-คณิต-เทคโนโลยีด้วยความตั้งใจและมีผลงานที่โดดเด่น",
    engineering_connection: "เป็นหลักฐานแสดงพัฒนาการและรากฐานที่มั่นคงในการเรียนรู้ศาสตร์วิศวกรรมตั้งแต่ก้าวแรกในระดับชั้นมัธยมศึกษาตอนปลาย",
    ai_confidence: 0.98,
    status: "Verified",
    created_at: "2024-11-16T00:00:00.000Z",
    recommendedForPortfolio: false
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: "HTML5 & Semantic Web", category: "Programming", level: 95, icon: "Code", description: "โครงสร้างเว็บตามมาตรฐาน SEO, Accessibility และโครงสร้าง Responsive", projectsCount: 6, highlight: true },
  { name: "CSS3 & Tailwind CSS", category: "Programming", level: 90, icon: "Palette", description: "การจัดเลย์เอาต์ Flexbox, Grid, Modern Glassmorphism, Micro-animations", projectsCount: 6, highlight: true },
  { name: "JavaScript (ES6+)", category: "Programming", level: 88, icon: "Terminal", description: "DOM Manipulation, Asynchronous Programming, APIs, Event-Driven Logic", projectsCount: 5, highlight: true },
  { name: "PHP & Backend", category: "Programming", level: 82, icon: "Server", description: "Server-side scripting, RESTful APIs, Session Management, CRUD Operations", projectsCount: 4, highlight: true },
  { name: "SQL & MySQL Database", category: "Programming", level: 85, icon: "Database", description: "Relational DB design, Complex Queries, Indexing, Data Normalization", projectsCount: 4, highlight: true },
  { name: "Python Basics & AI Scripting", category: "Programming", level: 78, icon: "FileCode", description: "Data Analysis, AI API Integration, Automation Scripts", projectsCount: 3 },
  { name: "C / C++ (Embedded)", category: "Programming", level: 75, icon: "Cpu", description: "Microcontroller logic, sensor interfacing, Arduino/ESP32 programming", projectsCount: 2 },

  // Technology & AI
  { name: "Artificial Intelligence (AI)", category: "Technology & AI", level: 85, icon: "Bot", description: "AI Prompt Engineering, Vision OCR, OpenAI/Gemini API integration, Math Solvers", projectsCount: 4, highlight: true },
  { name: "Web Application Architecture", category: "Technology & AI", level: 88, icon: "Layers", description: "Full-Stack Web App Development, Client-Server Communication, Security Basics", projectsCount: 5, highlight: true },
  { name: "Database Design & Management", category: "Technology & AI", level: 84, icon: "HardDrive", description: "ER Diagram modeling, schema optimization, relational integrity", projectsCount: 4 },
  { name: "UI/UX Design & Prototyping", category: "Technology & AI", level: 82, icon: "Layout", description: "User-Centered Design, Wireframing, Responsive Design System", projectsCount: 4 },
  { name: "IoT & Microcontrollers", category: "Technology & AI", level: 76, icon: "Radio", description: "ESP32 / Arduino sensor telemetry, Smart System automation", projectsCount: 2 },

  // Tools & Workflow
  { name: "VS Code & Dev Environment", category: "Tools & Design", level: 95, icon: "Laptop", description: "Extensions, Debugging, Snippets, Terminal workflow", projectsCount: 6 },
  { name: "XAMPP & Local Server", category: "Tools & Design", level: 90, icon: "Activity", description: "Apache, MySQL, phpMyAdmin local testing & deployment", projectsCount: 4 },
  { name: "GitHub & Version Control", category: "Tools & Design", level: 84, icon: "GitBranch", description: "Git commits, branching, pull requests, repository management", projectsCount: 5 },
  { name: "Figma", category: "Tools & Design", level: 80, icon: "Figma", description: "UI Mockups, Component Systems, Interactive Prototypes", projectsCount: 4 },
  { name: "Canva Pro", category: "Tools & Design", level: 92, icon: "Image", description: "Graphic assets, visual presentation, branding design", projectsCount: 6 },

  // Engineering & Hard Skills
  { name: "Engineering Problem Solving", category: "Engineering & Hard Skills", level: 92, icon: "Wrench", description: "Decomposing complex problems into algorithmic & engineering steps", projectsCount: 5, highlight: true },
  { name: "Mathematical Modeling", category: "Engineering & Hard Skills", level: 90, icon: "Binary", description: "Calculus, Linear Algebra, Statistical Analysis, Algorithm simulation", projectsCount: 4 },
  { name: "Scientific Research & Oral Presentation", category: "Engineering & Hard Skills", level: 94, icon: "Mic", description: "International conference research presentation, technical defense", projectsCount: 3, highlight: true },
  { name: "Circuit & Hardware Interfacing", category: "Engineering & Hard Skills", level: 78, icon: "Zap", description: "Schematic reading, sensor wiring, ADC conversion, motor drivers", projectsCount: 2 },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "lnwmath-ai",
    title: "LNWMATH",
    subtitle: "AI-Powered Mathematics Learning Platform & Step-by-Step Solver",
    category: "AI & Web",
    description: "Web Application ที่พัฒนาขึ้นเพื่อช่วยในการเรียนรู้คณิตศาสตร์ โดยนำเทคโนโลยี Artificial Intelligence มาประยุกต์ใช้ในการช่วยอธิบายและสนับสนุนการเรียนรู้อย่างเป็นระบบ",
    longDescription: "LNWMATH เป็นเว็บแอปพลิเคชันเพื่อการศึกษาที่ผสานพลังของการพัฒนาเว็บฟูลสแตก (PHP, SQL, JS) เข้ากับความฉลาดของ AI โดยมีฟังก์ชันแก้สมการคณิตศาสตร์ วาดกราฟฟังก์ชันแบบโต้ตอบ (Interactive Graph Visualizer) และ AI Math Tutor ที่คอยอธิบายขั้นตอนการแก้โจทย์อย่างละเอียดแบบ Step-by-Step เพื่อช่วยให้นักเรียนสามารถเข้าใจตรรกะทางคณิตศาสตร์ได้อย่างแท้จริง",
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "AI / LLM API", "Chart.js"],
    features: [
      "ระบบ AI Math Tutor คอยตอบคำถามและเฉลยโจทย์พร้อมวิธีทำแบบละเอียด",
      "Interactive Function Graphing Tool แสดงกราฟตรีโกณมิติและแคลคูลัสแบบ Real-Time",
      "ระบบจัดเก็บประวัติการทำโจทย์และสถิติการเรียนรู้ด้วยฐานข้อมูล MySQL",
      "Responsive Modern Dark Theme สไตล์ EdTech ระดับสากล"
    ],
    engineeringTakeaways: "ได้นำหลักการทางวิศวกรรมซอฟต์แวร์มาประยุกต์ใช้ ตั้งแต่การออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์ (Database Schema), การจัดการ API Asynchronous Request ไปจนถึงการ Prompt Engineering เพื่อให้ AI ส่งผลลัพธ์ที่เป็นระเบียบและถูกต้องตามหลักคณิตศาสตร์",
    imageUrl: "/images/lnwmath_preview.jpg",
    githubUrl: "https://github.com/natthaphong-eng/lnwmath-ai-platform",
    demoUrl: "https://lnwmath.vercel.app",
    featured: true,
    year: "2025 - 2026"
  },
  {
    id: "smart-iot-smt",
    title: "SMT Smart Hydroponics & Environment Telemetry",
    subtitle: "ระบบแปลงเกษตรอัจฉริยะควบคุมผ่าน IoT และ Web Dashboard",
    category: "Robotics & IoT",
    description: "ระบบควบคุมสภาพแวดล้อมและรดน้ำอัตโนมัติด้วยบอร์ดไมโครคอนโทรลเลอร์ ESP32 พร้อมส่งข้อมูล Sensor แสดงผลบน Web Dashboard แบบ Real-Time",
    longDescription: "โครงงานวิศวกรรมที่บูรณาการฮาร์ดแวร์และซอฟต์แวร์เข้าด้วยกัน โดยใช้ ESP32 ต่อพ่วงกับเซนเซอร์วัดความชื้นในดิน อุณหภูมิ แสง และค่า pH ในน้ำ นำข้อมูลส่งผ่าน MQTT / HTTP ไปบันทึกใน MySQL Database และแสดงผลผ่าน Web Application เพื่อควบคุมปั๊มน้ำและพัดลมระบายอากาศอัตโนมัติตามอัลกอริทึมที่กำหนด",
    techStack: ["C / C++ (ESP32)", "IoT / MQTT", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    features: [
      "Telemetry Dashboard แสดงกราฟอุณหภูมิและความชื้นแบบ Real-Time",
      "ระบบแจ้งเตือนความผิดปกติของเซนเซอร์",
      "สวิตช์ควบคุมรีเลย์ปั๊มน้ำและระบบปรับอากาศทางไกลผ่านหน้าเว็บ",
      "โหมด Smart Automation ปรับสมดุลสภาพแวดล้อมอัตโนมัติ"
    ],
    engineeringTakeaways: "เรียนรู้ระบบสมองกลฝังตัว (Embedded Systems), การเชื่อมต่อเซนเซอร์ฮาร์ดแวร์, การแปลงสัญญาณอนาล็อกเป็นดิจิทัล (ADC) และการจัดการ Network Latency ในระบบ IoT",
    imageUrl: "/images/lnwmath_preview.jpg",
    githubUrl: "https://github.com/natthaphong-eng/smt-smart-hydroponics",
    demoUrl: "#",
    featured: false,
    year: "2025"
  },
  {
    id: "ai-vision-rover",
    title: "Autonomous Line-Tracking & Obstacle Avoidance Rover",
    subtitle: "หุ่นยนต์นำทางอัตโนมัติด้วยเซนเซอร์ตรวจจับและอัลกอริทึมควบคุม",
    category: "Robotics & IoT",
    description: "หุ่นยนต์ขับเคลื่อน 4 ล้อที่ใช้ Microcontroller ร่วมกับอัลกอริทึม PID ในการวิ่งตามเส้นและตรวจจับสิ่งกีดขวางด้วยเซนเซอร์ Ultrasonic",
    longDescription: "โครงงานการพัฒนาระบบควบคุมหุ่นยนต์อัตโนมัติที่เน้นการประยุกต์ใช้คณิตศาสตร์และฟิสิกส์ในการควบคุมความเร็วของมอเตอร์ผ่าน PID Controller เพื่อให้หุ่นยนต์เคลื่อนที่ตามเส้นได้อย่างแม่นยำและนุ่มนวล พร้อมระบบป้องกันการชนสิ่งกีดขวางแบบอัตโนมัติ",
    techStack: ["C++", "Arduino / Microcontroller", "PID Control", "Ultrasonic Sensors", "Motor Drivers"],
    features: [
      "PID Closed-Loop Control System เพื่อการเลี้ยวที่สมูทและเสถียร",
      "Multi-Sensor Obstacle Avoidance Algorithm",
      "โครงสร้าง 3D-Printed Chassis ที่ออกแบบเพื่อความแข็งแรงและเบา"
    ],
    engineeringTakeaways: "เข้าใจหลักการ Control Theory, Closed-loop Feedback System และการประยุกต์ใช้ฟิสิกส์จลนศาสตร์ (Kinematics) ในงานวิศวกรรมหุ่นยนต์",
    imageUrl: "/images/lnwmath_preview.jpg",
    githubUrl: "https://github.com/natthaphong-eng/autonomous-pid-rover",
    demoUrl: "#",
    featured: false,
    year: "2024"
  }
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: "act-1",
    title: "Oral Presentation at The 3rd KPRU International Research Conference",
    role: "ผู้นำเสนอผลงานวิจัยแบบบรรยาย (Oral Presenter)",
    organization: "มหาวิทยาลัยราชภัฏกำแพงเพชร ร่วมกับ PTTEP และ Georgia Gwinnett College (USA)",
    year: "2026",
    date: "27 มิถุนายน 2569",
    category: "International Conference",
    description: "นำเสนอผลงานวิจัยด้านวิทยาศาสตร์ คณิตศาสตร์ และเทคโนโลยี บนเวทีวิชาการระดับนานาชาติ ต่อหน้าคณะกรรมการผู้ทรงคุณวุฒิและนักวิจัย",
    highlight: "นำเสนอผลงานวิชาการระดับนานาชาติร่วมกับ ปตท.สผ. (PTTEP) และสถาบันชั้นนำ",
    engineeringImpact: "พัฒนาทักษะการค้นคว้าเชิงลึก การวิเคราะห์ข้อมูลสถิติ และการถ่ายทอดกระบวนการทางวิศวกรรมเป็นภาษาอังกฤษอย่างถูกต้องตามหลักวิชาการ",
    badge: "International Stage"
  },
  {
    id: "act-2",
    title: "Port 69 Season 2 Tech & Web Development Intensive",
    role: "ผู้เข้าร่วมอบรมและพัฒนานวัตกรรมเว็บ",
    organization: "HAMSTER HUB",
    year: "2025",
    date: "19 - 21 เมษายน 2568",
    category: "Bootcamp & Workshop",
    description: "เข้าค่ายฝึกอบรมเข้มข้นด้านการพัฒนา Web Application, เทคโนโลยีสมัยใหม่ และการสร้างสรรค์ Portfolio เชิงวิศวกรรม",
    highlight: "พัฒนาทักษะ Full-Stack Web Development & Modern Tech Stack",
    engineeringImpact: "ได้รับองค์ความรู้ด้าน Modern Web Frameworks, Clean Architecture และการนำเสนอผลงานสู่กรรมการคัดเลือก",
    badge: "Tech Bootcamp"
  },
  {
    id: "act-3",
    title: "SMT Science, Mathematics & Technology Quality Classroom Program",
    role: "นักเรียนแผนการเรียนห้องเรียนคุณภาพ SMT",
    organization: "โรงเรียนคลองขลุงราษฎร์รังสรรค์",
    year: "2567 - 2569 (2024 - 2026)",
    date: "มัธยมศึกษาปีที่ 4 - 6",
    category: "Academic Competition",
    description: "ศึกษาในหลักสูตรเข้มข้นพิเศษด้านวิทยาศาสตร์ คณิตศาสตร์ เทคโนโลยี และการเขียนโปรแกรม โดยมีผลการเรียนระดับยอดเยี่ยมต่อเนื่อง (GPAX 3.91)",
    highlight: "ผลการเรียนระดับยอดเยี่ยมต่อเนื่อง (GPA 3.77 -> 3.94 -> 3.91)",
    engineeringImpact: "สร้างรากฐานด้านแคลคูลัส ฟิสิกส์ และการคิดเชิงตรรกะทางคอมพิวเตอร์อย่างเป็นระบบ",
    badge: "SMT Gifted"
  },
  {
    id: "act-4",
    title: "Web Application & Software Innovation Development Challenge",
    role: "Lead Full-Stack Developer",
    organization: "กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี",
    year: "2025",
    date: "สิงหาคม 2568",
    category: "Academic Competition",
    description: "ออกแบบและพัฒนา Web Application 'LNWMATH' เพื่อแก้ปัญหาการเรียนคณิตศาสตร์ของนักเรียนในโรงเรียนด้วย AI",
    highlight: "พัฒนา Web App ใช้งานจริงในกลุ่มเพื่อนนักเรียนและนำเสนอต่ออาจารย์",
    engineeringImpact: "ฝึกฝนการเป็น Software Engineer ตั้งแต่ Requirement Gathering, Database Schema, Coding จนถึง Deployment",
    badge: "Innovation Project"
  }
];

export const ROADMAP_DATA = [
  {
    year: "2026 (ปี 1)",
    title: "Engineering Foundation & KMITL Immersion",
    desc: "ศึกษาและสร้างความเชี่ยวชาญในพื้นฐานวิศวกรรมศาสตร์ แคลคูลัส ฟิสิกส์ และ Fundamental Programming พร้อมเข้าร่วมชมรมด้าน Robotics & AI ประจำคณะวิศวฯ สจล."
  },
  {
    year: "2027 (ปี 2)",
    title: "Core Engineering & Deep Software/AI Architecture",
    desc: "เจาะลึก Data Structures & Algorithms, Computer Architecture, Embedded Systems และ Machine Learning เพื่อเตรียมความพร้อมในการสร้างระบบขนาดใหญ่"
  },
  {
    year: "2028 (ปี 3)",
    title: "Advanced Innovation & Hackathon Competitions",
    desc: "รวมทีมพัฒนาโครงงานวิศวกรรมนวัตกรรม เข้าแข่งขัน Hackathon ระดับประเทศ และฝึกงานในบริษัทเทคโนโลยี/วิศวกรรมชั้นนำ"
  },
  {
    year: "2029 - 2030 (ปี 4 สู่มืออาชีพ)",
    title: "Senior Capstone Project & Future Engineer",
    desc: "ทำ Senior Project ทางวิศวกรรมที่เชื่อมโยง AI กับการแก้ปัญหาอุตสาหกรรมจริง และก้าวสู่การเป็น AI / Software Engineer คุณภาพเพื่อพัฒนาประเทศ"
  }
];
