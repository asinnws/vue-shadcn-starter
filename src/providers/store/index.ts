import type { App } from 'vue';
import { createPinia } from 'pinia';

export function provideStore(app: App) {
  const store = createPinia();

  app.use(store);

  return { store };
}
