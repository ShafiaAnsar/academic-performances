// next-intl.config.ts
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './src/config/constants';
import type { NextIntlConfig } from './src/lib/types';

// Add error logger
const logConfigError = (error: Error) => {
  console.error('[next-intl] Configuration Error:', error.message);
  // You could add more sophisticated logging here
  
};

// Enhanced validation with fallback
function validateConfig(locales: string[], defaultLocale: string): string {
  try {
    if (!Array.isArray(locales) || locales.length === 0) {
      throw new Error('Supported locales must be a non-empty array');
    }

    if (!defaultLocale) {
      throw new Error('Default locale must be specified');
    }

    if (!locales.includes(defaultLocale)) {
      // Log the issue
      logConfigError(
        new Error(`Default locale "${defaultLocale}" not found in supported locales: ${locales.join(', ')}`)
      );
      // Return first available locale as fallback
      return locales[0];
    }

    return defaultLocale;
  } catch (error) {
    // Log any other validation errors
    logConfigError(error as Error);
    // Provide ultimate fallback
    return 'en';
  }
}

// Get validated default locale
const validatedDefaultLocale = validateConfig([...SUPPORTED_LOCALES], DEFAULT_LOCALE);

const config: NextIntlConfig = {
  locales: [...SUPPORTED_LOCALES],
  defaultLocale: validatedDefaultLocale as NextIntlConfig['defaultLocale'],
};

export default config;
