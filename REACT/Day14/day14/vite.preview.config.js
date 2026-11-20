import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vite'
import projectConfig from './vite.config.js'

export default mergeConfig(projectConfig, defineConfig({
  base: '/backend/REACT/Day14/day14-site/',
  build: {
    copyPublicDir: false,
    outDir: '../day14-site',
    rolldownOptions: {
      input: fileURLToPath(new URL('./preview.html', import.meta.url)),
    },
  },
}))
