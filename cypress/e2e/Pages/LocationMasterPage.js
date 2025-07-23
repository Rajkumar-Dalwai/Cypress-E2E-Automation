class LocationMasterPage {

  //======================== 🔍 Locators =======================//

  elements = {
    // Common Elements
    stateDropdown: () => cy.get('#states'),
    stateDropdownOptions: () => cy.get('#states option'),
    imagestateDropdownOptions: () => cy.xpath("(//select[@id='states'])[1]/option"),
    tyreDropdownOptions: () => cy.get('#statesid2 option'),
    flashPopupStateOptions: () => cy.get('#statesflashPopupModal option'),
    popupCloseIcon: () => cy.get('.cross'),
    subsidyStateWidgets: () => cy.get('.brand-listing-wrapper.subsidy-location p.oneline'),

    // Page-Specific Elements
    secondNewTractorCard: () => cy.get("#popularnew > .section-css-slider > :nth-child(2) .card_initiate"),
    secondBrandTractorCard: () => cy.xpath("(//span[contains(@class, 'card_initiate')])[1]"),
    usedDetailCard: () => cy.xpath("(//span[contains(@class, 'card_initiate')])[2]"),
    compareCard: () => cy.xpath("(//span[text()='ధరను తనిఖీ చేయండి'])[1]"),
    firstTyreCard: () => cy.get(".new-equipment-card-anchor > .new-equipment-anchor"),
    firstImageGalleryThumb: () => cy.get(":nth-child(1) > .setCurrentIndex > .imageNew-inner > .cursor"),
    firstTractorCard: () => cy.get(":nth-child(1) > .product-card-main > .product-card-anchor > .card_initiate"),
    imageGalleryConfirmButton: () => cy.get("#modal-image-gallery-grid .checkBtn"),
    pdpFlashPopupTrigger: () => cy.get("div[class='modal-body'] span[title='ऑन रोड प्राइस']"),
    emiCalcTractorCard: () => cy.xpath("(//span[@class='card_initiate ellipsis bg-blue-color boldfont text-center px-2 rounded text-capitalize transition cursor transition requestModal'][normalize-space()='Check Tractor Price'])[1]"),
  };

  // ======================== ✅ Actions =======================//

  closePopupIfPresent() {
    this.elements.popupCloseIcon().then($el => {
      if ($el.is(':visible')) {
        cy.wrap($el).click();
      }
    });
  }

  getDropdownOptionCount(optionsSelector) {
    // Pass a selector function, e.g. this.elements.stateDropdownOptions
    return optionsSelector().then($options => $options.length - 1);
  }
}

export default new LocationMasterPage();