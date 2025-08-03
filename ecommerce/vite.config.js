import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    tailwindcss(),
  )],
  server: {
    proxy: {
      '/api': 'https://e-commerce-app-vkmh.onrender.com', // Your backend port
    }
  }
});
