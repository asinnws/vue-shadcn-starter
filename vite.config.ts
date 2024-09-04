import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import Vue from '@vitejs/plugin-vue';

import VueRouter from 'unplugin-vue-router/vite';
import Layouts from 'vite-plugin-vue-layouts';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const ENV_PREFIX = 'APP_';
  const env = loadEnv(mode, process.cwd(), ENV_PREFIX);
  const DEFAULT_PORT = 3000;

  return {
    plugins: [
      VueRouter({
        dts: 'src/lib/types/typed-router.d.ts'
      }),
      Layouts(),
      Vue()
    ],
    envPrefix: ENV_PREFIX,
    server: {
      host: true,
      port: env.APP_PORT ? Number(env.APP_PORT) : DEFAULT_PORT
    },
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
  };
});
