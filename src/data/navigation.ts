import type { NavLink } from '../types';

export const landingLinks: NavLink[] = [
  { label: 'Chi Sono', href: '#about' },
  { label: 'Clienti', href: '/PORTFOLIO_FREELANCE/clienti/' },
  { label: 'Templates', href: '/PORTFOLIO_FREELANCE/templates/' },
  { label: 'Progetti', href: '/PORTFOLIO_FREELANCE/projects/' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Parliamo', href: '#contatti', isCta: true },
];

export const pageLinks: NavLink[] = [
  { label: 'Home', href: '/PORTFOLIO_FREELANCE/' },
  { label: 'Clienti', href: '/PORTFOLIO_FREELANCE/clienti/' },
  { label: 'Templates', href: '/PORTFOLIO_FREELANCE/templates/' },
  { label: 'Progetti', href: '/PORTFOLIO_FREELANCE/projects/' },
  { label: 'Parliamo', href: '/PORTFOLIO_FREELANCE/#contatti', isCta: true },
];
