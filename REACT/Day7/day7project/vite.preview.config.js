import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vite'
import projectConfig from './vite.config.js'

export default mergeConfig(projectConfig, defineConfig({
  base: '/backend/REACT/Day7/day7-site/',
  build: {
    outDir: '../day7-site',
    rolldownOptions: {
      input: fileURLToPath(new URL('./preview.html', import.meta.url)),
    },
  },
}))
