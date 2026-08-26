import type { Client } from '../types';

export const clients: Client[] = [
  {
    slug: 'mastertetto',
    name: 'MasterTetto',
    category: 'Edilizia · Lavori in quota',
    location: 'Verona',
    year: 2026,
    tagline: 'Manutenzione acrobatica del tetto, senza ponteggi.',
    description:
      'MasterTetto interviene sulle coperture con tecniche acrobatiche certificate — senza ponteggi, più rapido e meno invasivo. Il sito porta online otto servizi (dal ripasso al rifacimento completo), un sistema di richiesta preventivo e una presenza credibile che prima non esisteva.',
    liveUrl: 'https://www.mastertetto.it',
    status: 'live',
    scope: ['Design', 'Sviluppo', 'SEO Locale', 'Performance', 'Preventivo'],
    services: [
      'Sistema Anticaduta',
      'Senza Ponteggi',
      'Ripasso del Tetto',
      'Rifacimento del Tetto',
      'Sostituzione Lucernari',
      'Pulizia Grondaia',
      'Pulizia Pannelli Fotovoltaici',
      'Reti Anti-Piccione',
    ],
    palette: ['#1A1410', '#C62828', '#B8A898', '#25D366'],
    thumbnail: 'clients/mastertetto.webp',
    badge: 'Primo cliente',
    featured: true,
  },
  {
    slug: 'roncari-snc',
    name: 'Roncari Impresa Edile SNC',
    category: 'Edilizia · Costruzioni e Ristrutturazioni',
    location: 'Legnago (VR)',
    year: 2026,
    tagline: 'Costruiamo strutture che durano nel tempo.',
    description:
      'Roncari Impresa Edile è un punto di riferimento a Legnago e nella Bassa Veronese per costruzioni residenziali, ristrutturazioni e manutenzione edile. Tre proposte di sito professionale con foto reali, sezioni servizi, portfolio progetti, processo di lavoro e testimonianze clienti.',
    liveUrl: '',
    status: 'in-progress',
    scope: ['Design', 'Sviluppo', '3 Proposte', 'Foto Stock'],
    services: [
      'Costruzioni Residenziali',
      'Ristrutturazioni',
      'Manutenzione Edile',
      'Opere in Muratura',
      'Coperture e Impermeabilizzazioni',
      'Lavori Esterni e Pavimentazioni',
    ],
    palette: ['#15181E', '#B8943C', '#3D7A42', '#D45B27'],
    thumbnail: 'clients/roncari-snc.webp',
  },
];
