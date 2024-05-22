import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: '192.168.192.114', // Listen on all IP addresses
  //   port: 5173, // Adjust port if needed
  // },
  plugins: [react()],
})
