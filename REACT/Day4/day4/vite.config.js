import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/backend/REACT/Day4/day4-site/',
  build: {
    outDir: '../day4-site',
  },
  plugins: [react()],
})
