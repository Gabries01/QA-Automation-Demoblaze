it('Scenario 4', () => {
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

    //Fill in email,name and message 
    cy.get('#recipient-email').type('noa@gmail.com')
    cy.get('#recipient-name').type('noa')
    cy.get('#message-text').type('noa')

    
    //Press send message button
    cy.get('.btn.btn-primary').contains('Send message').click()
})