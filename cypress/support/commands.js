// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//=========================== 🔧 Custom Commands : New Tractor Lead Form ============================//
import 'cypress-file-upload';
import LeadFormPage from '../e2e/Pages/LeadFormPage';

Cypress.Commands.add('submitNewTractorLeadForm', (index = 0) => {
  cy.fixture('Test-Data/Lead-Test-Data/TestData.json').then((testData) => {
    const dataSet = testData.NewTractorTestData[index];

    // Fill form fields using LeadFormPage actions
    LeadFormPage.fillCtpName('Testqa');
    LeadFormPage.fillCtpMobile(dataSet.mobile);
    LeadFormPage.selectCtpState(dataSet.state);
    LeadFormPage.selectCtpDistrict(dataSet.district);
    LeadFormPage.selectCtpTehsil(dataSet.tehsil);
    LeadFormPage.clickCtpMainCTAButton();

    // Close OTP popup if present
    cy.get('body').then(($body) => {
      if ($body.find('#VerifyMobileNumber > .modal-dialog > .modal-content').length > 0) {
        cy.get('#VerifyMobileNumber > .modal-dialog > .modal-content > .close > .filter-img').click();
      } else {
        cy.log('OTP popup did not appear.');
      }
    });

    // Submit final CTA
    LeadFormPage.elements.ctaReceiveSimilarOffers()
      .should('be.visible', { timeout: 20000 })
      .click();

    // Validate toast message
    LeadFormPage.elements.finalValidationToast()
      .should('contain.text', 'Thank you for submitting your request');
  });
});

// =========================🔧 Custom Commands : To close Flash Popup ========================================//

Cypress.Commands.add('closeFlashPopupIfPresent', () => {
  cy.scrollTo('bottom', { duration: 1000 }); // Scroll down by 1000px
  cy.get('body').then($body => {
    if ($body.find('#flashPopupModal:visible').length > 0) {
      cy.get('.filter-img1').click({ force: true });
      cy.log('Flash popup was present and closed.');
    } else {
      cy.log('Flash popup not present.');
    }
  });
});

// =========================🔧 Custom Commands : To close PDP Flash Popup ========================================//

Cypress.Commands.add('closePDPFlashPopupIfPresent', () => {
  cy.scrollTo(0, 2000, { duration: 1000 }); // Scroll down by 1000px
  cy.get('body').then($body => {
    if ($body.find('.list-content > .modal-body:visible').length > 0) {
      cy.get('.cross').click({ force: true });
      cy.log('Flash popup was present and closed.');
    } else {
      cy.log('Flash popup not present.');
    }
  });
});

