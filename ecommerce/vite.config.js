import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import dotenv from './dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    tailwindcss(),
  )],
  server: {
    proxy: {
      '/api': process.env.BACKEND_URL, // Your backend port
    }
  }
});
