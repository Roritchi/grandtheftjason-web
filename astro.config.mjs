// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: import.meta.env.DEV ? 'http://localhost:4321' : 'https://grandtheftjason.xyz',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  })
});