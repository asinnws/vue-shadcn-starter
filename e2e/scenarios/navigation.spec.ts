import { test, expect } from '~e2e/fixtures/navigation';

test('navigates from home to about page on click', async ({ homePage, aboutPage }) => {
  console.log('navigate to the home page');
  await homePage.navigate();

  console.log('verify the home page is loaded correctly');
  expect(await homePage.isReady()).toBe(true);

  console.log('navigate to the about page');
  await homePage.navigateToAboutPage();

  console.log('verify the about page is loaded correctly');
  expect(await aboutPage.isReady()).toBe(true);

  console.log('verify the about page route matches about link and about link has aria-current="page"');
  await aboutPage.verifyRoute();
  await aboutPage.verifyAboutLinkIsCurrent();
});
