describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="contact"]').first().click();

    cy.url().should('include', '/contact');

    cy.get('h2').contains('Contact Us');
    cy.get('input');
    cy.get('p').contains(
      'Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.',
    );
    cy.get('button').contains('Send message');
  });
});
