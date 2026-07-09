import { profile } from "@/data/profile";
import type { EducationTimelineItem } from "@/features/portfolio/types";

export const educationTimeline = [
  {
    level: "University",
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    period: "2024 - Expected Summer 2026/27",
    program: profile.education.degree,
    result: `CGPA ${profile.education.cgpa}`,
    highlights: [
      profile.education.department,
      "Dean's List Honors",
      "Faculty of Science and Technology"
    ],
    image: {
      src: "/images/education/aiub-campus.jpg",
      alt: "AIUB campus with the university globe building"
    }
  },
  {
    level: "College",
    institution: "Milestone College Uttara",
    location: "Uttara, Dhaka",
    period: "HSC 2020",
    program: "Science",
    result: "GPA 4.92/5.00",
    highlights: [
      "Higher Secondary Certificate",
      "Dhaka Education Board",
      "Science Group"
    ],
    image: {
      src: "/images/education/milestone-college.jpeg",
      alt: "Milestone College campus aerial view"
    }
  },
  {
    level: "School",
    institution: "Elenga High School",
    location: "Elenga, Tangail",
    period: "SSC 2018",
    program: "Science",
    result: "GPA 4.67/5.00",
    highlights: [
      "Secondary School Certificate",
      "Junior School Certificate GPA 4.95/5.00",
      "Primary Education Completion certificate"
    ],
    image: {
      src: "/images/education/elenga-high-school.png",
      alt: "Elenga High School entrance"
    }
  }
] satisfies EducationTimelineItem[];
