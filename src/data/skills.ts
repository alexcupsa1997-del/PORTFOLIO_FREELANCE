import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Stack',
    skills: [
      { label: 'Python', variant: 'default' },
      { label: 'Go', variant: 'default' },
      { label: 'JavaScript', variant: 'default' },
      { label: 'TypeScript', variant: 'default' },
      { label: 'React', variant: 'default' },
      { label: 'HTML / CSS', variant: 'default' },
      { label: 'Bash', variant: 'default' },
      { label: 'Git', variant: 'default' },
    ],
  },
  {
    title: 'Security',
    skills: [
      { label: 'Penetration Testing', variant: 'green' },
      { label: 'OSINT', variant: 'green' },
      { label: 'Vulnerability Assessment', variant: 'green' },
      { label: 'Network Security', variant: 'green' },
      { label: 'CTF Audit', variant: 'green' },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { label: 'PostgreSQL', variant: 'violet' },
      { label: 'TimescaleDB', variant: 'violet' },
      { label: 'MongoDB', variant: 'violet' },
      { label: 'Redis', variant: 'violet' },
      { label: 'Docker', variant: 'violet' },
      { label: 'Grafana', variant: 'violet' },
      { label: 'gRPC', variant: 'violet' },
      { label: 'ZeroMQ', variant: 'violet' },
    ],
  },
];
