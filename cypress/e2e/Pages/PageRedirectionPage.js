class PageRedirectionPage {

  //======================== 🔍 Locators =======================//

  elements = {
    // 🧭 Header links
    headerLinks: () => cy.get('.headerMain.newmain-header a'),

    // 🔻 Footer links (ignoring href="#")
    footerLinks: () => cy.get("footer.footer-main a[href]:not([href='#'])"),

    // 🌐 All common links except header and footer
    commonPageLinks: () => cy.get("a").not('.headerMain a').not('footer a'),
  };

  // ======================== ✅ Actions =======================//
  // Add actions as needed, for example:

  clickHeaderLink(index) {
    this.elements.headerLinks().eq(index).click();
  }

  clickFooterLink(index) {
    this.elements.footerLinks().eq(index).click();
  }

  clickCommonPageLink(index) {
    this.elements.commonPageLinks().eq(index).click();
  }
}

export default new PageRedirectionPage();