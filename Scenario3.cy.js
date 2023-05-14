it('Scanerio 3', () => {
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
  
    //Add a phone to cart
    cy.get('.list-group > #itemc').contains('Phones').click()
    cy.get('.card-title').contains('Nokia lumia 1520').click()   
    cy.url().should('include', '/prod.html?idp_=2')
    cy.get('.btn.btn-success.btn-lg', { timeout: 10000 }).contains('Add to cart').should('be.visible')
    cy.get('.btn.btn-success.btn-lg').contains('Add to cart').click()

    //Home application page
    cy.get('.nav-item').contains('Home').click()      
    cy.url().should('include', '/index.html')

    //Add a laptop to cart
    cy.get('.list-group > #itemc').contains('Laptops').click()
    cy.get('.card-title').contains('Sony vaio i5').click()   
    cy.url().should('include', '/prod.html?idp_=8')
    cy.get('.btn.btn-success.btn-lg', { timeout: 10000 }).contains('Add to cart').should('be.visible')
    cy.get('.btn.btn-success.btn-lg').contains('Add to cart').click()

    //Home application page
    cy.get('.nav-item').contains('Home').click()      
    cy.url().should('include', '/index.html')

    //Add a monitor to cart
    cy.get('.list-group > #itemc').contains('Monitors').click()
    cy.get('.card-title').contains('ASUS Full HD').click()   
    cy.url().should('include', '/prod.html?idp_=14')
    cy.get('.btn.btn-success.btn-lg', { timeout: 10000 }).contains('Add to cart').should('be.visible')
    cy.get('.btn.btn-success.btn-lg').contains('Add to cart').click()

    //Go to cart
    cy.get('#cartur').click() 
    cy.url().should('include', '/cart.html')

    //Delete the monitor
    cy.get('td').contains('ASUS Full HD').siblings('td').find('a').contains('Delete').click();

    //Press place order button
    cy.wait(3000)
    cy.get('.btn.btn-success').contains('Place Order').should('be.visible')
    cy.get('.btn.btn-success').contains('Place Order').click()
    cy.get('#orderModalLaber', { timeout: 10000 }).should('be.visible')

    //Fill in name and credit card (these are the only one truly required)
    cy.get('#name').type('noa')
    cy.get('#card').type('noa')

    //Place order
    cy.get('.btn.btn-primary').contains('Purchase').click()

    //Make sure the purchase was made
    cy.get('h2').contains('Thank you for your purchase!')
    cy.get('.confirm.btn.btn-lg.btn-primary').contains('OK').should('be.visible')
    cy.get('.confirm.btn.btn-lg.btn-primary').contains('OK').click()
    cy.url().should('include', '/index.html')//this assert fails because the pressing of OK happens to fast
  })