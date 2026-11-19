import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vite'
import projectConfig from './vite.config.js'

export default mergeConfig(projectConfig, defineConfig({
  base: '/backend/REACT/Day9/day9-site/',
  build: {
    outDir: '../day9-site',
    rolldownOptions: {
      input: fileURLToPath(new URL('./preview.html', import.meta.url)),
    },
  },
}))
