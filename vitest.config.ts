import { qwikVite } from "@builder.io/qwik/optimizer";
import { register as handleTSXImports } from "tsx/esm/api";
import { defineConfig } from "vitest/config";
import { testSSR } from "vitest-browser-qwik/ssr-plugin";

handleTSXImports();

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