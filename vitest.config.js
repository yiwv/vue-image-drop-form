import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,

  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      include: [ './tests/**' ],
      root: fileURLToPath(new URL('./', import.meta.url))
    },
  })
)
