import { expect, Page } from '@playwright/test';

export class HomePage {
  constructor(
    private readonly page: Page,
    private readonly translations: { headingTitle: string; aboutLinkTitle: string }
  ) {}

  async navigate() {
    await this.page.goto('/');
  }

  async navigateToAboutPage() {
    const aboutLink = this.page.getByRole('link', { name: this.translations.aboutLinkTitle });
    expect(aboutLink).not.toHaveAttribute('aria-current', 'page');

    await aboutLink.click();
  }

  private async getPageHeading() {
    return this.page.getByRole('heading', { name: this.translations.headingTitle });
  }

  async isReady() {
    const heading = await this.getPageHeading();
    await heading.waitFor();

    return heading.isVisible();
  }
}
