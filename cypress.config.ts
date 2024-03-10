import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const version = 'local'
      const urls = {
        local: 'http://localhost:3000/',
      }

      config.baseUrl = urls[version]
      return config
    },
  },
})
