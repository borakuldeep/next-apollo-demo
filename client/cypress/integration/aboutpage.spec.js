describe("About Page", () => {
  it("successfully loads", () => {
    cy.visit("/about");
    cy.url().should("contain", "/about");
    cy.get("button").should("contain", "Go Home").click();
    cy.url().should("not.contain", "/about");
  });
});
