it('Scenario 5 - Sign up', () => {
    //Sign up 
    cy.visit('https://www.demoblaze.com/')
    cy.get('#signin2').click()
    cy.get('#signInModal').should('be.visible')
    cy.get('#sign-username').type('test').should('have.value', 'test')
    cy.get('#sign-password').type('test')
    cy.get('.btn.btn-primary').contains('Sign up').click()
    // message: "This user is already exist"
   // cy.get('#nameofuser').contains('Welcome test').should('be.visible')

   //Home application page
  //cy.get('.nav-item').contains('Home').click()      
  cy.url().should('include', '/index.html')


})