import ComparePage from '../Pages/ComparePage';

describe('Compare Tests', () => {

it('verifyComparisonHeadingIsCorrect', () => {
  cy.visit(Cypress.env('baseUrl') + 'compare-tractors/');

  // Add first tractor
  ComparePage.clickAddTractorSlot(0);

  let brand1, model1, brand2, model2;

  ComparePage.getBrandNameByIndex(1)
    .then((brandText) => {
      brand1 = brandText;
      ComparePage.clickBrandByIndex(1);
      return ComparePage.clickFirstModelAndGetText();
    })
    .then((modelText) => {
      model1 = modelText;

      // Add second tractor
      return ComparePage.getBrandNameByIndex(2);
    })
    .then((brandText2) => {
      brand2 = brandText2;
      ComparePage.clickBrandByIndex(2);
      return ComparePage.clickFirstModelAndGetText();
    })
    .then((modelText2) => {
      model2 = modelText2;

      // Click Compare
      ComparePage.clickCompare();

      // Get comparison heading
      return ComparePage.getComparisonHeading();
    })
    .then((actualHeading) => {
      const expectedHeading = `${brand1} ${model1} vs ${brand2} ${model2} Comparison`;
      cy.log('✅ Expected: ' + expectedHeading);
      cy.log('✅ Actual: ' + actualHeading);
      expect(actualHeading).to.eq(expectedHeading);
    });
});


/*  it('verifyScrollToOtherInformationSectionOnTabClick', () => {
    cy.visit(Cypress.env('baseUrl') + 'compare-tractors/mahindra+575-di-xp-plus-vs-farmtrac+60-epi-t20-powermaxx/');

    // Wait and click on the "Other Information" tab
    ComparePage.elements.otherInfoTab().should('be.visible').click();

    // Wait for the "Other Information" section to be visible and scroll into view
    ComparePage.elements.otherInfoSection().should('be.visible').scrollIntoView();

    // Verify the section is in viewport
    ComparePage.elements.otherInfoSection().then($el => {
      const rect = $el[0].getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      expect(inView).to.be.true;
    });
  });*/

});