class UsedTractorListingPage {

  //======================== 🔍 Locators =======================//

  elements = {
    priceFilterDropdown: () => cy.xpath("//span[contains(text(),'Price')]"),
    priceOption_0to2Lakh: () => cy.xpath("//label[contains(text(),'0 Lakh - 2 Lakh')]"),
    priceOption_2to3Lakh: () => cy.xpath("//label[contains(text(),'2 Lakh - 3 Lakh')]"),
    brandFilterDropdown: () => cy.xpath("//span[contains(text(),'Brand')]"),
    brandOptionMahindra: () => cy.xpath("//label[contains(text(),'Mahindra')]"),
    modelFilterDropdown: () => cy.xpath("//span[contains(text(),'Model')]"),
    modelOption575DI: () => cy.xpath("(//label//span[contains(text(),'575 DI')])[1]"),
    applyFilterButton: () => cy.get('#apply_filter'),
    sortByDropdown: () => cy.get("input#gCityMob"),
    sortPriceLowToHigh: () => cy.xpath("//li[contains(text(),'Price - Low to High')]"),
    yearFilterDropdown: () => cy.xpath("//span[contains(text(),'Year')]"),
    yearOption2025: () => cy.xpath("//label[normalize-space()='2025']"),
    yearOption2011: () => cy.xpath("//label[normalize-space()='2011']"),
    priceElements: () => cy.get('.hotDeal-tractor-price'),
    listingTitleLinks: () => cy.get('div.hotDeal-tractor-content p.used-product-name a.weblink'),
    yearElements: () => cy.xpath("//span[contains(@class, 'oneline') and contains(text(),'Model')]"),
  };

  // ======================== ✅ Actions =======================//

  applyPriceFilter_0to2Lakh() {
    this.elements.priceFilterDropdown().click();
    this.elements.priceOption_0to2Lakh().click();
    this.elements.applyFilterButton().click();
  }

  applyPriceFilter_2to3Lakh() {
    this.elements.priceFilterDropdown().click();
    this.elements.priceOption_2to3Lakh().click();
    this.elements.applyFilterButton().click();
  }

  applyBrandModelFilter_Mahindra_575DI() {
    this.elements.brandFilterDropdown().click();
    this.elements.brandOptionMahindra().click();
    this.elements.modelFilterDropdown().click();
    this.elements.modelOption575DI().click();
    this.elements.applyFilterButton().click();
  }

  applyBrandFilter_Mahindra() {
    this.elements.brandFilterDropdown().click();
    this.elements.brandOptionMahindra().click();
    this.elements.applyFilterButton().click();
  }

  applyYearFilter_2025() {
    this.elements.yearFilterDropdown().click();
    this.elements.yearOption2025().click();
    this.elements.applyFilterButton().click();
  }

  applyYearFilter_2011() {
    this.elements.yearFilterDropdown().click();
    this.elements.yearOption2011().click();
    this.elements.applyFilterButton().click();
  }

  sortByPriceLowToHigh() {
    this.elements.sortByDropdown().click();
    this.elements.sortPriceLowToHigh().click();
  }

  // ======================== ✅ Extraction Methods =======================//

  getAllPrices() {
    return this.elements.priceElements().then($els => {
      return Cypress._.map($els, el => {
        const fullText = el.innerText;
        let usedPrice = fullText.split('\n')[0];
        usedPrice = usedPrice.replace(/[^0-9]/g, '');
        return usedPrice ? parseInt(usedPrice) : null;
      }).filter(p => p !== null);
    });
  }

  getAllTitles() {
    return this.elements.listingTitleLinks().then($els =>
      Cypress._.map($els, el => el.innerText.trim())
    );
  }

  getAllYears() {
    return this.elements.yearElements().then($els =>
      Cypress._.map($els, el => el.innerText.trim())
    );
  }

  // ======================== ✅ Validation =======================//

  arePricesSortedLowToHigh() {
    return this.getAllPrices().then(prices => {
      for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] > prices[i + 1]) {
          return false;
        }
      }
      return true;
    });
  }
}

export default new UsedTractorListingPage();