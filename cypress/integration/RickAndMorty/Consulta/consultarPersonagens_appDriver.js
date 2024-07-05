import restFull from '../../../support/util/common/rest'
const restfull = new restFull
let path
class consultarPersonagens {
    escolherPersonagem(pe) {
        path = `api/character/${pe}`
    }

    consultarPersonagensRickAndMorty() {
        const url = 'https://rickandmortyapi.com/'
        restfull.requestRestFull("GET", url, path)
    }

    validarStatusCode(value) {
        cy.get('@response_endpoint').then(response => {
            expect(response.status).to.equal(value)
        })
    }

}
export default consultarPersonagens