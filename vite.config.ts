import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      clientsClaim: true,
      skipWaiting: true
    },
    devOptions: {
      enabled: true
    },
    manifest: {
      name: 'Fusioner',
      short_name: 'Fusioner',
      description: 'Your Ultimate Cryptocurrency Companion',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/maskable-icon.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/maskable-icon.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })
],
  server: {
    port: 3000
  }
})
