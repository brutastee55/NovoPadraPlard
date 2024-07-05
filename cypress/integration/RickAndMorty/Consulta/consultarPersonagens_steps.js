import consultarPersonagens from "./consultarPersonagens_appDriver"
const consultar = new consultarPersonagens


Given("que possuo um personagem para consultar ${int}", (value) => {
    consultar.escolherPersonagem(value)
})

When("faço a consultar", () => {
    consultar.consultarPersonagensRickAndMorty()
})

Then("que os dados do personagem seja retornado", () => {
    consultar.validarStatusCode(200)
})