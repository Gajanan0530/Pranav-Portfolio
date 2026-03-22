// ──────────────────────────────────────
// Single source of truth for all profile data
// ──────────────────────────────────────

export const PROFILE = {
  name: 'Pranav',
  shortName: 'Pranav',
  alias: 'Pranav',
  title: 'Your Professional Title',
  email: 'pranav.gadagamma@gmail.com',
  phone: '+1234567890',
  website: 'www.pranav.dev',
  blogHost: 'www.prasad.dev',
} as const;

export const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/GadagammaPranav',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pranav-g662',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    href: 'https://leetcode.com/u/pranav_7701/',
  },
  {
    id: 'codechef',
    label: 'CodeChef',
    href: 'https://www.codechef.com/users/pranav_0067',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:pranav.gadagamma@gmail.com',
  },
] as const;

export type SocialLinkId = (typeof SOCIAL_LINKS)[number]['id'];

/** Helper to get a social link by id */
export const getSocialLink = (id: SocialLinkId) =>
  SOCIAL_LINKS.find((link) => link.id === id)!;
