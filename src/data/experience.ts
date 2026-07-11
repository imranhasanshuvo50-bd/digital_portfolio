import type { ExperienceItem } from "@/features/portfolio/types";

export const relevantExperience = [
  {
    title: "Application Tester",
    period: "2025-Present",
    category: "Quality Assurance",
    summary:
      "Test applications, identify bugs, verify fixes, and report issues to improve product quality.",
    highlights: [
      "Application testing and issue validation",
      "Bug identification, reproduction, and reporting",
      "Regression checks to verify fixes before release"
    ]
  },
  {
    title: "Apple Developer Account Manager",
    period: "2025-Present",
    category: "Developer Operations",
    summary:
      "Manage Apple Developer accounts, certificates, provisioning profiles, and app publishing workflows.",
    highlights: [
      "Apple Developer account operations",
      "Certificate and provisioning profile management",
      "App publishing support and release readiness"
    ]
  }
] satisfies ExperienceItem[];
