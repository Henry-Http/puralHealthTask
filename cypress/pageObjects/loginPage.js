class LoginPage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginButton: () => cy.get("#login-button"),
    productTitle: () => cy.get(".title"),
    errorMessage: () => cy.get("[data-test='error']"), 
  };

  visit() {
    cy.visit("/");
  }

  login(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().click();
  }
}

module.exports = new LoginPage();
