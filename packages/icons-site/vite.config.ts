import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import iconsReactPkg from '@d-matrix/icons-react/package.json' with { type: 'json' };

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  console.log('vite command:', command)
  const buildTimestamp = new Date().getTime();
  if (command === 'serve') {
    return {
      plugins: [react()],
      base: '/dm-icons/',
      define: {
        VITE_ICONS_REACT_PACKAGE_VERSION: JSON.stringify(iconsReactPkg.version),
        BUILD_TIMESTAMP: JSON.stringify(buildTimestamp)
      },
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
      define: {
        VITE_ICONS_REACT_PACKAGE_VERSION: JSON.stringify(iconsReactPkg.version),
        BUILD_TIMESTAMP: JSON.stringify(buildTimestamp)
      },
      // resolve: {
      //   preserveSymlinks: true,
      // },
      optimizeDeps: { exclude: ['@d-matrix/icons-react'] },
    };
  }
});
