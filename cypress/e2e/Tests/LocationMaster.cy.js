import LocationMasterPage from '../Pages/LocationMasterPage';

describe('Location Master Tests', () => {
  it('should select a state from dropdown', () => {
    cy.visit(Cypress.env('baseUrl') + 'some-location-url');
    LocationMasterPage.elements.stateDropdown().select('Maharashtra');
    LocationMasterPage.elements.stateDropdown().should('have.value', 'Maharashtra');
  });

  it('should close popup if present', () => {
    cy.visit(Cypress.env('baseUrl'));
    LocationMasterPage.closePopupIfPresent();
    // Add assertion for popup closed
  });
});