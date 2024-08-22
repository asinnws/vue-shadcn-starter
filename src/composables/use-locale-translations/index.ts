import { fetchLocaleMessages, type Locale } from '@/lib/locale';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function useLocaleTranslations() {
  const { locale, setLocaleMessage, availableLocales } = useI18n();

  const languageModel = computed({
    get() {
      return locale.value as Locale;
    },
    async set(newLocale) {
      if (!availableLocales.includes(newLocale)) {
        const messages = await fetchLocaleMessages(newLocale);
        availableLocales.push(newLocale);
        setLocaleMessage(newLocale, messages);
      }

      locale.value = newLocale;
    }
  });

  return languageModel;
}
