import { test, expect } from '@playwright/test';

test('navigates to the another page on click', async ({ page }) => {
  const localeFixture = {
    common: {
      greeting: 'Hello there!',
      links: {
        home: 'Home',
        about: 'About'
      },
      locales: {
        en: 'English',
        ru: 'Русский'
      },
      actions: {
        choose_language: 'Choose Language'
      }
    },

    pages: {
      home: {
        title: 'Home Page'
      },
      about: {
        title: 'About Page'
      },
      not_found: {
        title: 'Page is not Found',
        description: 'Page you are looking for does not exist',
        actions: {
          go_home: 'Go to the Home Page'
        }
      }
    }
  };

  await page.route('/locales/*', async (route) => {
    const json = localeFixture;
    await route.fulfill({ json });
  });

  await page.goto('/');
  await expect(page.getByRole('heading', { name: localeFixture.pages.home.title })).toBeVisible();

  const aboutPageLink = page.getByRole('link', { name: localeFixture.common.links.about });

  const aboutPageLinkHref = await aboutPageLink.getAttribute('href');

  await aboutPageLink.click();

  await expect(page.getByRole('heading', { name: localeFixture.pages.about.title })).toBeVisible();

  const { pathname } = new URL(page.url());

  expect(pathname).toBe(aboutPageLinkHref);
});
