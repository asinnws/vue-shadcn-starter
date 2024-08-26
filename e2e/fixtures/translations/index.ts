import { test as base } from '@playwright/test';
import translationsFixture from './fixture';

type TranslationFixture = {
  translation: typeof translationsFixture;
};

export const test = base.extend<TranslationFixture>({
  translation: async ({ page }, use) => {
    await page.route('/locales/*', async (route) => {
      const json = translationsFixture;
      await route.fulfill({ json });
    });

    await use(translationsFixture);
  }
});

export { expect } from '@playwright/test';
