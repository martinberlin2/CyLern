/// <reference types="cypress" />

Cypress.Commands.add('customLog', (message) => {
    Cypress.log({
        name: 'LOG',
        // message: '[' + new Date().toTimeString()+ '] ' + message
		message: '[' + new Date().toDateString()+ '] ' + message
    });
}); 
// Cypress.Commands geben Promise zurück


// So, 26.06.2022
Cypress.Commands.add('getToday', () => {
	var today = new Date().toDateString().toString()
	alert(today + " ImCommand")   // Sun Jun 26 2022
	return today;	
}); 

/* Syntax them
then(() => {
    cy.log("Arg: " + arg);
  })
 */
context('WhatIsNow', () => {
 /*  beforeEach(() => {
    cy.visit('https://auticon.de/')
  }) */

  // https://on.cypress.io/interacting-with-elements


	it('picking_Today', () => { 
		let today = "init"
		alert(today + " vorher") 
		today = cy.getToday() 
		.then(() => {
			alert(today + " AufrufCommand");
		}) 
		 
		/* 
		.then(alert(today + " AufrufCommand"), 
			alert(today + " PromiseFailed")) */
		alert(today + " danach nochmal")
		//expect(now).to.be.a('string')
		//expect(now).to.be.a('string')
	})

 
 
  xit('picking_Today', () => { 
	let todayMonth = cy.get('.flatpickr-current-month')
	let todayDate = todayMonth.get('.today').eq(0); //ok
	todayDate.click()
	let todate = cy.get('#qf-date') 
	//alert(todate)
	todate.should('have.value','So, 26.06.2022')
  })
 
})
