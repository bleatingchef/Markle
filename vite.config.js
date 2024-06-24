import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbyIGLCQzcZClXGv1V8mWgIMt3qmta-k_Ex-axGDER904M3RRcdhm2k4CrneLhtJwS9uFQ/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
  },
})
