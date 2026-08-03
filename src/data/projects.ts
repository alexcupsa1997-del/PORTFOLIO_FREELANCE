import type { Project, FeaturedProject, PrivateProject } from '../types';

export const featuredProject: Project = {
  title: 'GOLIATH V1 — Trading Ecosystem',
  desc: 'Ecosistema AI di trading algoritmico su architettura a microservizi. Pipeline segnali a 4 tier con ML (JEPA/GNN/PyTorch), 5 bot in parallelo, security audit CTF completato in 20 round.',
  tech: ['Python', 'Go', 'React', 'TimescaleDB', 'Redis', 'Docker', 'Grafana', 'gRPC', 'ZeroMQ', 'PyTorch'],
  status: 'private',
  stats: {
    microservizi: '11',
    bot: '5',
    test: '~3.000',
    linguaggi: 'Python · Go · TypeScript',
    tier: '4',
  },
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'GOLIATH V1',
    description: 'Ecosistema AI di trading algoritmico su architettura a microservizi. Pipeline segnali a 4 tier con ML, 5 bot in parallelo, security audit CTF completato in 20 round.',
    tags: [
      { label: 'Python', variant: 'green' },
      { label: 'Go', variant: 'blue' },
      { label: 'TimescaleDB', variant: 'violet' },
      { label: 'Docker', variant: 'default' },
      { label: 'gRPC', variant: 'default' },
    ],
    badge: { label: 'Private', variant: 'private' },
    links: [],
    visualClass: 'fcard__visual--goliath',
  },
];

export const privateProjects: PrivateProject[] = [
  {
    title: 'GOLIATH V1 — Trading Ecosystem',
    description: 'Ecosistema AI di trading algoritmico a microservizi con ML, gestione rischio multi-livello e security audit CTF.',
    tag: 'AI / Trading',
  },
  {
    title: 'Security Audit Toolkit',
    description: 'Suite interna di strumenti per penetration testing e vulnerability assessment automatizzato.',
    tag: 'Security',
  },
  {
    title: 'DB Migration Engine',
    description: 'Tool di migrazione e versionamento schema per PostgreSQL e TimescaleDB con rollback automatico.',
    tag: 'Database',
  },
  {
    title: 'Workflow Automator',
    description: 'Pipeline di automazione processi aziendali con Python e Bash, integrazione multi-sistema.',
    tag: 'Automation',
  },
];
