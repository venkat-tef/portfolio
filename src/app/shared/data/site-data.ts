// Centralized site data.
//
// This file exists so personal/contact info lives in exactly one place instead of
// being duplicated across the navbar, footer, about, contact, and certifications
// components. Update values here and every component that references them updates
// automatically.
//
// IMPORTANT: values left as an empty string ('') are intentionally NOT filled in —
// they are real gaps (no fabricated links/dates/issuers). Every place that renders
// these fields checks for a non-empty value first and simply omits the element when
// it's blank, so the UI stays clean until you provide the real data.

export interface SocialLink {
  key: 'linkedin' | 'github' | 'instagram' | 'whatsapp' | 'email';
  label: string;
  url: string; // '' = not provided yet, will not be rendered
  icon: string; // inline-SVG key, see shared/icons
}

export interface Certification {
  name: string;
  issuer: string; // '' = not provided yet
  date: string; // '' = not provided yet
  link: string; // '' = not provided yet
}

export interface Interest {
  title: string;
  description: string;
  icon: string; // inline-SVG key, see shared/icons
}

export const PROFILE = {
  name: 'Venkat Narayana Kothakota',
  title: 'Frontend / UI Developer',
  location: 'Hyderabad, India',
  tagline: 'Building clean, scalable, user-focused web applications with Angular.',
  email: 'kothakotavenkatnarayana@gmail.com',
  phone: '+91 8179518097',
};

// Existing links come straight from the current resume data. The rest are left
// blank until real URLs are provided — see the note above.
export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/venkat-narayana-kothakota-5b28a01a1',
    icon: 'linkedin',
  },
  { key: 'github', label: 'GitHub', url: '', icon: 'github' },
  { key: 'instagram', label: 'Instagram', url: '', icon: 'instagram' },
  { key: 'whatsapp', label: 'WhatsApp', url: '', icon: 'whatsapp' },
  {
    key: 'email',
    label: 'Email',
    url: `mailto:${PROFILE.email}`,
    icon: 'mail',
  },
];

// Names only, per instruction — issuer/date/link are placeholders to be filled in
// later, never invented.
export const CERTIFICATIONS: Certification[] = [
  { name: 'CSCA', issuer: '', date: '', link: '' },
  { name: 'CAD', issuer: '', date: '', link: '' },
];

// "Beyond Code" section — the interest areas you confirmed, worded generically
// (no invented specifics like places, dates, or events).
export const INTERESTS: Interest[] = [
  {
    title: 'Exploring New Places',
    description: 'Enjoys discovering new cities, neighborhoods, and viewpoints whenever there\u2019s a chance to travel.',
    icon: 'compass',
  },
  {
    title: 'Bike Riding',
    description: 'Rides for the open road and the occasional weekend trail — a favorite way to unwind.',
    icon: 'bike',
  },
  {
    title: 'Travel',
    description: 'Likes getting out of the usual routine and experiencing new places and cultures.',
    icon: 'map',
  },
  {
    title: 'Learning New Technologies',
    description: 'Regularly experiments with new frontend tools and techniques outside of day-to-day work.',
    icon: 'code',
  },
  {
    title: 'Exploring New Ideas',
    description: 'Enjoys tinkering with small side ideas and proof-of-concepts just to see how they turn out.',
    icon: 'bulb',
  },
];
