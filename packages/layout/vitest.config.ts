import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'layout',
    environment: 'jsdom',
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      thresholds: {
        lines: 90,
        statements: 90,
        functions: 90,
        branches: 90
      }
    }
  }
})
