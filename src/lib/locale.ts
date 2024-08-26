export const LOCALES = ['en', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const PERSISTED_LOCALE_KEY = 'i18n-locale';

export function getPersistedLocale(): Locale {
  const unparsedLocale = localStorage.getItem(PERSISTED_LOCALE_KEY);

  if (!unparsedLocale) {
    return DEFAULT_LOCALE;
  }

  const savedLocale: Locale = JSON.parse(unparsedLocale);

  if (!LOCALES.includes(savedLocale)) {
    return DEFAULT_LOCALE;
  }

  return savedLocale;
}

export function setPersistedLocale(locale: Locale) {
  localStorage.setItem(PERSISTED_LOCALE_KEY, JSON.stringify(locale));
}

export async function fetchLocaleMessages(locale: Locale) {
  try {
    const response = await fetch(`/locales/${locale}.json`);
    return await response.json();
  } catch (error) {
    console.error(`Failed to load locale ${locale}:`, error);
    throw error;
  }
}
