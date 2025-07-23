class LeadFormPage {

  //======================== 🔍 Locators =======================//

  elements = {
    // New Tractor Lead Form CTAs
    ctpHpTractorsIn2024: () => cy.get("#popularnew > .section-css-slider > :nth-child(2) .card_initiate"),
    ctpHpTractorsByBudget: () => cy.get("#budget3 > .section-css-slider > :nth-child(2) .card_initiate"),
    ctpHpMiniTractors: () => cy.get(".container-mid > .section-css-slider > :nth-child(2) .card_initiate"),
    ctpLpNewTractors1: () => cy.get(":nth-child(6) > .product-card-main > .product-card-anchor > .card_initiate"),
    ctpLpNewTractors2: () => cy.get(":nth-child(6) > .product-card-main > .product-card-anchor > .card_initiate"),
    ctpPdpNtHeroSection: () => cy.get(".cta-wrapper > .submitBtnNew"),
    ctpPdpNtSimilarSection: () => cy.get(":nth-child(1) > .product-card-main > .product-card-anchor > .card_initiate"),
    ctpEMIPage: () => cy.xpath("(//span[@class='card_initiate ellipsis bg-blue-color boldfont text-center px-2 rounded text-capitalize transition cursor transition requestModal'][normalize-space()='Check Tractor Price'])[1]"),

    // New Tractor Lead Form Fields
    ctpNameInput: () => cy.get("#GetOnRoadPrice > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(1) > .form-control"),
    ctpMobileInput: () => cy.get(".modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(2) > .form-control"),
    ctpStateDropdown: () => cy.get("#states"),
    ctpDistrictDropdown: () => cy.get("#gorp_form_dist_id"),
    ctpTehsilDropdown: () => cy.get("#gorp_form_village_id"),
    ctpMainCTAButton: () => cy.get("div#GetOnRoadPrice button.tractor_submit.fillBtn.w-100.text-white.boldfont.flashpopup.CTP-card"),
    ctaReceiveSimilarOffers: () => cy.get("#recom-form > .modal-footer > .btn"),
    finalValidationToast: () => cy.get(".ssss"),

    // Sell Used Tractor
    sutLocationInput: () => cy.get("#locationPlaceholder"),
    sutLocationSuggestion: () => cy.get("#locations > li > a"),
    sutUserName: () => cy.get("#userName"),
    sutUserMobile: () => cy.get("#userMobile"),
    sutSubmitBtn1: () => cy.get(".form-sell-btn2"),
    sutBrandDropdown: () => cy.get("#tractorBrand"),
    sutModelDropdown: () => cy.get("#tractorModal"),
    sutYearDropdown: () => cy.get("#tractorYear"),
    sutStep1Continue: () => cy.get("#step1 button.default-btn"),
    sutEngineCondition: () => cy.get("#tractorEnginConditions"),
    sutTyreCondition: () => cy.get("#tractorTyreConditions"),
    sutEngineHours: () => cy.get("#tractorEngineHours"),
    sutStep2Continue: () => cy.get("button[data-step='TRACTOR_CONDITION']"),
    sutImage1: () => cy.get("#image1"),
    sutImage2: () => cy.get("#image2"),
    sutStep3Continue: () => cy.get("#step3 button.default-btn"),
    sutFinalSubmit: () => cy.get("#dealbtn"),
    sutThankModalClose: () => cy.get(".thankModal-img"),
    sutCloseModal: () => cy.get(".close-request"),

    // Sell Used Implements
    suiCategoryDropdown: () => cy.get(".col-12 > .form-group > .form-control"),
    suiBrandDropdown: () => cy.get(":nth-child(2) > .form-group > .form-control"),
    suiModelName: () => cy.get("#model_name"),
    suiYearDropdown: () => cy.get(":nth-child(4) > .form-group > .form-control"),
    suiContinue1: () => cy.get("fieldset.ng-scope > .form-submit-btn"),
    suiOwnerName: () => cy.get(".col-12 > .form-group > .form-control"),
    suiPriceInput: () => cy.get(".input-group > .form-control"),
    suiDescription: () => cy.get(".row > :nth-child(3) > .form-group > .form-control"),
    suiContinue2: () => cy.get(".ng-scope > .form-submit-btn"),
    suiImage1: () => cy.get("#fileField0"),
    suiImage2: () => cy.get("#fileField1"),
    suiContinue3: () => cy.get("fieldset.ng-scope > .form-submit-btn"),
    suiContactName: () => cy.get(".row > :nth-child(1) > .form-group > .form-control"),
    suiContactMobile: () => cy.get(":nth-child(2) > .form-group > .form-control"),
    suiStateDropdown: () => cy.get(".row > :nth-child(3) > .form-group > .form-control"),
    suiDistrictDropdown: () => cy.get(":nth-child(4) > .form-group > .form-control"),
    suiTehsilDropdown: () => cy.get(":nth-child(5) > .form-group > .form-control"),
    suiPincodeInput: () => cy.get(".row > :nth-child(6) > .form-group > .form-control"),
    suiFinalSubmit: () => cy.get("fieldset.ng-scope > .form-submit-btn"),

    // Sell Used Harvester
    suhModelInput: () => cy.get(":nth-child(2) > .form-group > .form-control"),
    suhCropType: () => cy.get(".row > :nth-child(3) > .form-group > .form-control"),
    suhCuttingWidth: () => cy.get(":nth-child(4) > .form-group > .form-control"),
    suhDriveType: () => cy.get(":nth-child(5) > .form-group > .form-control"),
    suhBrandDropdown: () => cy.get(".col-12 > .form-group > .form-control"),
    suhContinue1: () => cy.get("fieldset.ng-scope > .form-submit-btn"),
    suhOwnerName: () => cy.get(".col-12 > .form-group > .form-control"),
    suhEngineHours: () => cy.get(":nth-child(2) > .form-group > .form-control"),
    suhYearDropdown: () => cy.get(".row > :nth-child(3) > .form-group > .form-control"),
    suhPriceInput: () => cy.get(".input-group > .form-control"),
    suhDescription: () => cy.get(":nth-child(5) > .form-group > .form-control"),
    suhImage1: () => cy.get("#fileField0"),
    suhImage2: () => cy.get("#fileField1"),
    suhContinue2: () => cy.get("fieldset.ng-scope > .form-submit-btn"),
    suhContactName: () => cy.get(".row > :nth-child(1) > .form-group > .form-control"),
    suhContactMobile: () => cy.get(":nth-child(2) > .form-group > .form-control"),
    suhStateDropdown: () => cy.get(".row > :nth-child(3) > .form-group > .form-control"),
    suhDistrictDropdown: () => cy.get(":nth-child(4) > .form-group > .form-control"),
    suhTehsilDropdown: () => cy.get(":nth-child(5) > .form-group > .form-control"),
    suhPincodeInput: () => cy.get(".row > :nth-child(6) > .form-group > .form-control"),
    suhFinalSubmit: () => cy.get("fieldset.ng-scope > .form-submit-btn"),
  };

  // ======================== ✅ Actions =======================//

  clickCtpHpTractorsIn2024() {
    this.elements.ctpHpTractorsIn2024().click();
  }

  fillCtpName(name) {
    this.elements.ctpNameInput().clear().type(name);
  }

  fillCtpMobile(mobile) {
    this.elements.ctpMobileInput().clear().type(mobile);
  }

  selectCtpState(state) {
    this.elements.ctpStateDropdown().select(state);
  }

  selectCtpDistrict(district) {
    this.elements.ctpDistrictDropdown().select(district);
  }

  selectCtpTehsil(tehsil) {
    this.elements.ctpTehsilDropdown().select(tehsil);
  }

  clickCtpMainCTAButton() {
    this.elements.ctpMainCTAButton().click();
  }

  // Add similar action methods for other sections as needed...

}

export default new LeadFormPage();