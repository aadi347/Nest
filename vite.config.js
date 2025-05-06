import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Set the default port
    strictPort: true, //if 5175 is busy, FAIL instead of switching to another port
  },
})
