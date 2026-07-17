import type { Project } from '../types';

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

export const privateProjects: Project[] = [
  {
    title: 'GOLIATH V1 — Trading Ecosystem',
    desc: 'Ecosistema AI di trading algoritmico a microservizi con ML, gestione rischio multi-livello e security audit.',
    tech: ['Python', 'Go', 'React', 'TimescaleDB', 'Docker', 'Grafana'],
    status: 'private',
  },
];
