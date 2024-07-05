import cadastrarListaTrello_appDriver from "./cadastrarListaTrello_appDriver"
const cadastarLista = new cadastrarListaTrello_appDriver


Given("que possuo um board e credenciais ja existe", () => {
    cadastarLista.associoUmBoardAUmaLista()

})

When("crio a lista", () => {
    cadastarLista.criaUmaLista()
})

Then("valido que a lista foi criada com sucesso", () => {
    cadastarLista.validarStatusCode(200)
    cadastarLista.validarListaCriada()
})

Given("que possuo um board e credenciais invalidas", () => {
    cadastarLista.associarUmBoardInvalido()
})

Then("valido mensagem de erro", () => {
    cadastarLista.validarStatusCode(400)
    cadastarLista.validarErro()
})