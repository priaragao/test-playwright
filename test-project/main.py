from playwright.sync_api import sync_playwright
import time

with sync_playwright() as pw:
    navegador = pw.chromium.launch(headless=False) # se eu quiser que ele mostre o navegador
    # navegador = pw.chromium.launch()

    # para abrir mais de 1 página, é preciso criar um context
    contexto = navegador.new_context()

    # abrir o navegador
    # pagina = navegador.new_page()

    # abrir mais de 1 página no navegador
    pagina = contexto.new_page()

    # navegar para uma página
    pagina.goto("https://demoqa.com/browser-windows")


    # se eu quiser abrir outra pagina  em branco manualmente eu consigo tambem
    # pagina2 = contexto.new_page()


    # pegar infors da página
    print(pagina.title())

    # selecionar um elemento na tela
    # 1ª forma usando xpath -> Não recomenanda pelo playwright
    # pagina.locator('xpath= /html/body/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div/div[2]/div/ul/li[1]/span/a/img').click

    # 2ª forma usando get_by -> mais recomendada
    # pagina.get_by_role("link", name="Caixas da Amazon").click()
    botao = pagina.get_by_role("button", name="New Tab")
    with contexto.expect_page() as pagina2_info:
        botao.click()

 

    
    # selecionar vários elementos
    # divisorias = pagina.locator("div").all()
    # links = pagina.get_by_role("link").all()
    # for link in links:
    #     print(link)
    
    # nova página -> criar contextos e depois:
    pagina2 = pagina2_info.value
    pagina2.goto("https://demoqa.com/automation-practice-form")


    # preencher formulário
    pagina2.get_by_role("textbox", name="First Name").fill("João Silva")


    time.sleep(4) #nao pe recomendado colocar time, porque ele é autogerenciavel
    navegador.close()
