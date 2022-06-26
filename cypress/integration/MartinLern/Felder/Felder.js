/// <reference types="cypress" />
 
context('DOM_Attributes', () => {
 /*  beforeEach(() => {
    cy.visit('https://auticon.de/')
  }) */

  // https://on.cypress.io/interacting-with-elements

  it('title', () => {
	// alert(Cypress.version) //geht 9.7.0
	cy.visit('https://bahn.de/')
	cy.title().should('eq','DB Fahrplan, Auskunft, Tickets, informieren und buchen - Deutsche Bahn')
  })
  
    it('Calender at start not visible', () => { 
	cy.get('.flatpickr-current-month', { timeout: 1000 }).should('be.not.visible');
  })
  
  it('departTown', () => { // GEHT: in Var. speichern 
	let departTown = cy.get('input[id="js-auskunft-autocomplete-from"]')
	departTown.should('have.value','')
	departTown.type('Berlin').should('have.value','Berlin').end
  })
  
  it('destTown', () => { // geht nicht: Var re-use. Vor jeder Aktion neu
   
	let destTown = cy.get('#js-auskunft-autocomplete-to')
	destTown.type('Minden').should('have.value','Minden').end
  })
  
  it('departDate', () => { // GEHT: in Var. speichern 
	let departDate = cy.get('input[id="qf-date"]')
	departDate.click()
  })
  
  it('calenderVisible_entering_departDate', () => { 
	cy.get('.flatpickr-current-month', { timeout: 1000 }).should('be.visible');
  })
  
  it('picking_Today', () => { 
	let todayMonth = cy.get('.flatpickr-current-month')
	let todayDate = todayMonth.get('.today').eq(0); //ok
	todayDate.click()
	let todate = cy.get('#qf-date') 
	//alert(todate)
	todate.should('have.value','So, 26.06.2022')
  })
  
  it('departTimeField_has_actual_Time', () => { 
 /*   var dateobj =
   new Date('October 15, 1996 05:35:32');
 
   // Contents of above date object is converted
   // into a string using toString() function.
   var B = dateobj.toString();
 
   // Printing the converted string.
   document.write(B); */
    //---
	let actTime = cy.clock(now)
	let dateobj = new Date(actTime)
	let B = dateobj.toString();
	
	alert(B)
	document.write(B);
	
	let departTime = cy.get('input[id="qf-time"]')
	departTime.click()
  })
  
  
  
  
 /*   it('JS direct', () => { // Var reuse
    // var fromtownfeld = document.getElementById("js-auskunft-autocomplete-from");
	//fromtownfeld.should('have.value','XXBerlinx').end
	fromtown.should('have.value','XXBerlinx').end
  }) */
  //var button = document.getElementById("button");
  
  //<input id="js-auskunft-autocomplete-from" type="text" class="text label-inside from-ab autocomplete js-expand-tab-trigger" placeholder="Bahnhof / Haltestelle / Adresse" name="S" data-type="S" data-form="auskunft" autocomplete="off">
  
  // cy.get('button[id="category"]').click()
  
  //Find the element with id that starts with "local-"
  //cy.get('[id^=local-]')

})
