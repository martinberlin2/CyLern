/// <reference types="cypress" />
  
context('DOM_Attributes', () => {
 /*  beforeEach(() => {
    cy.visit('https://auticon.de/')
  }) */

  // https://on.cypress.io/interacting-with-elements

  it('title', () => {
	// alert(Cypress.version) //geht 9.7.0
	cy.visit('https://dilbert.com/')
	// cy.title().should('eq','Homepage | Dilbert by Scott Adams')
  })
  
  // https://stackoverflow.com/questions/67458141/cypress-typeerror-window-parent-is-not-a-function
  
  GET 200 /wrapper/tcfv2/v1/gdpr/native-message?requestUUID=659fc183-b724-42b9-a7fb-20a25150314b&hasCsp=true&env=prod&consentLanguage=browserDefault&body={"accountId":305,"requestUUID":"659fc183-b724-42b9-a7fb-20a25150314b","propertyHref":"https://www.dilbert.com","euconsent":null,"meta":"{"mmsCookies":[],"resolved":null}","clientMMSOrigin":"https://cdn.privacy-mgmt.com","targetingParams":"{"type":"GDPR"}","campaignEnv":"prod","pubData":{}}
  
})
