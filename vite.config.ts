import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

import VueRouter from 'unplugin-vue-router/vite';
import Layouts from 'vite-plugin-vue-layouts';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    VueRouter({
      dts: 'src/lib/types/typed-router.d.ts'
    }),
    Layouts(),
    Vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  }
});
