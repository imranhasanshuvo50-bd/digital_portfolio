import type { Profile } from "@/features/portfolio/types";

export const focusAreas = [
  "Embedded Systems",
  "IoT",
  "Flutter Development",
  "Artificial Intelligence",
  "Software Engineering"
] as const;

export const profile: Profile = {
  name: "Md Imran Hasan Shuvo",
  title: "Computer Science & Engineering Student",
  introduction:
    "I build practical software and hardware-focused solutions across embedded systems, IoT, Flutter, and artificial intelligence.",
  summary: [
    "I am a Computer Science and Engineering student with a strong interest in the Internet of Things (IoT), embedded systems, and artificial intelligence. I enjoy learning how intelligent hardware and software can work together to solve practical problems and improve everyday life.",
    "I am a curious and adaptable learner with strong problem-solving, teamwork, and technical skills. I am continuously expanding my knowledge of modern technologies and aim to build a career where I can contribute to innovative, reliable, and intelligent engineering solutions."
  ],
  careerObjective:
    "To grow as an engineer who can design reliable embedded and IoT systems, build polished Flutter applications, and apply artificial intelligence to solve useful real-world problems with clean, maintainable software.",
  roles: [
    "Embedded Systems Engineer",
    "IoT Developer",
    "Flutter Developer",
    "AI Enthusiast"
  ],
  education: {
    degree: "BSc in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    department: "Computer Science & Engineering",
    cgpa: "3.95/4.00",
    expectedGraduation: "Summer 2026/27"
  },
  focusAreas: [...focusAreas],
  location: "Dhaka, Bangladesh",
  awards: ["Dean's List Honors"],
  image: {
    src: "/images/profile-photo.jpg",
    alt: "Portrait of Md Imran Hasan Shuvo",
    width: 839,
    height: 1200
  },
  links: {
    email: "imranhasanshuvo5@gmail.com",
    phone: "+8801751088330",
    github: "https://github.com/imranhasanshuvo50-bd?tab=overview&from=2026-07-01&to=2026-07-08",
    linkedin: "https://www.linkedin.com/in/imran-hasan-458a6b178/",
    resume: "/documents/resume.pdf"
  }
};
