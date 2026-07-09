import { profile } from "@/data/profile";

export const siteData = {
  name: `${profile.name} | Portfolio`,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  description:
    "Portfolio of Md Imran Hasan Shuvo, a Computer Science & Engineering student focused on embedded systems, IoT, Flutter, artificial intelligence, and software engineering.",
  keywords: [
    "Md Imran Hasan Shuvo",
    "Embedded Systems",
    "IoT",
    "Flutter Developer",
    "Artificial Intelligence",
    "Software Engineer",
    "AIUB",
    "Computer Science"
  ]
};
