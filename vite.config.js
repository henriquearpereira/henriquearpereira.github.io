import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// For a user site (henriquearpereira.github.io) base stays '/'
// Changed to './' to support both root and subdirectory deployments safely
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'docs', // Build to docs/ for GitHub Pages
    emptyOutDir: true
  }
})

