import './assets/css/base.css';

import { createApp } from 'vue';

import App from './App.vue';
import { applyProviders } from './providers';
import { fetchLocaleMessages, type Locale } from './lib/locale';

(async () => {
  const { app, context } = applyProviders(createApp(App));

  const locale = context.i18n.global.locale.value as Locale;

  const messages = await fetchLocaleMessages(locale);
  context.i18n.global.setLocaleMessage(locale, messages);

  app.mount('#app');
})();
