// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('captureApiScreenshot', (request, response) => {
    cy.visit('cypress/support/api-visualizer.html').then((win) => {
      const doc = win.document;
      
      doc.getElementById('request').textContent = JSON.stringify(request, null, 2);
      doc.getElementById('status').textContent = response.status;
      doc.getElementById('response').textContent = JSON.stringify(response.body, null, 2);
  
      cy.wait(500); // Esperar um pouco para garantir que o conteúdo seja renderizado
  
      cy.screenshot('api-request'); // Captura a tela
    });
  });
  