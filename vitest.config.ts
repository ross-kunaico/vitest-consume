import { defineConfig } from 'vitest/config'
import { qwikVite } from '@builder.io/qwik/optimizer'

export default defineConfig({
  plugins: [qwikVite()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        { browser: 'chromium' },
      ],
      headless: true
    }
  }
})