import { profile } from "@/data/profile";

export type SocialLinkKey = "github" | "linkedin" | "email" | "phone";

export const socialLinks = [
  {
    key: "github",
    label: "GitHub",
    href: profile.links.github
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: profile.links.linkedin
  },
  {
    key: "email",
    label: "Email",
    href: `mailto:${profile.links.email}`
  },
  {
    key: "phone",
    label: "Phone",
    href: `tel:${profile.links.phone}`
  }
] satisfies Array<{
  key: SocialLinkKey;
  label: string;
  href: string;
}>;
