/* eslint-env node */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoSlug = process.env.GITHUB_REPOSITORY ?? ''
const repoName = repoSlug.split('/')[1] ?? ''
const inferredBase = repoName.endsWith('.github.io') ? '/' : repoName ? `/${repoName}/` : '/'
const basePath = process.env.BASE_PATH ?? inferredBase

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hello/',
  plugins: [react()],
})
