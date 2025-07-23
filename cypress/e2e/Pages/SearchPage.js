class SearchPage {

  //======================== 🔍 Locators =======================//

  elements = {
    searchField: () => cy.get('#inpt-serch'),
    headingElement: () => cy.get('h1'),
    noSuggestionsSpan: () => cy.get('span.search-no-result'),
  };

  // ======================== ✅ Actions =======================//

  enterIntoSearchField(keywords) {
    this.elements.searchField().type(keywords);
  }

  clickSearchField() {
    this.elements.searchField().click();
  }

  typeIntoSearchField(text) {
    this.elements.searchField().type(text);
  }

  getSearchHeadingText() {
    return this.elements.headingElement().should('be.visible').invoke('text').then(text => text.trim());
  }

  getNoSuggestionMessage() {
    return this.elements.noSuggestionsSpan()
      .should('be.visible')
      .invoke('text')
      .then(text => text.trim())
      .catch(() => '');
  }
}

export default new SearchPage();