import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      base: '/dm-icons/',
      // resolve: {
      //   preserveSymlinks: true,
      // },
      optimizeDeps: { include: ['@d-matrix/icons-react'] },
      build: {
        commonjsOptions: {
          include: ['@d-matrix/icons-react'],
        },
      },
    };
  } else {
    return {
      plugins: [react()],
      base: '/dm-icons/',
      // resolve: {
      //   preserveSymlinks: true,
      // },
      optimizeDeps: { exclude: ['@d-matrix/icons-react'] },
    };
  }
});
