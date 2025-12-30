import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mangshi-poster/', // GitHub Pages 部署路径，如果用自定义域名则改为 '/'
})
