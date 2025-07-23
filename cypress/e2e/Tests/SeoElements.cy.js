import SeoElementsPage from '../Pages/SeoElementsPage';

describe('SEO Elements Tests', () => {
  it('should validate H1 and meta description', () => {
    cy.visit(Cypress.env('baseUrl'));
    SeoElementsPage.getH1Text().then(text => {
      expect(text).to.not.be.empty;
    });
    SeoElementsPage.getMetaDescription().then(desc => {
      expect(desc).to.not.be.empty;
    });
  });

  it('should validate breadcrumb text', () => {
    cy.visit(Cypress.env('baseUrl'));
    SeoElementsPage.getBreadcrumbText().then(breadcrumb => {
      expect(breadcrumb).to.include('>');
    });
  });
});