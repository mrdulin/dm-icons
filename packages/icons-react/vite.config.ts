/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { globSync } from 'glob';
import url from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json', rollupTypes: true })],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/icons/index.ts'),
      fileName: (format, fileName) => {
        const extension = format === 'cjs' ? 'js' : 'mjs';
        return `${fileName}.${extension}`;
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync('src/icons/**/*.{ts,tsx}').map((file) => [
          path.relative('src', file.slice(0, file.length - path.extname(file).length)),
          url.fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
      plugins: [
        resolve(),
        babel({
          exclude: 'node_modules',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          babelHelpers: 'bundled',
          plugins: [['@babel/plugin-transform-object-rest-spread', { useBuiltIns: true }]],
        }),
      ],
    },
  },
});
