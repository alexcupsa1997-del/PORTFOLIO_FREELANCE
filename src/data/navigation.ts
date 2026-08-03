import type { NavLink } from '../types';

export const landingLinks: NavLink[] = [
  { label: 'Chi Sono', href: '#about' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Progetti', href: '#progetti' },
  { label: 'Studio', href: '#studio' },
  { label: 'Parliamo', href: '#contatti', isCta: true },
];

export const pageLinks: NavLink[] = [
  { label: 'Home', href: '/PORTFOLIO_FREELANCE/' },
  { label: 'Servizi', href: '/PORTFOLIO_FREELANCE/#servizi' },
  { label: 'Progetti', href: '/PORTFOLIO_FREELANCE/projects/' },
  { label: 'Software', href: '/PORTFOLIO_FREELANCE/software/' },
  { label: 'Parliamo', href: '/PORTFOLIO_FREELANCE/#contatti', isCta: true },
];
