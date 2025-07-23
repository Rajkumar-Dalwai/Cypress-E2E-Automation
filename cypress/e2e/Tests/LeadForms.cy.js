import LeadFormPage from '../Pages/LeadFormPage';
import '../../support/commands';

describe('Lead Form Tests', () => {

  /*it('should submit new tractor lead form on Homepage- 1', () => {
    cy.visit(Cypress.env('baseUrl'));
    LeadFormPage.clickCtpHpTractorsIn2025();
    cy.submitNewTractorLeadForm(0);
  });

  it('should submit new tractor lead form on Homepage- 2', () => {
    cy.visit(Cypress.env('baseUrl'));
    LeadFormPage.clickCtpHpTractorsByBudget();
    cy.submitNewTractorLeadForm(1);
  }); 

  it('should submit new tractor lead form on Homepage- 3', () => {
    cy.visit(Cypress.env('baseUrl'));
    LeadFormPage.clickCtpHpMiniTractors();
    cy.submitNewTractorLeadForm(2);
  }); 

  it('should submit new tractor lead form on Listing Page', () => {
    cy.visit(Cypress.env('baseUrl')+'tractors/');
    cy.closeFlashPopupIfPresent();
    LeadFormPage.clickCtpLpNewTractors1();
    cy.submitNewTractorLeadForm(3);
  }); 

  it('should submit new tractor lead form on Brand Listing Page', () => {
    cy.visit(Cypress.env('baseUrl')+'massey-ferguson-tractor/');
    cy.closeFlashPopupIfPresent();
    LeadFormPage.clickCtpLpNewTractors2();
    cy.submitNewTractorLeadForm(4);
  }); 

  it('should submit new tractor lead form on Product Detail Page', () => {
    cy.visit(Cypress.env('baseUrl')+'captain-tractor/200-di-ls/');
    cy.closePDPFlashPopupIfPresent();
    LeadFormPage.clickCtpPdpNtHeroSection();
    cy.submitNewTractorLeadForm(5);
  }); 

  it('should submit new tractor lead form on EMI Calculator Page', () => {
    cy.visit(Cypress.env('baseUrl')+'tractor-loan-emi-calculator/');
    LeadFormPage.clickCtpEMIPage();
    cy.submitNewTractorLeadForm(6);
  }); 

  it('should submit Sell Used Tractor lead form', () => {
    cy.visit(Cypress.env('baseUrl') + 'sell-used-tractor/');

    cy.fixture('Test-Data/Lead-Test-Data/TestData.json').then((testData) => {
      const dataSet = testData.UsedTractorTestData[0]; // Adjust index as needed

      LeadFormPage.fillSutLocation(dataSet.location);
      LeadFormPage.selectSutLocationSuggestion();
      LeadFormPage.fillSutUserName(dataSet.name);
      LeadFormPage.fillSutUserMobile(dataSet.mobile);
      LeadFormPage.clickSutSubmitBtn1();
      LeadFormPage.selectSutBrand(dataSet.brand);
      LeadFormPage.selectSutModel(dataSet.model);
      LeadFormPage.selectSutYear(dataSet.year);
      LeadFormPage.clickSutStep1Continue();
      LeadFormPage.selectSutEngineCondition(dataSet.engineCondition);
      LeadFormPage.selectSutTyreCondition(dataSet.tyreCondition);
      LeadFormPage.fillSutEngineHours(dataSet.engineHours);
      LeadFormPage.clickSutStep2Continue();
      // For file upload, ensure cypress-file-upload is installed and configured
      LeadFormPage.uploadSutImage1('/Test-Data/File-Uploads/atlassian.png', { force: true });
      LeadFormPage.uploadSutImage2('/Test-Data/File-Uploads/atlassian.png', { force: true });
      LeadFormPage.clickSutStep3Continue();
      LeadFormPage.clickSutFinalSubmit();

      LeadFormPage.closeSutThankModal(); // Optionally, validate success modal or toast
    });
  }); */

  it('should submit Sell Used Implements lead form', () => {
    cy.visit(Cypress.env('baseUrl') + 'sell/farm-implements/');

    cy.fixture('Test-Data/Lead-Test-Data/TestData.json').then((testData) => {
      const dataSet = testData.UsedTractorTestData[1]; // Adjust index as needed

      LeadFormPage.selectSuiCategory(dataSet.category);
      LeadFormPage.selectSuiBrand(dataSet.brand);
      LeadFormPage.fillSuiModelName(dataSet.modelName);
      LeadFormPage.selectSuiYear(dataSet.year);
      LeadFormPage.clickSuiContinue1();

      LeadFormPage.fillSuiOwnerName(dataSet.ownerName);
      LeadFormPage.fillSuiPrice(dataSet.price);
      LeadFormPage.fillSuiDescription(dataSet.description);
      LeadFormPage.clickSuiContinue2();

      LeadFormPage.uploadSuiImage1('/Test-Data/File-Uploads/atlassian.png', { force: true });
      cy.wait(2000);
      LeadFormPage.uploadSuiImage2('/Test-Data/File-Uploads/atlassian.png', { force: true });
      cy.wait(2000);
      LeadFormPage.clickSuiContinue3();

      LeadFormPage.fillSuiContactName(dataSet.contactName);
      LeadFormPage.fillSuiContactMobile(dataSet.contactMobile);
      LeadFormPage.selectSuiState(dataSet.state);
      LeadFormPage.selectSuiDistrict(dataSet.district);
      LeadFormPage.selectSuiTehsil(dataSet.tehsil);
      LeadFormPage.fillSuiPincode(dataSet.pincode);
      LeadFormPage.clickSuiFinalSubmit();

      // Optionally, validate success modal or toast
      // LeadFormPage.closeSutThankModal();
    });
  });

});