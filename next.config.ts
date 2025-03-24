import type { NextConfig } from "next";
const withNextIntl = require('next-intl/plugin')(
  './src/i18n/request.ts',
  {
    localePrefix: 'as-needed'
  }
);
const nextConfig: NextConfig = withNextIntl({
  /* config options here */
});

export default nextConfig;
