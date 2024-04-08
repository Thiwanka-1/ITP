import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Change the port to 3000
    proxy: {
      '/api': 
      {
        target: 'http://localhost:8070',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
