import PageRedirectionPage from '../Pages/PageRedirectionPage';

describe('Page Redirection Tests', () => {
  it('should click header link', () => {
    cy.visit(Cypress.env('baseUrl'));
    PageRedirectionPage.clickHeaderLink(0);
    // Add assertion for redirection
  });

  it('should click footer link', () => {
    cy.visit(Cypress.env('baseUrl'));
    PageRedirectionPage.clickFooterLink(0);
    // Add assertion for redirection
  });
});