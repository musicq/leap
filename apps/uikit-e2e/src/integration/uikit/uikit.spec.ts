describe('uikit: Uikit component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uikit--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to uikit!');
    });
});
