import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,      // Теперь будет http://localhost:3000
    host: true       // Позволит заходить по твоему локальному IP (например, 192.168.x.x)
  }
})
