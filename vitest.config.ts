import { qwikVite } from "@builder.io/qwik/optimizer";
import { defineConfig } from "vitest/config";
import { testSSR } from "vitest-browser-qwik/ssr-plugin";

export default defineConfig({
  plugins: [
    testSSR(),
    qwikVite()
  ],
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