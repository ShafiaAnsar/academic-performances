import { SUPPORTED_LOCALES } from "../config/constants";

// types.ts
// Defines the type for a single locale, which is a single element from the SUPPORTED_LOCALES array
export type Locale = (typeof SUPPORTED_LOCALES)[number];

// Defines the configuration for next-intl, including an array of supported locales and a default locale
export type NextIntlConfig = {
  locales: Locale[]; // Array of supported locales
  defaultLocale: Locale; // Default locale for the application
};