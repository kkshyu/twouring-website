// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 正式對外網域。如改用 apex（https://twouring.com）只需改這一處。
const SITE = 'https://www.twouring.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false, // zh 在 root（/），en 在 /en/
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: {
          zh: 'zh-Hant-TW',
          en: 'en',
        },
      },
    }),
  ],
});
