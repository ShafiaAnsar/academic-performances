import { createNavigation } from 'next-intl/navigation'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './config/constants'

export const { Link, redirect, usePathname, useRouter } = createNavigation({ 
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed'
}) 