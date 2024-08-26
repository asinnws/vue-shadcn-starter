import { test, expect } from '~e2e/fixtures/navigation';

test('navigates from home to about page on click', async ({ homePage, aboutPage }) => {
  await homePage.navigate();
  expect(await homePage.isReady()).toBe(true);

  await homePage.navigateToAboutPage();

  expect(await aboutPage.isReady()).toBe(true);

  await aboutPage.verifyRoute();
  await aboutPage.verifyAboutLinkIsCurrent();
});
