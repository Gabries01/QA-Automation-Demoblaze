it('Scenario 6', () => {
    //Login
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#logInModal').should('be.visible')
    cy.get('#loginusername').type('noa').should('have.value', 'noa')
    cy.get('#loginpassword').type('noa')
    cy.get('.btn.btn-primary').contains('Log in').click()
    cy.get('#nameofuser').contains('Welcome noa').should('be.visible')

    //Log out
    cy.get('#logout2').click()
    cy.get('#login2').should('be.visible')
    cy.get('#signin2').should('be.visible')
})