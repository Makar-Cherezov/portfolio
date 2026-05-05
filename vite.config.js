import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/', // <--- Добавь эту строчку (слэши по краям обязательны!)
  plugins: [
    react(),
    tailwindcss(),
  ],
})