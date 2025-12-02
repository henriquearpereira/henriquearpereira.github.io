import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// For a user site (henriquearpereira.github.io) base stays '/'
export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'docs', // Build to docs/ for GitHub Pages
    emptyOutDir: true
  }
})

