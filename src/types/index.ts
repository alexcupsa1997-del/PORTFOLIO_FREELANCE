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
