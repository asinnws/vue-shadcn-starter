import { HomePage } from '~e2e/page-objects/home-page';
import { AboutPage } from '~e2e/page-objects/about-page';
import { test as base } from '~e2e/fixtures/translations';

type NavigationFixture = {
  homePage: HomePage;
  aboutPage: AboutPage;
};

export const test = base.extend<NavigationFixture>({
  homePage: async ({ page, translation }, use) => {
    const pageTranslations = {
      headingTitle: translation.pages.home.title,
      aboutLinkTitle: translation.common.links.about
    };

    await use(new HomePage(page, pageTranslations));
  },

  aboutPage: async ({ page, translation }, use) => {
    const pageTranslations = {
      headingTitle: translation.pages.about.title,
      aboutLinkTitle: translation.common.links.about
    };

    await use(new AboutPage(page, pageTranslations));
  }
});

export { expect } from '@playwright/test';
