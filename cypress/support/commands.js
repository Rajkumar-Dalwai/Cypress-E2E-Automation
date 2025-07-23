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
/*
import NewTractorLeadFormObjects from '../Pages/NewTractorLeadFormObjects';
import TestData from '../TestData/TestData';

 // ======================== ✅ New Tractor lead form Custom Command ===============================//

Cypress.Commands.add('submitNewTractorLeadForm', (index = 0) => {
  const dataSet = TestData.getSetByIndex(index);

  // Fill form fields
  NewTractorLeadFormObjects.getCTP_Name().first().type('Testqa', { force: true });
  cy.wait(2000);
  NewTractorLeadFormObjects.getCTP_MobileNo().type(dataSet.mobileNumber);
  NewTractorLeadFormObjects.selectState(dataSet.state);
  NewTractorLeadFormObjects.getCTP_District().select(dataSet.district);
  NewTractorLeadFormObjects.getCTP_Tehsil().select(dataSet.tehsil);
  NewTractorLeadFormObjects.getCTP_MainCTP().first().click();

  // Close OTP popup if present
  cy.get('body').then(($body) => {
    if ($body.find('#VerifyMobileNumber > .modal-dialog > .modal-content').length > 0) {
      cy.get('#VerifyMobileNumber > .modal-dialog > .modal-content > .close > .filter-img').click();
    } else {
      cy.log('OTP popup did not appear.');
    }
  });

  // Submit final CTA
  NewTractorLeadFormObjects.getCTA_ReceiveSimilarOffers()
    .should('be.visible', { timeout: 20000 })
    .click();

  // Validate toast message
  NewTractorLeadFormObjects.getFinalValidationToast()
    .should('contain.text', 'Thank you for submitting your request');
}); */

// ======================== ✅ Used Tractor lead form Custom Command ===============================//