

import {now}  from  './../../../lib/getBahndeTimeDate'  //geht jetzt auf Lab
// var expect = require('expect.js');
// C:\Users\Lap126\Documents\auticon\Lern\Testautomatisierung\CY\CyLern\cypress\integration\MartinLern\Felder
// C:\Users\Lap126\Documents\auticon\Lern\Testautomatisierung\CY\CyLern\cypress\LIB
var dateAndTime = now() 	// getBahndeTimeDate.now
var actDate = dateAndTime.date
var actTime = dateAndTime.time

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
  
  it('departTown', () => { // GEHT: in Var. speichern 
	let departTown = cy.get('input[id="js-auskunft-autocomplete-from"]')
	departTown.should('have.value','')
	departTown.type('Berlin').should('have.value','Berlin').end
  })
  
  it('destTown', () => { // geht nicht: Var re-use. Vor jeder Aktion neu
	let destTown = cy.get('#js-auskunft-autocomplete-to')
	destTown.should('have.value','')
	destTown.type('Minden').should('have.value','Minden').end
  })
  
  it('Calender departDate at start not visible', () => { 
	cy.get('.flatpickr-current-month', { timeout: 1000 }).should('be.not.visible');
  })
  
  it('calenderVisible_afterClick_departDate', () => { 
	let departDate = cy.get('input[id="qf-date"]')	
	departDate.click()
	cy.get('.flatpickr-current-month', { timeout: 1000 }).should('be.visible');
  })
  
  it('picking_Today', () => { 
	let todayMonthPicker = cy.get('.flatpickr-current-month')
	let todayDate = todayMonthPicker.get('.today').eq(0); //ok
	todayDate.click()
	let bahndateObj = cy.get('#qf-date')
	bahndateObj.should('have.value', actDate)
	bahndateObj.should('have.value','Fr, 01.07.2022')
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
