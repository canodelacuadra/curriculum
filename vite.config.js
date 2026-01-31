import { defineConfig } from 'vite'

export default defineConfig({
  base: '/curriculum/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})