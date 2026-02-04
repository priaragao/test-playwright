import { Page } from "@playwright/test";

export class TestPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async acessarUrl(url: string) {
    await this.page.goto(url);
  }

  async pesquisar(texto: string) {
    await this.page.fill('textarea[name="q"]', texto);
    await this.page.keyboard.press("Enter");
  }
}
