/// <reference types="cypress" />
  
context('DOM_Attributes', () => {
 /*  beforeEach(() => {
    cy.visit('https://auticon.de/')
  }) */

  // https://on.cypress.io/interacting-with-elements

  it('title', () => {
	// alert(Cypress.version) //geht 9.7.0
	cy.visit('https://dilbert.com/')
	cy.title().should('eq','Homepage | Dilbert by Scott Adams')
  })
  
  it('Button Einstellungen', () => {
	// alert(Cypress.version) //geht 9.7.0
	// cy.visit('https://dilbert.com/')
	
	cy.get('[data-cy="Einstellungen"]').click()
	
	/* cy.get('button.message-button')
		.contains('Einstellungen')
		.click() */
		
	cy.title().should('eq','Homepage | Dilbert by Scott Adams')
  })
  
 //<button title="Einstellungen" class="message-component message-button no-children focusable pm-button sp_choice_type_12 first-focusable-el" style="padding: 10px 15px; margin: 10px; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 20px; border-style: solid; font-size: 14px; font-weight: 600; color: rgb(55, 58, 60); font-family: arial, helvetica, sans-serif; width: auto; background: rgb(255, 255, 255);">Einstellungen</button>
  
})
