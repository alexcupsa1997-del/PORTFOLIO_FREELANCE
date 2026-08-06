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
      { label: 'Docker' },
      { label: 'gRPC' },
    ],
    badge: { label: 'Private', variant: 'private' },
    links: [],
    visualClass: 'fcard__visual--goliath',
  },
];

export const privateProjects: PrivateProject[] = [
  {
    title: 'Trading Ecosystem',
    description: 'Sistema di trading autonomo e auto-apprendente che opera in modo continuo, adattandosi alle condizioni di mercato.',
    tag: 'Python',
  },
  {
    title: 'GOLIATH Engine',
    description: 'Motore di trading algoritmico puro — analisi tecnica automatizzata e esecuzione disciplinata delle operazioni.',
    tag: 'Python',
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
  {
    title: 'Macena SmartERP',
    description: 'Gestionale cloud multi-tenant per le PMI manifatturiere del Veronese: produzione, magazzino, vendite e contabilità FatturaPA/SDI con adempimenti italiani (Piano dei Conti IV CEE, Conservazione a Norma) integrati nativamente.',
    tag: 'TypeScript',
  },
  {
    title: 'Macena LogiTrack',
    description: 'Kit modulare di software logistico per ingaggi freelance: piattaforma Go + MongoDB con verticali (logistica A22 / Quadrante Europa, rifiuti speciali RENTRI) forkati e personalizzati per ogni cliente, senza canone SaaS.',
    tag: 'Go',
  },
  {
    title: 'Macena GreenMetrics',
    description: "Energy management e reporting di sostenibilità per le PMI energivore: ingerisce letture dei contatori e genera l'attestazione Piano Transizione 5.0 (credito d'imposta fino al 45%), report CSRD/ESRS E1, Conto Termico e TEE.",
    tag: 'Go',
  },
  {
    title: 'Macena TeamFlow',
    description: "HR e payroll per le PMI italiane: codifica i CCNL (Metalmeccanici, Commercio, Edilizia, Chimico), automatizza INPS/INAIL/IRPEF, TFR, UNIEMENS, F24 e l'intero catalogo permessi (ferie, ROL, malattia, maternità, Legge 104).",
    tag: 'Ruby',
  },
  {
    title: 'Macena FatturaFlow',
    description: 'Ciclo completo della fattura elettronica: generazione XML FatturaPA v1.2.2, firma XAdES-BES, trasmissione SDI tramite intermediario accreditato, tracciamento ricevute (RC/NS/MC/DT) e Conservazione a Norma decennale.',
    tag: 'Python',
  },
  {
    title: 'Macena FactoryMind',
    description: "Template Industrial IoT per il monitoraggio OEE in tempo reale: Mosquitto + InfluxDB + Grafana, protocolli OPC UA, Modbus e Sparkplug B, con attestazione Piano Transizione 4.0/5.0 (credito d'imposta fino al 45%).",
    tag: 'JavaScript',
  },
  {
    title: 'Macena AgriVigna',
    description: "Viticoltura di precisione per i vigneti del Veronese (Valpolicella, Bardolino, Soave, Custoza, Lugana): sensoristica MQTT in campo, modelli fitopatologici peer-reviewed, diagnosi AI su foglia e Quaderno di Campagna integrato col SIAN/AGEA.",
    tag: 'Python',
  },
  {
    title: 'Macena CyberGuard',
    description: 'Piattaforma di cybersecurity esclusivamente difensiva per PMI italiane: scansione vulnerabilità, scoring GDPR, gap analysis NIS2 (D.Lgs. 138/2024), gestione incidenti con bozze di notifica per Garante e CSIRT Italia.',
    tag: 'Rust',
  },
  {
    title: 'Macena TraceVino',
    description: "Tracciabilità dal vigneto alla bottiglia per le cantine veronesi: chain-of-custody con hash immutabile, AI di defect-detection e compliance HACCP / Reg. CE 178/2002 (one-step-back / one-step-forward).",
    tag: 'Python',
  },
];
