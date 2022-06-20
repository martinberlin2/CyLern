/// <reference types="cypress" />
  
context('DOM_Attributes', () => {
 /*  beforeEach(() => {
    cy.visit('https://auticon.de/')
  }) */

  // https://on.cypress.io/interacting-with-elements

  it('title', () => {
	// alert(Cypress.version) //geht 9.7.0
	cy.visit('https://auticon.de/')
	cy.title().should('eq','Home - auticon')
  })
  
  it('titleProjekte', () => {
	cy.visit('https://auticon.de/projekte-services/')
	cy.title().should('eq','Projekte & Services - auticon')
	alert(cy.title())
  })
  
})
