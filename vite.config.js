import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbywHwHJbOXHuN75OASGTmsh83AHOyGMMzhWYRu7tm7tRNcuulMkIwn3azXQ1XBcEXBMbA/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
  },
})
