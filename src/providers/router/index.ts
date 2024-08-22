import { createRouter, createWebHistory } from 'vue-router';

import { routes, handleHotUpdate } from 'vue-router/auto-routes';
import { setupLayouts } from 'virtual:generated-layouts';
import type { App } from 'vue';

export function provideRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: setupLayouts(routes)
  });

  if (import.meta.hot) {
    handleHotUpdate(router);
  }

  app.use(router);

  return { router };
}
