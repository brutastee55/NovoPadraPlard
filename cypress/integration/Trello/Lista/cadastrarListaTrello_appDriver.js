import restFull from '../../../support/util/common/rest'
import CadastrarListaTrelloModel from '../../../integration/Trello/Lista/cadastrarListaTrello_model'
const restfull = new restFull
const cadastrarListaTrelloModel = new CadastrarListaTrelloModel
let key
let token
let idBoard
let nome
let path

class cadastrarLista {

    associoUmBoardAUmaLista() {
        nome = 'Bruno Teste'
        key = 'e385e6347369be467a41dcec9eb37945'
        token = 'daf4095434e4fd02ad302c145877c6dfa5305ac1f3c68f8a30e7627333a0b87f'
        idBoard = '62cc2a01cd7e3677dc5e045e'
        //path = `1/lists?name=${nome}&idBoard=${idBoard}&key=${key}&token=${token}`
        path = 'api/character/158'
    }

    associarUmBoardInvalido() {
        nome = 'Bruno Teste'
        key = 'e385e6347369be467a41dcec9eb37945'
        token = 'daf4095434e4fd02ad302c145877c6dfa5305ac1f3c68f8a30e7627333a0b87f'
        idBoard = '62cc2a01cddsffsfsdc5e045exx'
        //path = `1/lists?name=${nome}&idBoard=${idBoard}&key=${key}&token=${token}`
        path = 'api/character/1xx'
    }

    criaUmaLista() {
        //const url = 'https://api.trello.com/'
        const url = 'https://rickandmortyapi.com/'
        restfull.requestRestFull("GET", url, path)
    }

    validarStatusCode(value) {
        cy.get('@response_endpoint').then(response => {
            expect(response.status).to.equal(value)
        })
    }

    validarListaCriada() {
        cy.get('@response_endpoint').then(response => {
            //cadastrarListaTrelloModel.hasSameProperties(response)
            expect(cadastrarListaTrelloModel.validateResponseSucessul(response.body)).to.equal(true)
        })

    }

    validarErro() {
        cy.get('@response_endpoint').then(response => {
            //cadastrarListaTrelloModel.hasSameProperties(response)
            expect(response.body).to.equal('djsb')
        })
    }
}


export default cadastrarLista