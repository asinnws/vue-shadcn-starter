import type { App } from 'vue';
import { provideTranslation } from './i18n';
import { provideRouter } from './router';
import { provideStore } from './store';

export function applyProviders(app: App) {
  const providers = [provideStore, provideRouter, provideTranslation];

  type Provider = ReturnType<(typeof providers)[number]>;

  type ProvidersContext = {
    [P in Provider as keyof P]: P[keyof P];
  };

  const context = {} as ProvidersContext;

  providers.forEach((provide) => {
    const provider = provide(app);
    Object.assign(context, provider);
  });

  return { app, context };
}
