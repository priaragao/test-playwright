import { test, expect } from "@playwright/test";
import { pegarValorJson } from "../resources/jsonHelper.js";
import { TestPage } from "../pages/testPage.js";

test("Caso de teste usando massa em JSON", async ({ page }) => {
  const SEQUENCIAL = 0;

  const url = pegarValorJson(SEQUENCIAL, "URL");
  const pesquisa = pegarValorJson(SEQUENCIAL, "pesquisa");

  const testPage = new TestPage(page);

  await testPage.acessarUrl(url);
  await testPage.pesquisar(pesquisa);

  await expect(page).toHaveURL(/google\.com/);
});

// import massa from '../testdata/massa.json';

// massa.forEach((dados, index) => {
//   test(`Teste com massa ${index}`, async ({ page }) => {
//     const testPage = new TestPage(page);

//     await testPage.acessarUrl(dados.URL);
//     await testPage.pesquisar(dados.pesquisa);
//   });
// });
