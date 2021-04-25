beforeEach(() => {
  cy.visit("/users");
});

describe("User's Page Loads", () => {
  it("successfully loads", () => {
    cy.url().should("include", "users");
    cy.get("h1").should("contain", "User's List");
    cy.get("button").should("have.length", 2);
  });

  it("should go to homepage when clicked on Go Home", () => {
    cy.get("button:first").should("contain", "Go Home").click();
    cy.url().should("not.contain", "/users");
  });
});

describe("Count initial nummber of users", () => {
  it("should equal to 10", () => {
    cy.get("[class*=Users_card]").should("have.length", 10);
  });
});

describe("Count users after Loading more", () => {
  it("should equal to 20", () => {
    cy.get("button:last").should("contain", "Load more").as('loadMoreBtn');
    cy.get('@loadMoreBtn').click();
    cy.get("[class*=Users_card]").should("have.length", 20);
  });
});
