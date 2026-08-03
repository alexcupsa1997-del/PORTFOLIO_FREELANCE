export interface SiteConfig {
  name: string;
  nameShort: string;
  initials: string;
  role: string;
  tagline: string;
  taglineEn: string;
  email: string;
  whatsapp: string;
  github: string;
  githubUser: string;
  location: string;
  locationCode: string;
  available: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface Service {
  num: string;
  title: string;
  description: string;
}

export interface SkillItem {
  label: string;
  variant?: 'default' | 'green' | 'violet' | 'live';
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  status: 'public' | 'private' | 'wip';
  url?: string;
  stats?: Record<string, string | number>;
}

export interface FeaturedProject {
  title: string;
  description: string;
  tags: { label: string; variant?: 'default' | 'blue' | 'green' | 'violet' }[];
  badge: { label: string; variant: 'live' | 'collab' | 'wip' | 'private' };
  links: { label: string; href: string; variant: 'blue' | 'ghost' }[];
  visualClass: string;
}

export interface PrivateProject {
  title: string;
  description: string;
  tag: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  updated_at: string;
}
