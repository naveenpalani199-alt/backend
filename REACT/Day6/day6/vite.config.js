import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/backend/REACT/Day6/day6-site/',
  build: {
    outDir: '../day6-site',
    emptyOutDir: true,
  },
})
