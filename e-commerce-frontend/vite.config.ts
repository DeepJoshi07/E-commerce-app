// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // optional: set dev server port
  },
  build: {
    target: 'esnext', // ensures modern JS output
    outDir: 'dist',
  },
});
