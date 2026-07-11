import type { SkillGroup } from "@/features/portfolio/types";

export const technicalSkills = [
  {
    title: "Core Engineering",
    skills: [
      "ESP32 Embedded Systems",
      "IoT Architecture",
      "Flutter App Development",
      "Application Testing",
      ".NET Software Development"
    ]
  },
  {
    title: "Electronics & Simulation",
    skills: ["Proteus", "NI Multisim", "MATLAB"]
  },
  {
    title: "Programming Languages",
    skills: ["C++", "C#", "Dart", "JavaScript", "Python"]
  },
  {
    title: "Development Tools",
    skills: ["Visual Studio", "Visual Studio Code", "Xcode", "Arduino IDE", "STM32CubeIDE"]
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"]
  },
  {
    title: "AI Development Tools",
    skills: ["OpenAI Codex", "Google Antigravity"]
  }
] satisfies SkillGroup[];

export const softSkills = [
  {
    title: "Professional Skills",
    skills: ["Problem-Solving", "Teamwork and Collaboration"]
  }
] satisfies SkillGroup[];
