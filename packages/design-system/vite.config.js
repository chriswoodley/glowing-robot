import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      atoms: resolve(__dirname, 'src/atoms/'),
      molecules: resolve(__dirname, 'src/molecules/'),
      organisms: resolve(__dirname, 'src/organisms/'),
      templates: resolve(__dirname, 'src/templates/'),
      styles: resolve(__dirname, 'src/styles/'),
      utils: resolve(__dirname, 'src/utils/'),
      hooks: resolve(__dirname, 'src/hooks/'),
      icons: resolve(__dirname, 'src/icons/'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: (id) =>
        /^lodash/.test(id) ||
        ['react', 'react-dom', 'react/jsx-runtime', 'clsx'].includes(id),

      output: [
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: 'dist',
          exports: 'named',
          entryFileNames: (chunk) =>
            chunk.name === 'index' ? 'main.es.js' : '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name][extname]',
        },
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: 'dist',
          exports: 'named',
          entryFileNames: (chunk) =>
            chunk.name === 'index' ? 'main.cjs.js' : '[name].cjs',
          chunkFileNames: '[name].cjs',
          assetFileNames: '[name][extname]',
        },
      ],
    },
  },
});
