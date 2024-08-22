export const LOCALES = ['en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE = 'en';

export async function fetchLocaleMessages(locale: Locale) {
  try {
    const response = await fetch(`/locales/${locale}.json`);
    return await response.json();
  } catch (error) {
    console.error(`Failed to load locale ${locale}:`, error);
    throw error;
  }
}
