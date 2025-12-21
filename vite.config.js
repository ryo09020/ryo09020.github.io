import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  // GitHub Pagesのユーザーサイト（username.github.io）の場合はbaseは'/'
  base: '/',
})
