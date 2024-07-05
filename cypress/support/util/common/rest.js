/// <reference types="cypress"/>

class rest {
    requestRestFull(reqType, uri, path, log = true) {
        const resquestOption = {
            method: reqType,
            url: uri + path,
            failOnStatusCode: false,
            log: log
        }
        cy.request(resquestOption).as('response_endpoint')

        cy.get('@response_endpoint').then(response => {
            cy.captureApiScreenshot(resquestOption, response)
        })
    }
}
export default rest
