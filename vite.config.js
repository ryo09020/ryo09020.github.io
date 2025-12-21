import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  // 開発環境では '/'、本番環境（GitHub Pages）では '/ryo09020.github.io/' を使用
  base: process.env.NODE_ENV === 'production' ? '/ryo09020.github.io/' : '/',
})
