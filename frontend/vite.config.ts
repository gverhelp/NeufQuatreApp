import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Cela permet d'écouter sur toutes les interfaces réseau
    port: 5173,
  },
  build: {
    chunkSizeWarningLimit: 1000 // en kilobytes
  }
})
