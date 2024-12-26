import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dm-icons/',
  optimizeDeps: { include: ['@d-matrix/icons-react'] },
  build: {
    commonjsOptions: {
      include: ['@d-matrix/icons-react'],
    },
  },
});
