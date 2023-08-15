describe('crypto page', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="Cryptocurrencies"]').first().click();
    cy.get('input[type="email"]').should('exist').type('anas599@yahoo.com');
    cy.get('input[type="password"]').should('exist').type('111111');
    cy.get('input[type="password"]').type('{enter}');
    cy.url().should('include', '/Cryptocurrencies');
    cy.get('p').should('have.length.at.least', 1);
  });
});
