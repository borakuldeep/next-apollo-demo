beforeEach(() => {
    cy.visit("/");
  });
  describe("Navbar Test", () => {
    it("should have navbar a tags", () => {
        cy.get('nav')
      cy.get("a").should("contain", "Next Apollo");
      cy.get("a").should("contain", "Home");
      cy.get("a").should("contain", "About");
      cy.get("a").should("contain", "Users");
    });
  
    it("test about link", () => {
        cy.get("[id*=about_link]").should("contain", "About").click();
        cy.url().should("contain", "/about")
    });

    it("test users link", () => {
        cy.get("[id*=users_link]").should("contain", "Users").click();
        cy.url().should("contain", "/users")
    });
  });
  