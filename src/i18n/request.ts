import {getRequestConfig} from 'next-intl/server';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, Locale } from '@/config/constants';

const localeTimezones: Record<string, string> = {
  en: 'Europe/London',
  fr: 'Europe/Paris',
  ar: 'Asia/Riyadh',
  es: 'Europe/Madrid',
  zh: 'Asia/Shanghai',
  af: 'Africa/Johannesburg',
  sq: 'Europe/Tirane'
};

export default getRequestConfig(async ({locale}) => {
  // Ensure locale is valid or fallback to default
  const validLocale = SUPPORTED_LOCALES.includes(locale as Locale) ? locale : DEFAULT_LOCALE;
  
  try {
    const messages = await import(`./locales/${validLocale}.json`)
      .then(module => module.default)
      .catch(async error => {
        if (process.env.NODE_ENV === 'development') {
          console.error(`[i18n] Failed to load messages for locale: ${validLocale}`, error);
        }
        const fallbackMessages = await import('./locales/en.json');
        return fallbackMessages.default;
      });

    return {
      messages,
      locale: validLocale as string,
      timeZone: localeTimezones[validLocale as string] || 'UTC',
      now: new Date()
    };
  } catch (error) {
    console.error(`[i18n] Error in request config:`, error);
    const fallbackMessages = await import('./locales/en.json');
    
    return {
      messages: fallbackMessages.default,
      locale: DEFAULT_LOCALE,
      timeZone: 'UTC',
      now: new Date()
    };
  }
}); 