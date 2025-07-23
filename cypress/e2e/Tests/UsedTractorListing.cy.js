import UsedTractorListingPage from '../Pages/UsedTractorListingPage';

describe('Used Tractor Listing Tests', () => {
  it('should apply price filter and validate prices', () => {
    cy.visit(Cypress.env('baseUrl') + 'used-tractors');
    UsedTractorListingPage.applyPriceFilter_0to2Lakh();
    UsedTractorListingPage.getAllPrices().then(prices => {
      prices.forEach(price => {
        expect(price).to.be.at.least(0).and.to.be.at.most(200000);
      });
    });
  });

  it('should sort prices low to high', () => {
    cy.visit(Cypress.env('baseUrl') + 'used-tractors');
    UsedTractorListingPage.sortByPriceLowToHigh();
    UsedTractorListingPage.arePricesSortedLowToHigh().then(isSorted => {
      expect(isSorted).to.be.true;
    });
  });
});