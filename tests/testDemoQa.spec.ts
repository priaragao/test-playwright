import { test, chromium } from "@playwright/test";

test("abrir nova aba e preencher formulario", async () => {
  // abrir o navegador (mostrando a tela)
  const navegador = await chromium.launch({ headless: false });

  // criar contexto (equivalente ao new_context do Python)
  const contexto = await navegador.newContext();

  // abrir página
  const pagina = await contexto.newPage();

  // navegar para uma página
  //   await pagina.goto("https://demoqa.com/browser-windows");
  await pagina.goto("https://the-internet.herokuapp.com/windows");

  // pegar infos da página
  console.log(await pagina.title());

  // selecionar elemento
  //   const botao = pagina.getByRole("button", { name: "New Tab" });
  const botao = pagina.getByRole("link", { name: "Click Here" });

  // esperar abrir nova página
  const novaPaginaPromise = contexto.waitForEvent("page");
  await botao.click();
  const pagina2 = await novaPaginaPromise;

  await pagina2.waitForLoadState();

  // navegar na nova página
  //   await pagina2.goto("https://demoqa.com/automation-practice-form");
  await pagina2.goto("https://practice-automation.com/form-fields/");

  // preencher formulário
  //   await pagina2.getByRole("textbox", { name: "First Name" }).fill("João Silva");
  await pagina2.getByTestId("name-input").fill("João Silva");

  // esperar um pouco (não recomendado normalmente)
  await pagina2.waitForTimeout(4000);

  await navegador.close();
});
