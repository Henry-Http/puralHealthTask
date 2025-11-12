import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pageObjects/loginPage";

Given("I open the SauceDemo login page", () => {
  loginPage.visit();
});

When("I login with {string} and {string}", (username, password) => {
  loginPage.login(username, password);
});

Then("I should see the products page", () => {
  loginPage.elements
    .productTitle()
    .should("be.visible")
    .and("contain", "Products");
});

Then("I should see an error message saying {string}", (errorText) => {
  loginPage.elements
    .errorMessage()
    .should("be.visible")
    .and("contain", errorText);
});

Then("I should see UI inconsistencies on the product page", () => {
  loginPage.elements.productTitle().should("be.visible");
  cy.get(".inventory_item_img img").should("exist");
  cy.get(".inventory_item_img img").each(($img) => {
    cy.wrap($img).should("have.attr", "src").and("include", ".jpg");
  });
});
