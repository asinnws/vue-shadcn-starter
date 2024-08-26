import { expect, Page } from '@playwright/test';

export class AboutPage {
  constructor(
    private readonly page: Page,
    private readonly translations: { headingTitle: string; aboutLinkTitle: string }
  ) {}

  private async getHeading() {
    return this.page.getByRole('heading', { name: this.translations.headingTitle });
  }

  private async getAboutLink() {
    return this.page.getByRole('link', { name: this.translations.aboutLinkTitle });
  }

  async isReady() {
    const heading = await this.getHeading();
    await heading.waitFor();

    return heading.isVisible();
  }

  async verifyAboutLinkIsCurrent() {
    const aboutLink = await this.getAboutLink();

    expect(aboutLink).toHaveAttribute('aria-current', 'page');
  }

  async verifyRoute() {
    const aboutLink = await this.getAboutLink();
    const href = await aboutLink.getAttribute('href');
    const { pathname } = new URL(this.page.url());

    expect(pathname).toBe(href);
  }
}
