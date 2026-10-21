import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/idosos-digitais-pwa/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Associação de Apoio à Terceira Idade de Taubaté',
        short_name: 'Idosos Digitais',
        theme_color: '#003366',
        background_color: '#ffffff',
        display: 'standalone'
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
})
