import { DEFAULT_LOCALE, type Locale } from '@/lib/locale';
import type { App } from 'vue';
import { createI18n } from 'vue-i18n';

export function provideTranslation(app: App) {
  const i18n = createI18n({
    legacy: false,
    locale: DEFAULT_LOCALE as Locale,
    messages: {}
  });

  app.use(i18n);

  return { i18n };
}
