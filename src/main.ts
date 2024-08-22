import './assets/css/tailwind.css';

import { createApp } from 'vue';

import App from './App.vue';
import { applyProviders } from './providers';
import { fetchLocaleMessages, type Locale } from './lib/locale';

(async () => {
  const { app, context } = applyProviders(createApp(App));

  const messages = await fetchLocaleMessages(context.i18n.global.locale.value as Locale);
  context.i18n.global.setLocaleMessage(context.i18n.global.locale.value, messages);

  app.mount('#app');
})();
