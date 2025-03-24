// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './config/constants';

console.log('Middleware initialized with locales:', SUPPORTED_LOCALES);

export default createMiddleware({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed',
});

export const config = {
  // This matcher is critical - make sure it's correct
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};