beforeEach(() => {
  cy.visit("/");
});
describe("Home Page Test", () => {
  it("successfully loads", () => {
    cy.get('nav');
    cy.get("main").should("contain", "Hello");
    cy.get("h1").should("contain", "Welcome to Next Apollo App");
    cy.get("button").should("contain", "View user's list").click();
    cy.url().should("contain", "/users");
  });

  it("should have footer", () => {
    cy.get("footer").should(
      "contain",
      "Copyright 2021 Next-Apollo. Dev - Kuldeep Bora"
    );
  });
});
