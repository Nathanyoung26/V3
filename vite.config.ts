import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    hmr: {
      clientPort: 443,
      host: 'localhost',
      protocol: 'wss'
    }
  },
  preview: {
    port: 5173,
    host: true
  }
});