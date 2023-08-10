describe('Home', () => {
  it('should render navbar and top3 crypto', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Track your Cryptocurrency profits easier');
    cy.get('div').contains('Top 3 Cryptocurrencies');
    cy.get('h3').contains('Bitcoin');
    cy.get('h3').contains('Ethereum');
    cy.get('h3').contains('Tether USDt');
    cy.get('p').should('have.class', 'p-3');
    cy.get('p').contains('Volume 24h: ');
    cy.get('p').contains('Total supply:');
    cy.get('p').contains('Circulating supply:');
    cy.get('button').contains('Buy now!');
    cy.get('div').contains('Features');
    cy.get('h2').contains('Stay Ahead with Crypto Prices & Volume');
    cy.get('img').should('have.attr', 'src');
  });
});
