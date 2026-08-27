import { PageId } from '../types';

export interface RouteState {
  page: PageId;
  param?: string;
}

export function parseCurrentHash(): RouteState {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) {
    return { page: 'home' };
  }

  const [routePart, queryPart] = hash.split('?');
  const params = new URLSearchParams(queryPart || '');
  const idParam = params.get('id') || params.get('service') || undefined;

  const validPages: PageId[] = [
    'home',
    'about',
    'services',
    'service-detail',
    'gallery',
    'promotions',
    'booking',
    'contact',
    'faq',
    'privacy',
  ];

  if (validPages.includes(routePart as PageId)) {
    return {
      page: routePart as PageId,
      param: idParam || undefined,
    };
  }

  return { page: 'home' };
}

export function navigateTo(page: PageId, param?: string) {
  let newHash = `#${page}`;
  if (param) {
    if (page === 'service-detail') {
      newHash += `?id=${encodeURIComponent(param)}`;
    } else if (page === 'booking') {
      newHash += `?service=${encodeURIComponent(param)}`;
    } else {
      newHash += `?id=${encodeURIComponent(param)}`;
    }
  }

  if (window.location.hash !== newHash) {
    window.location.hash = newHash;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
