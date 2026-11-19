import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vite'
import projectConfig from './vite.config.js'

export default mergeConfig(projectConfig, defineConfig({
  base: '/backend/REACT/Day12/day12-site/',
  build: {
    outDir: '../day12-site',
    rolldownOptions: {
      input: fileURLToPath(new URL('./preview.html', import.meta.url)),
    },
  },
}))
