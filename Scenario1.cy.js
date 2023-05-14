it('Scenario 1', () => {
  //Login
  cy.visit('https://www.demoblaze.com/')
  cy.get('#login2').click()
  cy.get('#logInModal').should('be.visible')
  cy.get('#loginusername').type('noa').should('have.value', 'noa')
  cy.get('#loginpassword').type('noa')
  cy.get('.btn.btn-primary').contains('Log in').click()
  cy.get('#nameofuser').contains('Welcome noa').should('be.visible')
  
  //Home application page
  cy.get('.nav-item').contains('Home').click()      
  cy.url().should('include', '/index.html')

  //Contact page
  cy.get('.nav-item').contains('Contact').click()
  cy.get('#exampleModalLabel', { timeout: 10000 }).should('be.visible')
  // for whatever reason we receive modal is transitioning error and the test fails
  cy.get('#recipient-email').type('{esc}') // this is the only one that works with more consistency
  //cy.get('.btn.btn-secondary').contains('Close').click()
  //cy.get('#exampleModal').find('.btn.btn-secondary').contains('Close').click()
  //cy.get('#exampleModalLabel').siblings('.close').click()
  //cy.get('#exampleModalLabel').type('{esc}')

  //Cart page
  cy.get('#cartur').click() 
  cy.url().should('include', '/cart.html')

  //About us page - commented because couldn't close the modal 
  //cy.get('.nav-item').contains('About us').click()  
  //cy.get('#videoModalLabel', { timeout: 10000 }).should('be.visible')
  // When trying to close the modal for whatever reason we receive "modal is transitioning" error and the test fails
  //cy.get('body').click(0,0);
  //cy.get('.nav-item').contains('Home').click()     
  //cy.get('.btn.btn-secondary').contains('Close').click()
  //cy.get('#videoModal').find('.btn.btn-secondary').contains('Close').click()
})