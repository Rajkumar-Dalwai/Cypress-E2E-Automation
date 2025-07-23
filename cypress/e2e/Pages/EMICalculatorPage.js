class EMICalculatorPage {

  //======================== 🔍 Locators =======================//

  elements = {
    brandSelect: () => cy.get('#brandselect'),
    firstBrand: () => cy.xpath("(//span[contains(@class, 'emi-listing-item') and contains(@class, 'brand')])[1]"),
    firstModel: () => cy.xpath("(//li[@class='brand-wraaper tractorlisting'])[1]"),
    calculateEMIButton: () => cy.xpath("//span[normalize-space()='Calculate EMI']"),
    monthlyEMI: () => cy.get('.total_emi'),
    loanAmount: () => cy.get('#loanAmount'),
    totalPayable: () => cy.get('#totalPayable'),
  };

  // ======================== ✅ Actions =======================//

  selectBrand(brandName) {
    this.elements.brandSelect().select(brandName);
  }

  clickFirstBrand() {
    this.elements.firstBrand().should('be.visible').click();
  }

  clickFirstModel() {
    this.elements.firstModel().should('be.visible').click();
  }

  clickCalculateEMI() {
    this.elements.calculateEMIButton().click();
  }

  getMonthlyEMI() {
    return this.elements.monthlyEMI().invoke('text').then(text => text.trim());
  }

  getLoanAmount() {
    return this.elements.loanAmount().invoke('text').then(text => text.trim());
  }

  getTotalPayable() {
    return this.elements.totalPayable().invoke('text').then(text => text.trim());
  }
}

export default new EMICalculatorPage();