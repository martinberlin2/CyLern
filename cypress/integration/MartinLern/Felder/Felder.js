/// <reference types="cypress" />

import {now}  from  './../../../lib/getBahndeTimeDate'  //geht jetzt auf Lab
// var expect = require('expect.js');
// C:\Users\Lap126\Documents\auticon\Lern\Testautomatisierung\CY\CyLern\cypress\integration\MartinLern\Felder
// C:\Users\Lap126\Documents\auticon\Lern\Testautomatisierung\CY\CyLern\cypress\LIB


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

  it('getSystemTimeAndDate', () =>{
	  //import myFunc from ../../firstFolder/firstFile ; ./ ./ - this is the present working directory
	  
	//import getBahndeTimeDate from  ../../../../../lib      //\Cy\cypress\LIB
	var dateAndTime = now() 	// getBahndeTimeDate.now
	var bahndate = dateAndTime.date
	var bahntime = dateAndTime.time
	
	// let dateAndTime = now()  geht
	// alert('dateAndTime.date ' + bahndate)
	// alert('dateAndTime.time ' + bahntime)
	// expect(bahndate).'have.value','Di, 12.07.2022'  ??
	expect(bahndate).to.equal('Mi, 13.07.2022')
	expect(bahntime).to.be.a('string')

	//bahntime.should('be.a.string') geht nicht
  })

  
  it('picking_Today', () => { 
	var dateAndTime = now() 	// getBahndeTimeDate.now
	var bahndate = dateAndTime.date
	expect(bahndate).to.equal('Mi, 13.07.2022')
	expect(bahndate).to.satisfy((num) => { return num == 'Mi, 13.07.2022' })
  
	let todayMonth = cy.get('.flatpickr-current-month')
	let todayDate = todayMonth.get('.today').eq(0); //ok
	todayDate.click()
	let todate = cy.get('#qf-date')
		
	todate.should('have.value','Mi, 13.07.2022')
	todate.should('have.value',bahndate)
  })
  
  it('departTimeField_has_actual_Time', () => { 
	var dateAndTime = now() 	// getBahndeTimeDate.now
	var bahntime = dateAndTime.time
	// alert('dateAndTime.time ' + bahntime) //geht
	let departTimeField = cy.get('input[id="qf-time"]')
	departTimeField.should('have.value',bahntime)
	
	//departTimeField.click()
  })
  
  //Find the element with id that starts with "local-"
  //cy.get('[id^=local-]')

})
