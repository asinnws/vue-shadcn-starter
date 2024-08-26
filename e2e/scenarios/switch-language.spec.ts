import { test, expect } from '~e2e/fixtures/translations';
import { PERSISTED_LOCALE_KEY } from '~src/lib/locale';

test('should change language and save it in local storage', async ({ page, translation }) => {
  console.log('open the home page');
  await page.goto('/');

  console.log('find the select box and open it');
  await page.click('button[role="combobox"]');
  await page.getByRole('listbox').waitFor();

  console.log('select an option value');
  const optionToSelect = page.getByRole('option', { name: translation.common.locales.ru });
  const locale = await optionToSelect.getAttribute('data-value');
  await optionToSelect.click();

  async function getPersistedLocale() {
    return page.evaluate((key) => JSON.parse(localStorage.getItem(key) || 'null'), PERSISTED_LOCALE_KEY);
  }

  async function verifyLocaleIsApplied() {
    await expect(page.locator('button[role="combobox"]')).toHaveText(translation.common.locales.ru);
    expect(await getPersistedLocale()).toBe(locale);
  }

  console.log('verify locale is applied and saved in the local storage');
  await verifyLocaleIsApplied();

  await page.reload();

  console.log('verify locale is persisted and grabbed from the local storage');
  await verifyLocaleIsApplied();
});
