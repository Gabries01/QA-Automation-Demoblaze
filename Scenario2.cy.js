it('Scenario 2', () => {
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
  
    //Select the laptop category
    cy.get('.list-group > #itemc').contains('Laptops').click()
    //Select a laptop
    cy.get('.card-title').contains('Sony vaio i5').click()   
    cy.url().should('include', '/prod.html?idp_=8')

    //Add laptop to cart
    cy.get('.btn.btn-success.btn-lg', { timeout: 10000 }).contains('Add to cart').should('be.visible')
    cy.get('.btn.btn-success.btn-lg').contains('Add to cart').click()

    //Go to cart
    cy.get('#cartur').click() 
    cy.url().should('include', '/cart.html')

    //Press place order button
    cy.get('.btn.btn-success').contains('Place Order').should('be.visible')
    cy.get('.btn.btn-success').contains('Place Order').click()
    cy.get('#orderModalLaber', { timeout: 10000 }).should('be.visible')

    //Fill in name and credit card (these are the only one truly required)
    cy.get('#name').type('noa')
    cy.get('#card').type('noa')

    //Place order
    cy.get('.btn.btn-primary').contains('Purchase').click()

    //Make sure the purchase was made
    cy.wait(3000)
    cy.get('h2').contains('Thank you for your purchase!')
    cy.get('.confirm.btn.btn-lg.btn-primary').contains('OK').should('be.visible')
    cy.get('.confirm.btn.btn-lg.btn-primary').contains('OK').click()
    cy.url().should('include', '/index.html')//this assert fails because the pressing of OK happens to fast
  })